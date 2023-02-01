import type { FC } from "react";
import Tab from "./Tab";
import CardProject from "./CardProject";
import Badge from "./child/Badge";

const OurProjectsSection: FC = () => {
  return (
    <section className="min-h-fit w-full bg-base-500 py-10">
      <h1 className="text-gradient-purple text-center text-5xl font-bold">
        Our Projects
      </h1>
      <div className="tabs items-center justify-center gap-x-3 py-8">
        <Tab tab="All" isActive />
        <Tab tab="Ongoing" />
        <Tab tab="Done" />
      </div>
      <div className="mx-10 grid grid-cols-2 gap-x-10 place-self-center">
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
        />
      </div>
    </section>
  );
};

export default OurProjectsSection;
