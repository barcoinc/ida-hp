import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

interface Props {
  bgcolor?: string;
  bgImage?: string;
  text: string;
  sub?: string;
}

export default function ScrollSlideCurtain({ bgcolor = '#ffffff', bgImage, text, sub }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: bgcolor,
        position: 'relative',
      }}
    >
      {bgImage && (
        <>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage: {
                xs: `radial-gradient(ellipse 85% 50% at 50% 40%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 75%)`,
                md: `radial-gradient(ellipse 60% 70% at 50% 45%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)`,
              },
              WebkitMaskImage: {
                xs: `radial-gradient(ellipse 85% 50% at 50% 40%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 75%)`,
                md: `radial-gradient(ellipse 60% 70% at 50% 45%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)`,
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${bgcolor}dd 0%, ${bgcolor}66 30%, transparent 50%, ${bgcolor}44 70%, ${bgcolor}cc 100%)`,
            }}
          />
        </>
      )}

      <Container sx={{ position: 'relative', zIndex: 1 }}>
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
