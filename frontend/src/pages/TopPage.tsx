import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import {
  HeroSection,
  ScrollSlideWhy,
  ScrollSlideWhyDetail,
  ScrollSlideWhat,
  ScrollSlideWhatDetail,
  ScrollSlideService,
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

      {/* 全てズームフェードで遷移 */}
      <HeroSection
        splashDone={splashDone}
        behindSlides={[
          <ScrollSlideWhy key="why" />,
          <ScrollSlideWhyDetail key="why-detail" />,
          <ScrollSlideWhat key="what" />,
          <ScrollSlideWhatDetail key="what-detail" />,
          <ScrollSlideService key="service" />,
        ]}
      />

      {/* 以下、通常スクロール */}
      <HowSection />
      <FlowSection />
      <TargetSection />
      <ProfileSection />
      <CTASection />
    </>
  );
}
