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
            ある日突然、健康を失う。
            <br />
            その
            <Box component="span" sx={{ color: palette.secondary.main }}>「絶望」</Box>
            を、
            <br />
            私はたくさん見てきました。
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
            大手製薬会社で抗がん剤の新薬開発に6年間携わり、
            <br />
            予防医学の道へ。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
