import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideWhy() {
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
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
              color: palette.text.primary,
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            なぜ、この仕事をしているのか
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
