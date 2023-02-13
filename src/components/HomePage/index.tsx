import dynamic from "next/dynamic";
import AboutUsSection from "./AboutUsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import OurProjectsSection from "./OurProjectsSection";

const ToolsSection = dynamic(() => import("./ToolsSection"), {
  ssr: false,
});

const TimelineSection = dynamic(() => import("./TimelineSection"), {
  ssr: false,
});

export {
  AboutUsSection,
  CTASection,
  HeroSection,
  OurProjectsSection,
  TimelineSection,
  ToolsSection,
};
