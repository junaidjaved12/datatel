"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import LandingPage from "../components/LandingPage";
import SecondPage from "../components/SecondPage";
import PalletRossSection from "../components/PalletRossSection";
import CreativePage from "../components/CreativePage";
import TestimonialPage from "../components/TestimonialPage";
import FinancialDashboard from "../components/FinancialDashboard";
import DitherEffectSection from "../components/DitherEffectSection";
import ScrollingCardsSection from "../components/ScrollingCardsSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";

import Header from "../components/Header";
import NewContent from "..//components/newcontent";
import AnimatedImages from "../components/animatedimages";
import VideoCard from "../components/videocard";
import ThirdPage from "../components/Thirdpage";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showNumber, setShowNumber] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (showLanding) return;
    
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress * progress * progress;
      const currentCount = Math.floor(easedProgress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Hide number and start shrinking
        setShowNumber(false);
        setTimeout(() => {
          setShowLanding(true);
          // Show content after rectangle disappears
          setTimeout(() => setShowContent(true), 200);
        }, 500);
      }
    };

    requestAnimationFrame(animate);
  }, [showLanding]);

  return (
    <>
      {showContent && (
        <>
        
          <Header isDark={false} />
        </>
      )}
      <LandingPage showContent={showContent} />
      {showContent && <SecondPage />}
      {showContent && <ThirdPage />}
      {/* {showContent && <VideoCard />} */}
      {/* {showContent && <PalletRossSection />} */}
      {showContent && (
        <div className="relative">
          <CreativePage />
          <TestimonialPage />
        </div>
      )}
      
      {showContent && <NewContent />}
      {showContent && <ScrollingCardsSection />}
      {showContent && <FinancialDashboard />}
      {showContent && <AnimatedImages />}
      {showContent && <PricingSection />}
      {showContent && <FAQSection />}
      {showContent && <ContactSection />}
      
      <LoadingScreen count={count} isVisible={!showLanding} showNumber={showNumber} />
    </>
  );
}
