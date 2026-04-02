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
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                color: palette.text.primary,
              }}
            >
              ある日突然、健康を失う。
              <br />
              その「絶望」を、私はたくさん見てきました。
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Box sx={{ borderLeft: `2px solid ${palette.secondary.main}`, pl: 4, py: 1 }}>
              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3, lineHeight: 2 }}>
                仕事を頑張ってきた。家族のために走り続けてきた。
                <br />
                そんな人が、ある日突然、思い描いていた人生が思うようにいかなくなる。
                <br />
                そういう場面を、何度も見てきました。
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3, lineHeight: 2 }}>
                私はもともと、大手製薬会社で抗がん剤の新薬開発に携わっていました。
                <br />
                がんの苦しみを何とかできないか。そんな思いで、膨大な論文を読み、研究を重ねてきた。
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3, lineHeight: 2 }}>
                でも現実は、抗がん剤の世界では、10年で亡くなるはずだった人が、11年生きられた。
                <br />
                それが、「画期的な成果」と呼ばれる世界。
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3, lineHeight: 2 }}>
                その薬が必要な人がいることは、わかっています。
                <br />
                でも私は思った。
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: palette.text.primary, fontWeight: 500, fontSize: '1.05rem', mb: 3, lineHeight: 2 }}
              >
                そもそも、そんな状態にならない人を増やしたい。
                <br />
                前の段階で、できることが山ほどある。
              </Typography>

              <Typography variant="body1" sx={{ color: palette.text.secondary, lineHeight: 2 }}>
                その想いが、予防医学の道へ私を動かしました。
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
