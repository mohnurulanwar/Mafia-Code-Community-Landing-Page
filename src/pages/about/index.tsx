import { type NextPage } from "next";
import Layout from "@/components/Layout";
import { HeadCoverSection } from "@/components/AboutCommunityPage"

const About: NextPage = () => {
  return (
    <Layout title="About Community | Mafia Code">
      <HeadCoverSection />
    </Layout >
  );
};

export default About;