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
        py: { xs: 2, md: 0 },
        overflowY: 'auto',
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center', py: { xs: 2, md: 4 } }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(0.75rem, 1.4vh, 0.9rem)',
              color: palette.secondary.main,
              letterSpacing: '0.2em',
              mb: { xs: 1, md: 'clamp(1.25rem, 2.2vh, 1.75rem)' },
              fontWeight: 500,
            }}
          >
            WHY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: 'clamp(1rem, 2.2vh, 1.3rem)',
                md: 'clamp(1.3rem, 2.6vh, 1.8rem)',
              },
              color: palette.text.primary,
              lineHeight: { xs: 1.6, md: 1.8 },
              letterSpacing: '0.05em',
              mb: { xs: 1.5, md: 'clamp(1.5rem, 2.6vh, 2rem)' },
            }}
          >
            ある日突然、健康を失う。
            <br />
            その「絶望」を、私は何度も見てきました。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: {
                xs: 'clamp(0.85rem, 1.9vh, 0.9375rem)',
                md: 'clamp(0.95rem, 2vh, 1.0625rem)',
              },
              letterSpacing: '0.08em',
              lineHeight: { xs: 2, md: 2.2 },
              mb: { xs: 1.25, md: 'clamp(1.25rem, 2.2vh, 1.75rem)' },
            }}
          >
            仕事を頑張り、家族のために走り続けてきた人が、
            <br />
            健康を失うことによって、ある日突然全てを失う場面を何度も見てきました。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: {
                xs: 'clamp(0.85rem, 1.9vh, 0.9375rem)',
                md: 'clamp(0.95rem, 2vh, 1.0625rem)',
              },
              letterSpacing: '0.08em',
              lineHeight: { xs: 2, md: 2.2 },
              mb: { xs: 1.25, md: 'clamp(1.25rem, 2.2vh, 1.75rem)' },
            }}
          >
            がんの苦しみを何とかしたい——その一心で、
            <br />
            大手製薬会社で抗がん剤の新薬開発に携わり、膨大な論文を読み、研究を重ねてきた。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: {
                xs: 'clamp(0.85rem, 1.9vh, 0.9375rem)',
                md: 'clamp(0.95rem, 2vh, 1.0625rem)',
              },
              letterSpacing: '0.08em',
              lineHeight: { xs: 2, md: 2.2 },
              mb: { xs: 1.25, md: 'clamp(1.25rem, 2.2vh, 1.75rem)' },
            }}
          >
            でも現実は、10年で亡くなるはずだった人が、11年生きられる。
            <br />
            それが「画期的な成果」と呼ばれる世界。
          </Typography>

          <Typography
            sx={{
              color: palette.text.primary,
              fontWeight: 500,
              fontSize: {
                xs: 'clamp(0.95rem, 2.1vh, 1.05rem)',
                md: 'clamp(1.05rem, 2.3vh, 1.2rem)',
              },
              letterSpacing: '0.06em',
              lineHeight: { xs: 2, md: 2.2 },
              mb: { xs: 1.25, md: 'clamp(1.25rem, 2.2vh, 1.75rem)' },
            }}
          >
            そもそも、そうならない人を増やしたい。
            <br />
            その前の段階で、できることが山ほどある。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: {
                xs: 'clamp(0.85rem, 1.9vh, 0.9375rem)',
                md: 'clamp(0.95rem, 2vh, 1.0625rem)',
              },
              letterSpacing: '0.08em',
              lineHeight: { xs: 2, md: 2.2 },
            }}
          >
            その想いが、予防医学の道へ私を動かしました。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
