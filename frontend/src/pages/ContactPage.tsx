import { useState, type FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, viewportConfig } from '../hooks/useScrollAnimation';
import { palette } from '../theme/palette';

const consultationTypes = [
  { value: 'free_consultation', label: '1時間の個別相談（無料）に申し込む' },
  { value: 'service_inquiry', label: 'サービス内容について質問したい' },
  { value: 'corporate', label: '法人・団体での利用を検討している' },
  { value: 'other', label: 'その他' },
];

const concernOptions = [
  { value: 'fatigue', label: '疲れが取れない・体が重い' },
  { value: 'health_check', label: '健康診断の結果を改善したい' },
  { value: 'diet', label: '効率的なダイエット・食事法を知りたい' },
  { value: 'prevention', label: '将来の病気リスクを下げたい' },
  { value: 'none', label: '特にない（まずは話を聞いてみたい）' },
];

const timeSlots = [
  { value: '', label: '選択してください' },
  { value: 'morning', label: '午前（9:00〜12:00）' },
  { value: 'afternoon', label: '午後（13:00〜17:00）' },
  { value: 'evening', label: '夕方（17:00〜19:00）' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'free_consultation',
    concerns: [] as string[],
    preferredDate1: '',
    preferredTime1: '',
    preferredDate2: '',
    preferredTime2: '',
    message: '',
  });

  const handleConcernChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(value)
        ? prev.concerns.filter((c) => c !== value)
        : [...prev.concerns, value],
    }));
  };
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || '送信に失敗しました');
      }
      setStatus('sent');
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultationType: 'free_consultation',
        concerns: [],
        preferredDate1: '',
        preferredTime1: '',
        preferredDate2: '',
        preferredTime2: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact form error:', err);
      setErrorMessage(err instanceof Error ? err.message : '送信に失敗しました');
      setStatus('error');
    }
  };

  return (
    <>
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 }, backgroundColor: palette.background.warm, textAlign: 'center' }}>
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.div variants={fadeInUp}>
              <Typography variant="body2" sx={{ color: palette.secondary.main, letterSpacing: '0.15em', mb: 3, fontWeight: 500 }}>
                CONTACT
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, color: palette.text.primary, mb: 3 }}>
                お問い合わせ
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="body1" sx={{ color: palette.text.secondary, maxWidth: 560, mx: 'auto', mb: 4 }}>
                1時間の個別相談（無料）のお申し込み、
                <br />
                またはご質問はこちらからどうぞ。
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                component="a"
                href="https://line.me/R/ti/p/@412xghmg"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                }
                sx={{
                  backgroundColor: '#06C755',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#05b34c',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(6, 199, 85, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                LINEで相談はコチラ
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 560, mx: 'auto' }}
            >
              {status === 'sent' && (
                <Alert severity="success" sx={{ mb: 4 }}>
                  お問い合わせありがとうございます。3営業日以内にご連絡いたします。
                </Alert>
              )}
              {status === 'error' && (
                <Alert severity="error" sx={{ mb: 4 }}>
                  {errorMessage || '送信に失敗しました。お手数ですが、時間をおいて再度お試しください。'}
                </Alert>
              )}

              {/* 1. お名前（必須） */}
              <TextField
                fullWidth required label="お名前"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{ mb: 3 }}
              />

              {/* 2. メールアドレス（必須） */}
              <TextField
                fullWidth required type="email" label="メールアドレス"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{ mb: 3 }}
              />

              {/* 3. 電話番号（任意） */}
              <TextField
                fullWidth label="電話番号（任意）"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                sx={{ mb: 3 }}
              />

              {/* 4. ご相談の種類（必須） */}
              <TextField
                fullWidth required select label="ご相談の種類"
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                sx={{ mb: 3 }}
              >
                {consultationTypes.map((t) => (
                  <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
                ))}
              </TextField>

              {/* 5. 今、一番気になっていること（任意 / チェックボックス） */}
              <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
                <FormLabel
                  component="legend"
                  sx={{
                    color: palette.text.secondary,
                    fontSize: '0.875rem',
                    mb: 1,
                    '&.Mui-focused': { color: palette.text.secondary },
                  }}
                >
                  今、一番気になっていること（任意・複数選択可）
                </FormLabel>
                <FormGroup>
                  {concernOptions.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      control={
                        <Checkbox
                          checked={formData.concerns.includes(option.value)}
                          onChange={() => handleConcernChange(option.value)}
                          sx={{
                            color: palette.divider,
                            '&.Mui-checked': { color: palette.secondary.main },
                          }}
                        />
                      }
                      label={option.label}
                      sx={{ color: palette.text.primary }}
                    />
                  ))}
                </FormGroup>
              </FormControl>

              {/* 6. 個別相談の希望日時（任意） */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ color: palette.text.secondary, mb: 2 }}
                >
                  個別相談の希望日時（任意）
                </Typography>

                {/* 第一希望 */}
                <Typography variant="body2" sx={{ color: palette.text.primary, mb: 1, fontWeight: 500 }}>
                  第一希望
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    type="date"
                    label="日付"
                    value={formData.preferredDate1}
                    onChange={(e) => setFormData({ ...formData, preferredDate1: e.target.value })}
                    sx={{ flex: 1 }}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                  <TextField
                    select
                    label="時間帯"
                    value={formData.preferredTime1}
                    onChange={(e) => setFormData({ ...formData, preferredTime1: e.target.value })}
                    sx={{ flex: 1 }}
                  >
                    {timeSlots.map((slot) => (
                      <MenuItem key={slot.value} value={slot.value}>{slot.label}</MenuItem>
                    ))}
                  </TextField>
                </Box>

                {/* 第二希望 */}
                <Typography variant="body2" sx={{ color: palette.text.primary, mb: 1, fontWeight: 500 }}>
                  第二希望
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                  <TextField
                    type="date"
                    label="日付"
                    value={formData.preferredDate2}
                    onChange={(e) => setFormData({ ...formData, preferredDate2: e.target.value })}
                    sx={{ flex: 1 }}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                  <TextField
                    select
                    label="時間帯"
                    value={formData.preferredTime2}
                    onChange={(e) => setFormData({ ...formData, preferredTime2: e.target.value })}
                    sx={{ flex: 1 }}
                  >
                    {timeSlots.map((slot) => (
                      <MenuItem key={slot.value} value={slot.value}>{slot.label}</MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Typography variant="caption" sx={{ color: palette.text.light }}>
                  ※後ほど日程調整のご連絡を差し上げます。
                </Typography>
              </Box>

              {/* 7. メッセージ（任意） */}
              <TextField
                fullWidth multiline rows={5} label="メッセージ（任意）"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                sx={{ mb: 4 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={status === 'sending'}
                sx={{
                  backgroundColor: palette.primary.main,
                  py: 1.5,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: palette.primary.light,
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {status === 'sending' ? <CircularProgress size={24} color="inherit" /> : '送信する'}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
