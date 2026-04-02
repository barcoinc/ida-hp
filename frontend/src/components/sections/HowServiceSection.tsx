import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

const services = [
  {
    num: '01',
    title: '個別伴走サポート',
    sub: '体質改善プラン',
    text: '一人ひとりの体質や生活習慣に合わせ、検査データと科学的根拠をもとに体質改善をサポートします。',
    image: '',
  },
  {
    num: '02',
    title: 'ファスティング指導',
    sub: 'オプティマムファスティング',
    text: '栄養学に基づいた安全なファスティング。筋肉量を維持しながら、効率よく脂肪を落とします。',
    image: '',
  },
  {
    num: '03',
    title: 'セミナー・講師活動',
    sub: '予防医学セミナー',
    text: '予防医学の考え方を、研究者ならではの視点でわかりやすく伝えます。のべ200名以上の登壇実績。',
    image: '/images/seminar.jpg',
  },
];

export default function HowServiceSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.background.default }}>
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
              HOW
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontSize: { xs: '1.3rem', md: '1.7rem' },
                color: palette.text.primary,
              }}
            >
              3つのサービス
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((s, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                  <Box
                    sx={{
                      height: '100%',
                      backgroundColor: '#fff',
                      borderRadius: 1,
                      border: `1px solid ${palette.accent.warmGray}`,
                      overflow: 'hidden',
                      transition: 'all 0.5s ease',
                      '&:hover': {
                        borderColor: palette.secondary.main,
                        boxShadow: '0 4px 20px rgba(26,39,68,0.06)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    {s.image && (
                      <Box
                        component="img"
                        src={s.image}
                        alt={s.title}
                        sx={{
                          width: '100%',
                          height: 180,
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <Box sx={{ p: 4 }}>
                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: '2rem',
                          color: palette.secondary.main,
                          mb: 1,
                          fontWeight: 300,
                        }}
                      >
                        {s.num}
                      </Typography>
                      <Typography variant="h4" sx={{ mb: 0.5, fontSize: '1.1rem', color: palette.text.primary, fontWeight: 500 }}>
                        {s.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: palette.text.light, fontSize: '0.8rem', mb: 2, letterSpacing: '0.04em' }}
                      >
                        {s.sub}
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 1.9 }}>
                        {s.text}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
