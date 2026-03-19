import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import { fadeInUp, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const targets = [
  '健康は大事だとわかっているが、何もできていない',
  '疲れやすい、なんとなく不調、でも病気ではない',
  'ダイエットを試したが、なぜ効くのかわからないまま終わった',
  '今の自分の状態が本当にいいのか、一度確認してみたい',
  '今の健康を、この先もずっと保っていきたい',
  '根拠を理解して、自分なりに納得してから動きたい',
];

export default function TargetSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: palette.background.dark,
        color: palette.text.white,
      }}
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ maxWidth: 640, margin: '0 auto' }}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="body2"
              sx={{
                color: palette.secondary.main,
                letterSpacing: '0.15em',
                mb: 3,
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              FOR YOU
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontSize: { xs: '1.3rem', md: '1.7rem' },
                color: '#fff',
              }}
            >
              こんな方へ
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {targets.map((t, i) => (
              <motion.div key={i} variants={listItem}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckIcon
                    sx={{
                      color: palette.secondary.main,
                      fontSize: '1.1rem',
                      mt: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}
                  >
                    {t}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
