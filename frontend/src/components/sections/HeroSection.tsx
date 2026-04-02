import { useRef, type ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { palette } from '../../theme/palette';

const elegantEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * 閾値トリガー型: スクロール区間の大部分は scale=1 を保持し、
 * 区間の末尾 4% でステップ的に 1→1.5 へジャンプ
 */
function calcScale(layerIdx: number, totalSlides: number, v: number): number {
  const seg = 1 / totalSlides;
  const threshold = (layerIdx + 1) * seg - 0.04;
  const end = (layerIdx + 1) * seg;
  if (v <= threshold) return 1;
  if (v >= end) return 1.5;
  const t = (v - threshold) / (end - threshold);
  return 1 + 0.5 * t;
}

function calcOpacity(layerIdx: number, totalSlides: number, v: number): number {
  const seg = 1 / totalSlides;
  const threshold = (layerIdx + 1) * seg - 0.04;
  const end = (layerIdx + 1) * seg - 0.01;
  if (v <= threshold) return 1;
  if (v >= end) return 0;
  return 1 - (v - threshold) / (end - threshold);
}

interface HeroSectionProps {
  splashDone?: boolean;
  behindSlides?: ReactNode[];
  showHero?: boolean;
}

export default function HeroSection({ splashDone = true, behindSlides = [], showHero = true }: HeroSectionProps) {
  const d = splashDone ? 0.2 : 3.2;

  const totalSlides = showHero ? behindSlides.length + 1 : behindSlides.length;
  const scrollVh = totalSlides * 160;
  const lo = showHero ? 1 : 0; // layer offset

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, (v) => calcScale(0, totalSlides, v));
  const heroOpacity = useTransform(scrollYProgress, (v) => calcOpacity(0, totalSlides, v));
  const heroPointer = useTransform(heroOpacity, (v) => (v < 0.1 ? ('none' as const) : ('auto' as const)));

  const s0s = useTransform(scrollYProgress, (v) => (totalSlides > 0 + lo + 1 ? calcScale(0 + lo, totalSlides, v) : 1));
  const s0o = useTransform(scrollYProgress, (v) => (totalSlides > 0 + lo + 1 ? calcOpacity(0 + lo, totalSlides, v) : 1));
  const s1s = useTransform(scrollYProgress, (v) => (totalSlides > 1 + lo + 1 ? calcScale(1 + lo, totalSlides, v) : 1));
  const s1o = useTransform(scrollYProgress, (v) => (totalSlides > 1 + lo + 1 ? calcOpacity(1 + lo, totalSlides, v) : 1));
  const s2s = useTransform(scrollYProgress, (v) => (totalSlides > 2 + lo + 1 ? calcScale(2 + lo, totalSlides, v) : 1));
  const s2o = useTransform(scrollYProgress, (v) => (totalSlides > 2 + lo + 1 ? calcOpacity(2 + lo, totalSlides, v) : 1));
  const s3s = useTransform(scrollYProgress, (v) => (totalSlides > 3 + lo + 1 ? calcScale(3 + lo, totalSlides, v) : 1));
  const s3o = useTransform(scrollYProgress, (v) => (totalSlides > 3 + lo + 1 ? calcOpacity(3 + lo, totalSlides, v) : 1));

  const s0p = useTransform(s0o, (v) => (v < 0.1 ? ('none' as const) : ('auto' as const)));
  const s1p = useTransform(s1o, (v) => (v < 0.1 ? ('none' as const) : ('auto' as const)));
  const s2p = useTransform(s2o, (v) => (v < 0.1 ? ('none' as const) : ('auto' as const)));
  const s3p = useTransform(s3o, (v) => (v < 0.1 ? ('none' as const) : ('auto' as const)));

  const slideTransforms: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    pointerEvents: MotionValue<'none' | 'auto'>;
  }[] = [
    { scale: s0s, opacity: s0o, pointerEvents: s0p },
    { scale: s1s, opacity: s1o, pointerEvents: s1p },
    { scale: s2s, opacity: s2o, pointerEvents: s2p },
    { scale: s3s, opacity: s3o, pointerEvents: s3p },
  ];

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

          const t = slideTransforms[i];
          return (
            <motion.div
              key={i}
              style={{
                scale: t.scale,
                opacity: t.opacity,
                pointerEvents: t.pointerEvents,
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%', zIndex,
              }}
            >
              {slide}
            </motion.div>
          );
        })}

        {/* Front: Hero */}
        {showHero && <motion.div
          style={{
            opacity: heroOpacity,
            pointerEvents: heroPointer,
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            zIndex: behindSlides.length + 1,
          }}
        >
         <motion.div
           style={{
             scale: heroScale,
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

          {/* Background image */}
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
              width: { xs: 'max-content', md: 'auto' },
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
              width: { xs: 'max-content', md: 'auto' },
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
        </motion.div>}
      </Box>
    </Box>
  );
}
