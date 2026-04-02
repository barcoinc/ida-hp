import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

const services = [
  {
    num: '①',
    title: '痩せたい・身体を絞りたい',
    text: '食べないで痩せようとしていませんか。実は、やり方を間違えると逆効果になります。「なぜ脂肪が落ちるのか」を理解しながら進むから、リバウンドしにくく、知識として一生使えます。',
  },
  {
    num: '②',
    title: '身体の違和感・不調を改善したい',
    text: '疲れやすい、集中力が続かない、なんとなくだるい。病院に行くほどではないけれど、ずっと気になっている。そこには必ず原因があります。検査で数値を見ながら、食事・サプリで根本から整えます。',
  },
  {
    num: '③',
    title: '今の健康を、ずっとキープしたい',
    text: '今は特に困っていない。今の状態が本当にいいのか確認したい。この先もずっと、思うように動ける身体でいたい。予防医学士として、生活習慣のリスクを数値で見える化しながら、ずっと思うように動ける身体を、一緒に整えていきます。',
  },
];

export default function WhatDetailSection() {
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
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontSize: { xs: '1.3rem', md: '1.7rem' },
                color: palette.text.primary,
              }}
            >
              私がやるのは
              <br />
              <Box component="span" sx={{ color: palette.secondary.main, fontWeight: 500 }}>
                「あなたの身体を最高の状態にすること」
              </Box>
              です。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                mb: 8,
                color: palette.text.secondary,
                lineHeight: 2,
              }}
            >
              体調が優れない人、痩せたい人、疲れやすい人、今は健康な人、
              <br />
              どんな人にもお役に立つことが出来ます。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontSize: { xs: '1.1rem', md: '1.4rem' },
                color: palette.text.primary,
              }}
            >
              例えば・・・
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
                      p: 4,
                      transition: 'all 0.5s ease',
                      '&:hover': {
                        borderColor: palette.secondary.main,
                        boxShadow: '0 4px 20px rgba(26,39,68,0.06)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        color: palette.secondary.main,
                        mb: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {s.num}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ mb: 2, fontSize: '1.05rem', color: palette.text.primary, fontWeight: 500 }}
                    >
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 2 }}>
                      {s.text}
                    </Typography>
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
