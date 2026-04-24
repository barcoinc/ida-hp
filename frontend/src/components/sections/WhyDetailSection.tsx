import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

export default function WhyDetailSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.background.default }}>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ maxWidth: 680, margin: '0 auto' }}
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
              WHY
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontSize: { xs: '1.3rem', md: '1.8rem' },
                letterSpacing: '0.05em',
                color: palette.text.primary,
                wordBreak: 'keep-all',
              }}
            >
              ある日突然、健康を失う。
              <br />
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>その「絶望」を、</Box>
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>私はたくさん見てきました。</Box>
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Box sx={{ borderLeft: `2px solid ${palette.secondary.main}`, pl: { xs: 2.5, md: 4 }, py: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: palette.text.secondary,
                  mb: 3,
                  fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                  letterSpacing: '0.1em',
                  lineHeight: 2.4,
                }}
              >
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>仕事を頑張ってきた。</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>家族のために走り続けてきた。</Box>
                {' '}
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>そんな人が、ある日突然、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>思い描いていた人生が</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>思うようにいかなくなる。</Box>
                {' '}
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>そういう場面を、何度も見てきました。</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: palette.text.secondary,
                  mb: 3,
                  fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                  letterSpacing: '0.1em',
                  lineHeight: 2.4,
                }}
              >
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>私はもともと、大手製薬会社で</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>抗がん剤の新薬開発に携わっていました。</Box>
                {' '}
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>がんの苦しみを何とかできないか。</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>そんな思いで、膨大な論文を読み、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>研究を重ねてきた。</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: palette.text.secondary,
                  mb: 3,
                  fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                  letterSpacing: '0.1em',
                  lineHeight: 2.4,
                }}
              >
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>でも現実は、抗がん剤の世界では、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>10年で亡くなるはずだった人が、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>11年生きられた。</Box>
                {' '}
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>それが、「画期的な成果」と呼ばれる世界。</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: palette.text.secondary,
                  mb: 3,
                  fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                  letterSpacing: '0.1em',
                  lineHeight: 2.4,
                }}
              >
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>その薬が必要な人がいることは、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>わかっています。</Box>
                {' '}
                <Box component="span" sx={{ display: 'block' }}>でも私は思った。</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: palette.text.primary,
                  fontWeight: 500,
                  fontSize: { xs: '1.05rem', md: '1.2rem' },
                  letterSpacing: '0.08em',
                  lineHeight: 2.2,
                  mb: 3,
                }}
              >
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>そもそも、そんな状態にならない人を</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>増やしたい。</Box>
                {' '}
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>前の段階で、できることが山ほどある。</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: palette.text.secondary,
                  fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                  letterSpacing: '0.1em',
                  lineHeight: 2.4,
                }}
              >
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>その想いが、予防医学の道へ</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>私を動かしました。</Box>
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
