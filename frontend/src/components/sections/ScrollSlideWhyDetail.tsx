import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideWhyDetail() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: palette.background.default,
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 680, mx: 'auto' }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.8rem',
              color: palette.secondary.main,
              letterSpacing: '0.2em',
              mb: 4,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            WHY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.6rem' },
              color: palette.text.primary,
              lineHeight: 1.8,
            }}
          >
            ある日突然、健康を失う。
            <br />
            その「絶望」を、私はたくさん見てきました。
          </Typography>

          <Box sx={{ borderLeft: `2px solid ${palette.secondary.main}`, pl: { xs: 2.5, md: 4 }, py: 1 }}>
            <Typography sx={{ color: palette.text.secondary, mb: 2, fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 2 }}>
              仕事を頑張ってきた。家族のために走り続けてきた。
              そんな人が、ある日突然、思い描いていた人生が思うようにいかなくなる。
              そういう場面を、何度も見てきました。
            </Typography>

            <Typography sx={{ color: palette.text.secondary, mb: 2, fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 2 }}>
              私はもともと、大手製薬会社で抗がん剤の新薬開発に携わっていました。
              がんの苦しみを何とかできないか。そんな思いで、膨大な論文を読み、研究を重ねてきた。
            </Typography>

            <Typography sx={{ color: palette.text.secondary, mb: 2, fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 2 }}>
              でも現実は、抗がん剤の世界では、10年で亡くなるはずだった人が、11年生きられた。
              それが、「画期的な成果」と呼ばれる世界。
            </Typography>

            <Typography sx={{ color: palette.text.secondary, mb: 2, fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 2 }}>
              その薬が必要な人がいることは、わかっています。
              でも私は思った。
            </Typography>

            <Typography sx={{ color: palette.text.primary, fontWeight: 500, fontSize: { xs: '0.85rem', md: '1rem' }, mb: 2, lineHeight: 2 }}>
              そもそも、そんな状態にならない人を増やしたい。
              前の段階で、できることが山ほどある。
            </Typography>

            <Typography sx={{ color: palette.text.secondary, fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 2 }}>
              その想いが、予防医学の道へ私を動かしました。
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
