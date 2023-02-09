import Image from "next/image";

const HeadCoverSection = () => {
  return (
    <>
      <section className="section-container centered-layout bg-base-500">
        <Image
          src="/img/dummyProjectImg.png"
          width={192}
          height={192}
          alt="Project Image"
        />
        <h1 className="section-title">Project Name</h1>
        <p className="section-paragraph text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          provident expedita iste dolor itaque, possimus assumenda iure
          necessitatibus officia aliquid et nostrum sapiente illo distinctio
          perferendis modi cupiditate voluptatem numquam!
        </p>
      </section>
    </>
  );
};

export default HeadCoverSection;
