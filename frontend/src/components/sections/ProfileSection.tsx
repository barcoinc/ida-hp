import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '../../hooks/useScrollAnimation';
import { palette } from '../../theme/palette';

export default function ProfileSection() {
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
              PROFILE
            </Typography>
          </motion.div>

          <Grid container spacing={6} sx={{ maxWidth: 900, mx: 'auto' }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div variants={slideInLeft}>
                <Box
                  component="img"
                  src="/images/profile-ida.png"
                  alt="井田 孝 プロフィール写真"
                  sx={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: 1,
                  }}
                />
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div variants={slideInRight}>
                <Typography
                  variant="h2"
                  sx={{ mb: 1, fontSize: { xs: '1.5rem', md: '1.8rem' }, color: palette.text.primary }}
                >
                  井田 孝
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: palette.text.light, mb: 4, letterSpacing: '0.04em' }}
                >
                  イダ タカシ &nbsp;／&nbsp; 予防医学士® &nbsp;／&nbsp; Onc Labo 代表
                </Typography>

                <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3 }}>
                  有機化学を専門とする研究者として、大手製薬会社で6年間、抗がん剤の新薬開発に携わってきました。
                </Typography>

                <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 3 }}>
                  膨大な論文と人体の研究を重ねる中で、「なる前の段階で整えることが、一人ひとりの人生を守る」という確信が生まれました。
                </Typography>

                <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 4 }}>
                  予防医学士®の資格を取得し、食事・サプリメント・ファスティング・検査を組み合わせた「根拠のある身体づくり」を提供しています。
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: palette.text.primary, fontWeight: 500, mb: 4 }}
                >
                  2025年5月、Onc Labo（オンクラボ）設立。
                </Typography>

                <Box sx={{ borderTop: `1px solid ${palette.divider}`, pt: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: palette.secondary.main,
                      letterSpacing: '0.1em',
                      mb: 2,
                      fontWeight: 500,
                      fontSize: '0.8rem',
                    }}
                  >
                    ACADEMIC
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 2 }}>
                    岐阜薬科大学大学院修了（薬学）
                    <br />
                    国際学術誌 Advanced Synthesis &amp; Catalysis 論文掲載（2014年）
                    <br />
                    日本薬学会・複数学会での研究発表実績
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
