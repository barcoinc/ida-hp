import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideWhyEnd() {
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
              color: palette.text.primary,
              fontWeight: 500,
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 2,
            }}
          >
            そもそも、そんな状態にならない人を増やしたい。
            <br />
            前の段階で、できることが山ほどある。
          </Typography>
          <Typography
            sx={{
              color: palette.text.secondary,
              mt: 3,
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              lineHeight: 2,
              opacity: 0.75,
            }}
          >
            その想いが、予防医学の道へ私を動かしました。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
