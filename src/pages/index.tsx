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

const Home: NextPage = () => {
  return (
    <Layout title="Welcome to Mafia Code Community">
      <HeroSection />
      <AboutUsSection />
      <TimelineSection />
      <OurProjectsSection />
      <ToolsSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
