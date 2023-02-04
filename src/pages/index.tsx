import { type NextPage } from "next";

import Layout from "@/components/Layout";

import {
  AboutUsSection,
  CTASection,
  HeroSection,
  OurProjectsSection,
  TimelineSection,
  ToolsSection,
} from "@/components/HomePage";

import { useState, useEffect } from "react";

import { countScreen } from "@/utils/screenWidthUtil";

const Home: NextPage = () => {
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
    <Layout title="Welcome to Mafia Code Community">
      <HeroSection />
      <AboutUsSection />
      <TimelineSection breakpoint={breakpoint.breakpoint} />
      <OurProjectsSection />
      <ToolsSection />
      <CTASection />
    </Layout>
  );
};

export default Home;