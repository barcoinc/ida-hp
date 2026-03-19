import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, consultationType, message } = req.body;

    if (!name || !email || !consultationType) {
      return res.status(400).json({ error: '必須項目を入力してください' });
    }

    // TODO: メール送信の実装（Resend等）
    console.log('Contact form submission:', { name, email, phone, consultationType, message });

    return res.status(200).json({ success: true, message: 'お問い合わせを受け付けました' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'サーバーエラーが発生しました' });
  }
}
