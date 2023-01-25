import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="navbar rounded-box my-10 mx-auto w-[90vw] bg-gray-300">
        <a className="btn-ghost btn text-xl normal-case">Configurasi daisyUI</a>
      </div>
      <h2 className="text-center text-4xl">Hello World</h2>
    </>
  );
};

export default Home;
