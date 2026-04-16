import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideWhy1() {
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
        <Box sx={{ maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.8rem',
              color: palette.secondary.main,
              letterSpacing: '0.2em',
              mb: 4,
              fontWeight: 500,
            }}
          >
            WHY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.6rem' },
              color: palette.text.primary,
              lineHeight: 1.9,
              mb: 5,
            }}
          >
            ある日突然、健康を失う。
            <br />
            その「絶望」を、私はたくさん見てきました。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              lineHeight: 2.2,
            }}
          >
            仕事を頑張ってきた。家族のために走り続けてきた。
            <br />
            そんな人が、ある日突然、思い描いていた人生が
            <br />
            思うようにいかなくなる。
            <br />
            そういう場面を、何度も見てきました。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
