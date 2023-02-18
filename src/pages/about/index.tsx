import { type NextPage } from "next";
import Layout from "@/components/Layout";
import { BackendEngineer, FrontendEngineer, HeadCoverSection, MeetOurTeams, UIDesainer } from "@/components/AboutCommunityPage"

const About: NextPage = () => {
  return (
    <Layout title="About Community | Mafia Code">
      <HeadCoverSection />
      <MeetOurTeams/>
      <UIDesainer/>
      <FrontendEngineer/>
      <BackendEngineer/>
    </Layout >
  );
};

export default About;