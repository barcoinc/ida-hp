import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideHow() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: palette.background.warm,
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 640, mx: 'auto', textAlign: 'center' }}>
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
            HOW
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.7rem' },
              color: palette.text.primary,
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            商品を売りたいわけじゃない。
            <br />
            あなた自身が、自分の身体を
            <br />
            <Box component="span" sx={{ color: palette.secondary.main, fontWeight: 500 }}>
              最高の状態で保てるように。
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              lineHeight: 2,
              opacity: 0.75,
            }}
          >
            必要なものだけを、理由とともに。
            <br />
            必要なければ、何も勧めません。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
