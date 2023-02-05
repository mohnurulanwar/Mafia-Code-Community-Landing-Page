import { NextPage } from "next";
import { HeadCoverSection } from "@/components/ProjectDetails";
import { MockupSection } from "@/components/ProjectDetails";

const DummyProjectDetails: NextPage = () => {
  return (
    <>
      <HeadCoverSection />
      <MockupSection />
    </>
  );
};

export default DummyProjectDetails;
