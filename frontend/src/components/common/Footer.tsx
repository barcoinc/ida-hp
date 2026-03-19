import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { palette } from '../../theme/palette';
import { navigationItems } from '../../config';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: palette.background.dark,
        color: palette.text.white,
        py: 8,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
            mb: 6,
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.6rem',
                fontWeight: 600,
                mb: 2,
                letterSpacing: '0.05em',
              }}
            >
              Onc Labo
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 2,
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '0.95rem',
                fontStyle: 'italic',
              }}
            >
              なぜが分かると、身体は動く。
              <br />
              あなたの身体に、希望を灯したい。
            </Typography>
          </Box>

          {/* Navigation */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {navigationItems.map((item) => (
              <MuiLink
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fff' },
                }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>

          {/* Info */}
          <Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 2 }}>
              予防医学士® 井田 孝
              <br />
              Onc Labo（オンクラボ）
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Onc Labo. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
