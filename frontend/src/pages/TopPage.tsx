import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import {
  HeroSection,
  ScrollSlideWhy,
  ScrollSlideWhat,
  ScrollSlideHow,
  WhySection,
  WhatSection,
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

      <HeroSection
        splashDone={splashDone}
        behindSlides={[
          <ScrollSlideWhy key="why" />,
          <ScrollSlideWhat key="what" />,
          <ScrollSlideHow key="how" />,
        ]}
      />

      <WhySection />
      <WhatSection />
      <HowSection />
      <FlowSection />
      <TargetSection />
      <ProfileSection />
      <CTASection />
    </>
  );
}
