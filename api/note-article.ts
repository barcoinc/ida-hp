import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ArticleData {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  publishedAt: string;
  author: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS対応
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Article ID is required' });
  }

  try {
    // noteの記事ページを取得
    const articleUrl = `https://note.com/onc_labo0511/n/${id}`;
    const response = await fetch(articleUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }

    const html = await response.text();

    // タイトルを取得
    const titleMatch = html.match(/<h1[^>]*class="[^"]*o-noteContentHeader__title[^"]*"[^>]*>([^<]+)<\/h1>/);
    const title = titleMatch ? titleMatch[1].trim() : '';

    // 記事本文を取得（note-common-styles__textnote-body）
    const contentMatch = html.match(/<div[^>]*class="[^"]*note-common-styles__textnote-body[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
    let content = '';

    if (contentMatch) {
      content = contentMatch[1]
        // 不要なタグを削除しつつ、基本的なHTMLは維持
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        // noteの「チップで応援する」「ダウンロード」セクションを削除
        .replace(/ダウンロード[\s\S]*?チップで応援する[\s\S]*?(<\/[^>]+>){0,3}/gi, '')
        .replace(/チップで応援する/gi, '')
        .replace(/ダウンロード\s*<\/p>/gi, '</p>')
        .replace(/<p>\s*ダウンロード\s*<\/p>/gi, '')
        .replace(/class="[^"]*"/gi, '')
        .replace(/style="[^"]*"/gi, '')
        .replace(/data-[^=]*="[^"]*"/gi, '')
        .trim();
    } else {
      // 別のパターンで試す
      const altContentMatch = html.match(/<div[^>]*class="[^"]*p-article__content[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      if (altContentMatch) {
        content = altContentMatch[1]
          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
          // noteの「チップで応援する」「ダウンロード」セクションを削除
          .replace(/ダウンロード[\s\S]*?チップで応援する[\s\S]*?(<\/[^>]+>){0,3}/gi, '')
          .replace(/チップで応援する/gi, '')
          .replace(/ダウンロード\s*<\/p>/gi, '</p>')
          .replace(/<p>\s*ダウンロード\s*<\/p>/gi, '')
          .replace(/class="[^"]*"/gi, '')
          .replace(/style="[^"]*"/gi, '')
          .trim();
      }
    }

    // さらに別のパターン - JSON-LDから取得を試みる
    if (!content) {
      const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      if (jsonLdMatch) {
        try {
          const jsonLd = JSON.parse(jsonLdMatch[1]);
          if (jsonLd.articleBody) {
            content = `<p>${jsonLd.articleBody.replace(/\n/g, '</p><p>')}</p>`;
          }
        } catch (e) {
          // JSON解析エラーは無視
        }
      }
    }

    // サムネイル画像を取得
    const thumbnailMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    const thumbnail = thumbnailMatch ? thumbnailMatch[1] : '/images/hero-main.jpg';

    // 公開日を取得
    const dateMatch = html.match(/<time[^>]*datetime="([^"]+)"/);
    const publishedAt = dateMatch ? dateMatch[1] : new Date().toISOString();

    // 著者名
    const authorMatch = html.match(/<meta name="author" content="([^"]+)"/);
    const author = authorMatch ? authorMatch[1] : '井田 孝';

    const article: ArticleData = {
      id,
      title: title || 'タイトル取得中...',
      content: content || '<p>記事の読み込みに失敗しました。<a href="' + articleUrl + '" target="_blank">noteで読む</a></p>',
      thumbnail,
      publishedAt,
      author,
    };

    // キャッシュヘッダーを設定（1時間キャッシュ）
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return res.status(200).json(article);
  } catch (error) {
    console.error('Note article fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch article' });
  }
}
