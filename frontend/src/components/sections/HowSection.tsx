import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

export default function HowSection() {
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
              HOW
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
              私がお伝えするのは、
              <br />
              健康で居続けるための知識です。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', mb: 8, color: palette.text.secondary, fontSize: { xs: '0.9rem', md: '1rem' } }}
            >
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>誰にでも当てはまる話ではなく、</Box>
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>あなたの身体に合ったものを。</Box>
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Box sx={{ borderLeft: `2px solid ${palette.accent.warmGray}`, pl: { xs: 2.5, md: 4 }, py: 1 }}>
              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>健康サービスで「結局、何か買わされた」</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>という経験がある方もいると思います。</Box>
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>私が大切にしているのは、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>必要なものだけを、理由とともに伝えること。</Box>
                <Box component="span" sx={{ display: 'block' }}>必要なければ、何も勧めません。</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>あなた自身が、自分の身体を</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>最高の状態で保てるようになることが、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>私のゴールです。</Box>
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>痩せたい人も、疲れやすい人も、</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>なんとなく不安な人も。</Box>
                <Box component="span" sx={{ display: 'block' }}>どんな悩みにも、必ず理由があります。</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: palette.text.primary, fontWeight: 500, fontSize: { xs: '0.95rem', md: '1.05rem' } }}
              >
                <Box component="span" sx={{ display: 'block' }}>理由がわかると、動ける。</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>そして、あなたはあなた自身を</Box>
                <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>守れるようになります。</Box>
                <Box component="span" sx={{ display: 'block' }}>それが私の「当たり前」です。</Box>
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
