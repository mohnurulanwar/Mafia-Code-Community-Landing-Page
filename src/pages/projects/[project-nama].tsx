import { type NextPage } from "next";
import { useRouter } from 'next/router';

const Projects: NextPage = () => {

  const router = useRouter()
  const { ProjectID } = router.query

  return (
    <>
    
    </>
  );
};

export default Projects;