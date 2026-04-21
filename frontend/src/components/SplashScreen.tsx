import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { palette } from '../theme/palette';

interface SplashScreenProps {
  onComplete: () => void;
}

type Phase = 'enter' | 'hold' | 'exit';

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<Phase>('enter');

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('hold'), 800);
    const exitTimer = setTimeout(() => setPhase('exit'), 2200);
    const completeTimer = setTimeout(onComplete, 3000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.background.dark,
        willChange: 'opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center' }}
      >
        <div
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: palette.secondary.main,
            letterSpacing: '0.15em',
            marginBottom: 16,
          }}
        >
          Onc Labo
        </div>
        <div
          style={{
            fontFamily: '"Noto Sans JP", sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.35em',
          }}
        >
          予防医学で、希望を灯す。
        </div>
      </motion.div>
    </motion.div>
  );
}
