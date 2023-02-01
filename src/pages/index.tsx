import { type NextPage } from "next";
import Layout from "@/components/Layout";
import { Hero } from "@/components/HomePage/HeroSection";
import TimelineSection from "@/components/HomePage/TimelineSection";
import AboutUsSection from "@/components/HomePage/AboutUsSection";
import OurProjectsSection from "@/components/HomePage/OurProjectsSection";

const Home: NextPage = () => {
  return (
    <Layout title="Welcome to Mafia Code Community">
      <Hero />
      <AboutUsSection />
      <TimelineSection />
      <OurProjectsSection />
    </Layout>
  );
};

export default Home;
