import { type NextPage } from "next";
import Layout from "@/components/Layout";
import { AllProjectsPage } from "@/components/AllProjectsPage";

const Projects: NextPage = () => {
  return (
    <>
      <Layout title="All Projects">
        <AllProjectsPage />
      </Layout>
    </>
  );
};

export default Projects;
