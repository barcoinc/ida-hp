import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

interface Props {
  bgcolor?: string;
  text: string;
  sub?: string;
}

export default function ScrollSlideCurtain({ bgcolor = '#ffffff', text, sub }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: bgcolor,
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: palette.text.primary,
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
              lineHeight: 1.8,
            }}
          >
            {text}
          </Typography>
          {sub && (
            <Typography
              sx={{
                color: palette.text.secondary,
                mt: 2,
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                lineHeight: 2,
                opacity: 0.7,
              }}
            >
              {sub}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
