import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { navigationItems } from '../../config';
import { palette } from '../../theme/palette';

const elegantEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${palette.divider}`,
          zIndex: 1300,
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72 }}>
            <Typography
              component={Link}
              to="/"
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: palette.primary.main,
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Onc Labo
            </Typography>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navigationItems.map((item) => (
                <Typography
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: palette.text.secondary,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    letterSpacing: '0.04em',
                    opacity: 0.65,
                    transition: 'all 0.3s ease',
                    '&:hover': { opacity: 1, color: palette.primary.main },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
              <Button
                component="a"
                href="https://lin.ee/Xz9hDLO"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="small"
                startIcon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                }
                sx={{
                  backgroundColor: '#06C755',
                  color: '#fff',
                  px: 3,
                  py: 1,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: '#05b34c',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                LINE登録はコチラ
              </Button>
            </Box>

            {/* Hamburger */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 0, p: 1.5 }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Box
                component="span"
                sx={{
                  display: 'block',
                  width: 20,
                  height: 1.5,
                  backgroundColor: palette.primary.main,
                  transition: 'all 0.4s ease',
                  transform: menuOpen ? 'rotate(45deg) translateY(0.5px)' : 'translateY(-3px)',
                  transformOrigin: 'center',
                }}
              />
              <Box
                component="span"
                sx={{
                  display: 'block',
                  width: 20,
                  height: 1.5,
                  backgroundColor: palette.primary.main,
                  transition: 'all 0.4s ease',
                  transform: menuOpen ? 'rotate(-45deg) translateY(-0.5px)' : 'translateY(3px)',
                  transformOrigin: 'center',
                }}
              />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0 0 0%)' }}
            exit={{ clipPath: 'inset(0 0 0 100%)' }}
            transition={{ duration: 0.6, ease: elegantEase }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1200,
              backgroundColor: palette.background.dark,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            {navigationItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.06,
                  ease: elegantEase,
                }}
              >
                <Typography
                  onClick={() => handleNav(item.path)}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1.3rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: palette.secondary.main },
                  }}
                >
                  {item.label}
                </Typography>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + navigationItems.length * 0.06,
                ease: elegantEase,
              }}
            >
              <Button
                component="a"
                href="https://lin.ee/Xz9hDLO"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                }
                sx={{
                  backgroundColor: '#06C755',
                  color: '#fff',
                  px: 4,
                  py: 1.2,
                  mt: 2,
                  '&:hover': {
                    backgroundColor: '#05b34c',
                  },
                }}
              >
                LINE登録はコチラ
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
