import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import {
  HeroSection,
  ScrollSlideWhy,
  WhyDetailSection,
  ScrollSlideWhat,
  ScrollSlideService,
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

      {/* WHAT → 3つの入口 → HOW 3サービス（ズームフェード） */}
      <HeroSection
        showHero={false}
        behindSlides={[
          <ScrollSlideWhat key="what" />,
          <ScrollSlideService key="service" />,
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
