import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: palette.background.warm,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '60%',
          background: `radial-gradient(ellipse, ${palette.accent.softGold} 0%, transparent 70%)`,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontSize: { xs: '1.05rem', md: '1.7rem' },
                color: palette.text.primary,
                lineHeight: 1.8,
                wordBreak: 'keep-all',
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>「少しでも健康を見直してみようかな」</Box>
              <Box component="span" sx={{ display: 'block' }}>と思ったなら、</Box>
              ぜひ、話してみませんか。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{ color: palette.text.secondary, mb: 6, lineHeight: 2, fontSize: { xs: '0.9rem', md: '1rem' }, wordBreak: 'keep-all' }}
            >
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>突然、健康を失う。</Box>
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>その「絶望」を味わう前に。</Box>
              <br />
              あなたの話を、聞かせてください。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  backgroundColor: palette.primary.main,
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: palette.primary.light,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(26,39,68,0.2)',
                  },
                }}
              >
                1時間の個別相談を申し込む（無料）
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/service')}
                sx={{
                  borderColor: palette.primary.main,
                  color: palette.primary.main,
                  px: 4,
                  py: 1.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: palette.primary.light,
                    backgroundColor: 'rgba(26,39,68,0.04)',
                  },
                }}
              >
                サービスの詳細を見る
              </Button>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
