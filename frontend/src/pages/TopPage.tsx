import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import {
  HeroSection,
  ScrollSlideCurtain,
  ScrollSlideWhy,
  WhyDetailSection,
  ScrollSlideWhat,
  WhatDetailSection,
  ScrollSlideHowService,
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

      {/* Hero → WHY（ズームフェード） */}
      <HeroSection
        splashDone={splashDone}
        behindSlides={[
          <ScrollSlideWhy key="why" />,
        ]}
      />

      {/* WHY詳細（通常スクロール） */}
      <WhyDetailSection />

      {/* 幕 → WHAT（ズームフェード） */}
      <HeroSection
        showHero={false}
        behindSlides={[
          <ScrollSlideCurtain key="curtain-why" bgcolor="#ffffff" />,
          <ScrollSlideWhat key="what" />,
        ]}
      />

      {/* WHAT詳細 / 3つの入口（通常スクロール） */}
      <WhatDetailSection />

      {/* 幕 → HOW 3サービス（ズームフェード） */}
      <HeroSection
        showHero={false}
        behindSlides={[
          <ScrollSlideCurtain key="curtain-what" bgcolor="#f8f6f3" />,
          <ScrollSlideHowService key="how-service" />,
        ]}
      />

      {/* HOW詳細以降（通常スクロール） */}
      <HowSection />
      <FlowSection />
      <TargetSection />
      <ProfileSection />
      <CTASection />
    </>
  );
}
