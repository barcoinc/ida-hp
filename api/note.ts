import type { VercelRequest, VercelResponse } from '@vercel/node';

interface NotePost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // noteのRSSフィードを取得
    const rssUrl = 'https://note.com/onc_labo0511/rss';
    const response = await fetch(rssUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xmlText = await response.text();

    // シンプルなXMLパース（正規表現を使用）
    const items: NotePost[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemXml = match[1];

      const getTagContent = (tag: string): string => {
        const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
        const tagMatch = itemXml.match(regex);
        return tagMatch ? (tagMatch[1] || tagMatch[2] || '').trim() : '';
      };

      const title = getTagContent('title');
      const link = getTagContent('link');
      const description = getTagContent('description')
        .replace(/<[^>]*>/g, '') // HTMLタグを除去
        .substring(0, 200); // 200文字に制限
      const pubDate = getTagContent('pubDate');

      // サムネイル画像を取得（media:thumbnail または enclosure）
      const thumbnailMatch = itemXml.match(/url="([^"]*\.(jpg|jpeg|png|gif|webp)[^"]*)"/i) ||
                             itemXml.match(/<enclosure[^>]*url="([^"]*)"/);
      const thumbnail = thumbnailMatch ? thumbnailMatch[1] : '/images/hero-main.jpg';

      // IDを抽出（URLの末尾から）
      const idMatch = link.match(/\/n\/([a-zA-Z0-9]+)/);
      const id = idMatch ? idMatch[1] : String(Date.now());

      items.push({
        id,
        title,
        description: description || 'noteの記事です。',
        thumbnail,
        publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        url: link,
      });
    }

    // キャッシュヘッダーを設定（1時間キャッシュ）
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return res.status(200).json(items);
  } catch (error) {
    console.error('Note RSS fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
}
