import { useRef, useState, type ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { palette } from '../../theme/palette';

const elegantEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const zoomFadeTransition = { duration: 0.6, ease: elegantEase };

interface HeroSectionProps {
  splashDone?: boolean;
  behindSlides?: ReactNode[];
}

export default function HeroSection({ splashDone = true, behindSlides = [] }: HeroSectionProps) {
  const d = splashDone ? 0.2 : 3.2;

  const totalSlides = behindSlides.length + 1;
  const scrollVh = totalSlides * 160;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(0);
  const seg = 1 / totalSlides;

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const newActive = Math.min(Math.floor(v / seg), totalSlides - 1);
    if (newActive !== activeSlideRef.current) {
      activeSlideRef.current = newActive;
      setActiveSlide(newActive);
    }
  });

  return (
    <Box ref={wrapperRef} sx={{ height: `${scrollVh}vh`, position: 'relative' }}>
      <Box sx={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {/* Behind slides */}
        {behindSlides.map((slide, i) => {
          const isLast = i === behindSlides.length - 1;
          const zIndex = behindSlides.length - i;

          if (isLast) {
            return (
              <Box key={i} sx={{ position: 'absolute', inset: 0, zIndex }}>{slide}</Box>
            );
          }

          const isExiting = activeSlide > i + 1;
          return (
            <motion.div
              key={i}
              animate={{
                scale: isExiting ? 1.5 : 1,
                opacity: isExiting ? 0 : 1,
              }}
              transition={zoomFadeTransition}
              style={{
                pointerEvents: isExiting ? 'none' : 'auto',
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%', zIndex,
              }}
            >
              {slide}
            </motion.div>
          );
        })}

        {/* Front: Hero — left-aligned with photo space */}
        <motion.div
          animate={{
            opacity: activeSlide >= 1 ? 0 : 1,
          }}
          transition={zoomFadeTransition}
          style={{
            pointerEvents: activeSlide >= 1 ? 'none' : 'auto',
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            zIndex: behindSlides.length + 1,
          }}
        >
         <motion.div
           animate={{
             scale: activeSlide >= 1 ? 1.5 : 1,
           }}
           transition={zoomFadeTransition}
           style={{
             position: 'absolute',
             inset: 0,
             transformOrigin: 'center center',
           }}
         >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: palette.background.warm,
            }}
          />

          {/* Background image (placeholder gradient for now) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: d, ease: elegantEase }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/images/hero-main.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: { xs: 'center 15%', md: 'center 20%' },
                maskImage: {
                  xs: `radial-gradient(ellipse 80% 45% at 50% 30%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 75%)`,
                  md: `radial-gradient(ellipse 55% 70% at 60% 45%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)`,
                },
                WebkitMaskImage: {
                  xs: `radial-gradient(ellipse 80% 45% at 50% 30%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 75%)`,
                  md: `radial-gradient(ellipse 55% 70% at 60% 45%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)`,
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${palette.background.warm}dd 0%, ${palette.background.warm}66 30%, transparent 50%, ${palette.background.warm}44 70%, ${palette.background.warm}cc 100%)`,
              }}
            />
          </motion.div>

          {/* Main copy — left aligned */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '50%', md: '38%' },
              left: { xs: '50%', md: '8%' },
              transform: { xs: 'translateX(-50%) translateY(-50%)', md: 'none' },
              zIndex: 2,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: d + 0.3, ease: elegantEase }}
            >
              <Typography
                sx={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: 'clamp(2rem, 3.2vw, 2.6rem)' },
                  fontWeight: 300,
                  color: palette.text.primary,
                  lineHeight: 1.8,
                  letterSpacing: '0.04em',
                }}
              >
                ある日突然、健康を失い
                <br />
                思い描く人生をあきらめる
                <br />
                <Box component="span" sx={{ color: palette.secondary.main, fontWeight: 400 }}>
                  「絶望」
                </Box>
                を無くしたい。
              </Typography>
            </motion.div>

          </Box>

          {/* Sub-copy — bottom right */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: '15%', md: '12%' },
              right: { xs: '50%', md: '6%' },
              transform: { xs: 'translateX(50%)', md: 'none' },
              zIndex: 2,
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: d + 0.6, ease: elegantEase }}
            >
              <Typography
                sx={{
                  color: palette.text.secondary,
                  fontSize: { xs: '0.85rem', md: '1rem' },
                  lineHeight: 2,
                  letterSpacing: '0.06em',
                }}
              >
                食事・栄養・検査で、
                <br />
                ずっと健康でいられるサポートを。
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: d + 0.8, ease: elegantEase }}
            >
              <Typography
                sx={{
                  color: palette.text.light,
                  mt: 2,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  opacity: 0.7,
                }}
              >
                元・抗がん剤研究者 ／ 予防医学士® &nbsp;井田 孝
              </Typography>
            </motion.div>
          </Box>

          {/* Scroll indicator */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 20, md: 36 },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              zIndex: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: d + 1.5 }}
            >
              <Typography
                sx={{
                  fontSize: '0.5625rem',
                  letterSpacing: '0.25em',
                  color: palette.text.light,
                  opacity: 0.35,
                }}
              >
                SCROLL
              </Typography>
            </motion.div>
            <motion.div
              animate={{
                scaleY: [0, 1, 1, 0],
                transformOrigin: ['top', 'top', 'bottom', 'bottom'],
              }}
              transition={{
                duration: 2.4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              style={{ width: 1, height: 36, backgroundColor: palette.secondary.main, opacity: 0.4 }}
            />
          </Box>
         </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
