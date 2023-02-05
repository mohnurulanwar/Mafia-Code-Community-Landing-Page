import Layout from "@/components/Layout";
import { ProjectTimeline } from "@/components/ProjectsPage";
import { type NextPage } from "next";
import { useRouter } from "next/router";

const Project: NextPage = () => {
  // const router = useRouter()
  // const { ProjectID } = router.query

  return (
    <Layout title="Detail Project - Mafia Code Community">
      <h1>Project</h1>
      <ProjectTimeline />
    </Layout>
  );
};

export default Project;
