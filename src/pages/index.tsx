import { type NextPage } from "next";

import Layout from "@/components/Layout";

import Head from 'next/head';

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
      <Head>
        <meta name="description" content="startup komunitas jasa pembuatan project desain dan software website serta aplikasi berbasis SaaS (Software as a Service) yang modern"/>
        <meta name="og:title" content="Welcome to Mafia Code Community"/>
        <meta name="og:description" content="startup komunitas jasa pembuatan project desain dan software website serta aplikasi berbasis SaaS (Software as a Service) yang modern"/>
        <meta name="og:url" content="//domain mafia name//"/>
        <meta name="og:type" content="website"/>
      </Head>
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
