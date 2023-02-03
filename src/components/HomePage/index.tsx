import { type FC } from "react";

import AboutUsSection from "./AboutUsSection";
import AboveFooterSection from "./AboveFooterSection";
import HeroSection from "./HeroSection";
import OurProjectsSection from "./OurProjectsSection";
import TimelineSection from "./TimelineSection";
import OurToolsSection from "./OurToolsSection";

import Layout from "../Layout";

import { useState, useEffect } from "react";

const HomePage: FC = () => {
  const [screenWidth, setScreenWidth] = useState(1536);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <Layout title="MCC - Homepage">
      <>
        <HeroSection />
        <AboutUsSection />
        <TimelineSection screenWidth={screenWidth} />
        <OurProjectsSection screenWidth={screenWidth} />
        <OurToolsSection />
        <AboveFooterSection />
      </>
    </Layout>
  );
};

export default HomePage;
