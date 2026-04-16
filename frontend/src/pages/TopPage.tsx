import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import {
  HeroSection,
  ScrollSlideCurtain,
  ScrollSlideWhyFull,
  ScrollSlideWhat,
  WhatDetailSection,
  HowServiceSection,
  HowSection,
  FlowSection,
  TargetSection,
  ProfileSection,
  CTASection,
} from '../components/sections';

export default function TopPage() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {/* Hero → WHY → WHAT（ズームフェード） */}
      <HeroSection
        splashDone={splashDone}
        behindSlides={[
          <ScrollSlideWhyFull key="why-full" />,
          <ScrollSlideCurtain
            key="curtain-why"
            bgcolor="#ffffff"
            bgImage="/images/lecture.jpg"
            text="それが、今の仕事をしている理由です。"
          />,
          <ScrollSlideWhat key="what" />,
        ]}
      />

      {/* WHAT詳細 / 3つの入口（通常スクロール） */}
      <WhatDetailSection />

      {/* HOW 3サービス（通常スクロール） */}
      <HowServiceSection />

      {/* HOW詳細（通常スクロール） */}
      <HowSection />
      <FlowSection />
      <TargetSection />
      <ProfileSection />
      <CTASection />
    </>
  );
}
