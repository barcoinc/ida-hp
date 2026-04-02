import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideWhat() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: palette.background.paper,
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
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
            WHAT
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.7rem' },
              color: palette.text.primary,
              lineHeight: 1.8,
            }}
          >
            痩せたい人も、疲れやすい人も、今は健康な人も。
            <br />
            私が診るのは「症状」じゃなく、
            <br />
            <Box component="span" sx={{ color: palette.secondary.main, fontWeight: 500 }}>
              「あなたの身体を最高の状態にすること」
            </Box>
            です。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
