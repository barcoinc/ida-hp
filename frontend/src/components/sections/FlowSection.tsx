import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

const slideInItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const steps = [
  {
    step: 'STEP 1',
    title: '1時間の個別相談（無料）',
    text: '今の状態・目標・気になることを、一緒に整理します。',
  },
  {
    step: 'STEP 2',
    title: '検査で「今」を数値化',
    text: '自宅でできる検査キットで、身体の現状を見える化。感覚ではなく、データから始めます。',
  },
  {
    step: 'STEP 3',
    title: 'あなた専用プランをご提案',
    text: '痩せたい・違和感改善・健康キープ、どこからでも入れます。',
  },
  {
    step: 'STEP 4',
    title: '3〜6ヶ月の伴走サポート',
    text: '1ヶ月ごとに確認・調整。サポートが外れても、ひとりで続けられる状態を目指します。',
  },
];

export default function FlowSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.background.paper }}>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
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
              FLOW
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontSize: { xs: '1.3rem', md: '1.7rem' },
                color: palette.text.primary,
              }}
            >
              たった4ステップ。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', mb: 8, color: palette.text.secondary }}
            >
              「なぜ」の積み重ねで、身体が変わる。
            </Typography>
          </motion.div>

          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {steps.map((s, i) => (
              <motion.div key={i} variants={slideInItem}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 3, md: 4 },
                    py: 4,
                    borderBottom:
                      i < steps.length - 1 ? `1px solid ${palette.divider}` : 'none',
                  }}
                >
                  <Box sx={{ flexShrink: 0, width: { xs: 60, md: 80 } }}>
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        color: palette.secondary.main,
                        letterSpacing: '0.1em',
                        fontWeight: 600,
                      }}
                    >
                      {s.step}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ mb: 1, fontSize: { xs: '1rem', md: '1.1rem' }, color: palette.text.primary }}
                    >
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.text.secondary }}>
                      {s.text}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
