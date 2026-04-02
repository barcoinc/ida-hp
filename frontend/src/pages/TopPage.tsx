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

      {/* Hero → WHY（ズームフェード） */}
      <HeroSection
        splashDone={splashDone}
        behindSlides={[
          <ScrollSlideWhy key="why" />,
        ]}
      />

      {/* WHY詳細（通常スクロール） */}
      <WhyDetailSection />

      {/* WHY結び → WHAT（ズームフェード） */}
      <HeroSection
        showHero={false}
        behindSlides={[
          <ScrollSlideCurtain
            key="curtain-why"
            bgcolor="#ffffff"
            text="そもそも、そんな状態にならない人を増やしたい。前の段階で、できることが山ほどある。"
            sub="そんな想いで日々、この仕事をしています。"
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
