import type { FC } from "react";
import Tab from "./Tab";
import CardProject from "./CardProject";
import Badge from "./child/Badge";

interface ICustomProps {
  screenWidth: number;
}

const OurProjectsSection: FC<ICustomProps> = ({ screenWidth }) => {
  return (
    <section className="flex min-h-[100vh] w-full flex-col justify-center bg-base-500 py-10 xl:px-10">
      <h1 className="text-gradient-purple text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
        Our Projects
      </h1>
      <div className="tabs items-center justify-center gap-x-3 py-8 text-xl">
        <Tab tab="All" isActive />
        <Tab tab="Ongoing" />
        <Tab tab="Done" />
      </div>
      <div className="mx-10 grid gap-x-10 gap-y-10 place-self-center px-20 lg:grid-cols-2 lg:px-0">
        <CardProject
          title="Moris - Fintech Application"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            maxime, veniam sapiente blanditiis voluptatem perspiciatis! Delectus
            quos eum impedit, quae maxime voluptatem velit itaque adipisci
            veritatis dolorum exercitationem numquam"
          badge={
            <>
              <Badge text="Fintech" />
              <Badge text="Mobile" />
            </>
          }
          screenWidth={screenWidth}
        />
        <CardProject
          title="Moris - Fintech Application"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            maxime, veniam sapiente blanditiis voluptatem perspiciatis! Delectus
            quos eum impedit, quae maxime voluptatem velit itaque adipisci
            veritatis dolorum exercitationem numquam"
          badge={
            <>
              <Badge text="Fintech" />
              <Badge text="Mobile" />
            </>
          }
          screenWidth={screenWidth}
        />
      </div>
    </section>
  );
};

export default OurProjectsSection;
