import { type FC } from "react";

import AboutUsSection from "./AboutUsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import OurProjectsSection from "./OurProjectsSection";
import TimelineSection from "./TimelineSection";
import OurToolsSection from "./OurToolsSection";

import Layout from "../Layout";

import { useState, useEffect } from "react";

import { countScreen } from "./utils/screenWidthUtil";

const HomePage: FC = () => {
  const [screenWidth, setScreenWidth] = useState(1536);
  const [breakpoint, setBreakpoint] = useState({ breakpoint: "2xl" });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    setBreakpoint(countScreen(screenWidth));
  }, [screenWidth]);

  return (
    <Layout title="MCC - Homepage">
      <>
        <HeroSection />
        <AboutUsSection />
        <TimelineSection breakpoint={breakpoint.breakpoint} />
        <OurProjectsSection />
        <OurToolsSection />
        <CTASection />
      </>
    </Layout>
  );
};

export default HomePage;
