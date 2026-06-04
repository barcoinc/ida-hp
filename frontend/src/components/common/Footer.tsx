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
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 2, mb: 2 }}>
              予防医学士® 井田 孝
              <br />
              Onc Labo（オンクラボ）
            </Typography>
            <MuiLink
              href="https://lin.ee/Xz9hDLO"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: '#06C755',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.8 },
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE公式アカウント
            </MuiLink>
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
