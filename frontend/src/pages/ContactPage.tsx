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
} from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, viewportConfig } from '../hooks/useScrollAnimation';
import { palette } from '../theme/palette';

const consultationTypes = [
  { value: 'diet', label: '痩せたい・身体を絞りたい' },
  { value: 'health', label: '身体の違和感・不調を改善したい' },
  { value: 'maintenance', label: '今の健康を、ずっとキープしたい' },
  { value: 'other', label: 'その他・まずは相談したい' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('送信に失敗しました');
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', consultationType: '', message: '' });
    } catch {
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
              <Typography variant="body1" sx={{ color: palette.text.secondary, maxWidth: 560, mx: 'auto' }}>
                1時間の個別相談（無料）のお申し込み、
                <br />
                またはご質問はこちらからどうぞ。
              </Typography>
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
                  送信に失敗しました。お手数ですが、時間をおいて再度お試しください。
                </Alert>
              )}

              <TextField
                fullWidth required label="お名前"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth required type="email" label="メールアドレス"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth label="電話番号（任意）"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth required select label="ご相談内容"
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                sx={{ mb: 3 }}
              >
                {consultationTypes.map((t) => (
                  <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
                ))}
              </TextField>
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
