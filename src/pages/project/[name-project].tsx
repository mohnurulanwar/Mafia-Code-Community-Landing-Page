import { type NextPage } from "next";
import Layout from "@/components/Layout";
import { HeadCoverSection, MockupSection, ProjectTimeline } from "@/components/ProjectDetailPage";
import { useRouter } from "next/router";

const Project: NextPage = () => {
  // const router = useRouter()
  // const { ProjectID } = router.query

  return (
    <Layout title="Detail Project - Mafia Code Community">
      <HeadCoverSection />
      <MockupSection />
      <ProjectTimeline />
    </Layout>
  );
};

export default Project;
