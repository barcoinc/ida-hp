import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideWhyFull() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: palette.background.default,
        py: { xs: 4, md: 0 },
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.7rem',
              color: palette.secondary.main,
              letterSpacing: '0.2em',
              mb: { xs: 2, md: 3 },
              fontWeight: 500,
            }}
          >
            WHY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1rem', md: '1.3rem' },
              color: palette.text.primary,
              lineHeight: 1.8,
              mb: { xs: 2, md: 3 },
            }}
          >
            ある日突然、健康を失う。
            <br />
            その「絶望」を、私はたくさん見てきました。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              lineHeight: 2.2,
              mb: { xs: 2, md: 2.5 },
            }}
          >
            仕事を頑張ってきた。家族のために走り続けてきた。
            <br />
            そんな人が、ある日突然、思い描いていた人生が思うようにいかなくなる。
            <br />
            そういう場面を、何度も見てきました。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              lineHeight: 2.2,
              mb: { xs: 2, md: 2.5 },
            }}
          >
            私はもともと、大手製薬会社で抗がん剤の新薬開発に携わっていました。
            <br />
            がんの苦しみを何とかできないか。
            <br />
            そんな思いで、膨大な論文を読み、研究を重ねてきた。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              lineHeight: 2.2,
              mb: { xs: 2, md: 2.5 },
            }}
          >
            でも現実は、抗がん剤の世界では、
            <br />
            10年で亡くなるはずだった人が、11年生きられた。
            <br />
            それが、「画期的な成果」と呼ばれる世界。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              lineHeight: 2.2,
              mb: { xs: 2, md: 2.5 },
            }}
          >
            その薬が必要な人がいることは、わかっています。
            <br />
            でも私は思った。
          </Typography>

          <Typography
            sx={{
              color: palette.text.primary,
              fontWeight: 500,
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              lineHeight: 2,
              mb: { xs: 2, md: 2.5 },
            }}
          >
            そもそも、そんな状態にならない人を増やしたい。
            <br />
            前の段階で、できることが山ほどある。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              lineHeight: 2,
            }}
          >
            その想いが、予防医学の道へ私を動かしました。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
