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
                variant="contained"
                size="small"
                onClick={() => navigate('/contact')}
                sx={{
                  backgroundColor: palette.primary.main,
                  color: '#fff',
                  px: 3,
                  py: 1,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: palette.primary.light,
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                無料相談を申し込む
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
                variant="outlined"
                onClick={() => handleNav('/contact')}
                sx={{
                  borderColor: palette.secondary.main,
                  color: palette.secondary.main,
                  px: 4,
                  py: 1.2,
                  mt: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(200,169,110,0.1)',
                    borderColor: palette.secondary.light,
                  },
                }}
              >
                無料相談を申し込む
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
