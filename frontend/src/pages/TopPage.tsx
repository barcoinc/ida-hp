import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import {
  HeroSection,
  ScrollSlideWhy,
  ScrollSlideWhat,
  WhyDetailSection,
  WhatDetailSection,
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

      {/* Hero → WHYスライド（ズームフェード） */}
      <HeroSection
        splashDone={splashDone}
        behindSlides={[
          <ScrollSlideWhy key="why" />,
        ]}
      />

      {/* WHY詳細（通常スクロール） */}
      <WhyDetailSection />

      {/* WHY詳細 → WHATスライド（ズームフェード） */}
      <HeroSection
        showHero={false}
        behindSlides={[
          <ScrollSlideWhat key="what" />,
        ]}
      />

      {/* WHAT詳細（通常スクロール） */}
      <WhatDetailSection />

      <FlowSection />
      <TargetSection />
      <ProfileSection />
      <CTASection />
    </>
  );
}
