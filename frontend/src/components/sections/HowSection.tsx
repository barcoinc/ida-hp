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
              健康でい続けるための知識です。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', mb: 8, color: palette.text.secondary }}
            >
              誰にでも当てはまる話ではなく、あなたの身体に合ったものを。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Box sx={{ borderLeft: `2px solid ${palette.accent.warmGray}`, pl: 4, py: 1 }}>
              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3 }}>
                健康サービスで「結局、何か買わされた」という経験がある方もいると思います。
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3 }}>
                私が大切にしているのは、必要なものだけを、理由とともに伝えること。
                <br />
                必要なければ、何も勧めません。
                <br />
                あなた自身が、自分の身体を最高の状態で保てるようになることが、私のゴールです。
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3 }}>
                痩せたい人も、疲れやすい人も、なんとなく不安な人も。
                <br />
                どんな悩みにも、必ず理由があります。
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: palette.text.primary, fontWeight: 500, fontSize: '1.05rem' }}
              >
                理由がわかると、動ける。
                <br />
                そして、あなたはあなた自身を守れるようになります。
                <br />
                それが私の「当たり前」です。
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
