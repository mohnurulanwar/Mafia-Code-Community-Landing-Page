import type { FC } from "react";
import Tab from "./Tab";
import CardProject from "./CardProject";
import Badge from "./child/Badge";
import Image from "next/image";

const OurProjectsSection: FC = () => {
  return (
    <section className="section-container flex flex-col justify-center py-10">
      <span className="flex w-full justify-start absolute -z-10 opacity-90">
        <Image
          src="/img/bg-section/ellipse-blur3.svg"
          className="-left-96"
          alt="background section"
          width={900}
          height={900}
        />
      </span>
      <Image
        src="/img/bg-section/ellipse-blur4.svg"
        className="absolute right-1/2"
        alt="background section"
        width={1000}
        height={900}
      />
      <h1 className="section-title">Our Projects</h1>
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
