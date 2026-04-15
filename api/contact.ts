import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const concernLabels: Record<string, string> = {
  fatigue: '疲れが取れない・体が重い',
  health_check: '健康診断の結果を改善したい',
  diet: '効率的なダイエット・食事法を知りたい',
  prevention: '将来の病気リスクを下げたい',
  none: '特にない（まずは話を聞いてみたい）',
};

const timeSlotLabels: Record<string, string> = {
  morning: '午前（9:00〜12:00）',
  afternoon: '午後（13:00〜17:00）',
  evening: '夕方（17:00〜19:00）',
};

const consultationTypeLabels: Record<string, string> = {
  free_consultation: '1時間の個別相談（無料）に申し込む',
  service_inquiry: 'サービス内容について質問したい',
  corporate: '法人・団体での利用を検討している',
  other: 'その他',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS対応
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 環境変数チェック
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({
      error: 'メール送信サービスが設定されていません。管理者にお問い合わせください。',
      code: 'RESEND_NOT_CONFIGURED'
    });
  }

  try {
    const {
      name,
      email,
      phone,
      consultationType,
      concerns,
      preferredDate1,
      preferredTime1,
      preferredDate2,
      preferredTime2,
      message,
    } = req.body;

    if (!name || !email || !consultationType) {
      return res.status(400).json({ error: '必須項目を入力してください' });
    }

    // 気になっていることをラベルに変換
    const concernsText = Array.isArray(concerns) && concerns.length > 0
      ? concerns.map((c: string) => concernLabels[c] || c).join('、')
      : 'なし';

    // 希望日時のフォーマット
    const formatDateTime = (date: string, time: string) => {
      if (!date) return '';
      const formattedDate = new Date(date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const timeLabel = time ? timeSlotLabels[time] || time : '';
      return timeLabel ? `${formattedDate} ${timeLabel}` : formattedDate;
    };

    const preferredDateTime1 = formatDateTime(preferredDate1, preferredTime1);
    const preferredDateTime2 = formatDateTime(preferredDate2, preferredTime2);

    // メール本文
    const emailBody = `
Onc Labo お問い合わせフォームより新しいお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お名前】
${name}

【メールアドレス】
${email}

【電話番号】
${phone || '未記入'}

【ご相談の種類】
${consultationTypeLabels[consultationType] || consultationType}

【今、一番気になっていること】
${concernsText}

【個別相談の希望日時】
第一希望: ${preferredDateTime1 || '未記入'}
第二希望: ${preferredDateTime2 || '未記入'}

【メッセージ】
${message || 'なし'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
このメールはOnc Laboウェブサイトのお問い合わせフォームから自動送信されました。
`.trim();

    // 自動返信メール本文
    const autoReplyBody = `
${name} 様

この度はOnc Laboにお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【ご相談の種類】
${consultationTypeLabels[consultationType] || consultationType}

【今、一番気になっていること】
${concernsText}

【個別相談の希望日時】
第一希望: ${preferredDateTime1 || '未記入'}
第二希望: ${preferredDateTime2 || '未記入'}

【メッセージ】
${message || 'なし'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3営業日以内に担当者よりご連絡させていただきます。
今しばらくお待ちくださいませ。

※このメールは自動送信されています。
ご返信いただいてもお答えできない場合がございます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Onc Labo（オンクラボ）
予防医学士® 井田 孝
https://onclabo.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    // Resendインスタンス作成
    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminEmail = process.env.ADMIN_EMAIL || 'info@onclabo.com';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@onclabo.com';

    console.log('Sending emails with config:', { adminEmail, fromEmail });

    // 管理者への通知メール
    const adminResult = await resend.emails.send({
      from: `Onc Labo <${fromEmail}>`,
      to: adminEmail,
      subject: `【Onc Labo】新しいお問い合わせ: ${name}様`,
      text: emailBody,
    });

    if (adminResult.error) {
      console.error('Admin email error:', adminResult.error);
      return res.status(500).json({
        error: '管理者への通知メール送信に失敗しました',
        details: adminResult.error.message
      });
    }

    console.log('Admin email sent:', adminResult.data?.id);

    // ユーザーへの自動返信メール
    const userResult = await resend.emails.send({
      from: `Onc Labo <${fromEmail}>`,
      to: email,
      subject: '【Onc Labo】お問い合わせありがとうございます',
      text: autoReplyBody,
    });

    if (userResult.error) {
      console.error('User email error:', userResult.error);
      // 管理者メールは送れたので、ユーザーメールの失敗は警告として処理
      console.warn('User auto-reply failed, but admin notification was sent');
    } else {
      console.log('User email sent:', userResult.data?.id);
    }

    console.log('Contact form submission completed:', { name, email, consultationType });

    return res.status(200).json({ success: true, message: 'お問い合わせを受け付けました' });
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({
      error: 'サーバーエラーが発生しました',
      details: errorMessage
    });
  }
}
