import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import {
  HeroSection,
  ScrollSlideWhy,
  ScrollSlideWhat,
  ScrollSlideHow,
  WhyDetailSection,
  WhatDetailSection,
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

      {/* Hero → WHY → WHAT → HOW（すべてズームフェード） */}
      <HeroSection
        splashDone={splashDone}
        behindSlides={[
          <ScrollSlideWhy key="why" />,
          <ScrollSlideWhat key="what" />,
          <ScrollSlideHow key="how" />,
        ]}
      />

      {/* 以下、通常スクロール */}
      <WhyDetailSection />
      <WhatDetailSection />
      <HowSection />
      <FlowSection />
      <TargetSection />
      <ProfileSection />
      <CTASection />
    </>
  );
}
