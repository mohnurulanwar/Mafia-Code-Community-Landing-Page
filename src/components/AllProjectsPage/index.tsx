import { type FC } from "react";
import CardProject from "../HomePage/OurProjectsSection/CardProject";
import Badge from "../HomePage/OurProjectsSection/child/Badge";
import Tab from "../HomePage/OurProjectsSection/Tab";

export const AllProjectsPage: FC = () => {
  // const projects = useQuery
  const categoryFilter =
    "2xl:text-lg;    rounded-full  py-3 px-8 text-center font-semibold  sm:max-w-full sm:px-9 sm:py-3 sm:text-xs md:px-9 md:py-3 md:text-xs lg:px-9 lg:py-3 lg:text-sm xl:px-10 xl:py-3 xl:text-base 2xl:px-12 ";
  const inactiveButton = "bg-[#424242] bg-opacity-40 text-[#FF71D7]";
  const activeButton = "bg-[#FF71D7] bg-opacity-40 text-[#FF71D7]";

  return (
    <>
      <section className="my-24 flex min-h-screen flex-col flex-wrap justify-center">
        <h1 className="mx-auto mt-12 text-4xl font-semibold text-white">
          All of our Projects
        </h1>
        <div className="tabs items-center justify-center gap-x-3 py-8 text-xl">
          <Tab tab="All" isActive />
          <Tab tab="Ongoing" />
          <Tab tab="Done" />
        </div>
        <div className="mx-auto mb-8 flex w-[360px] justify-start gap-2 overflow-x-scroll scrollbar-hide sm:w-[440px] lg:w-[960px] xl:w-[1200px] 2xl:w-[1440px]">
          <button className={`${categoryFilter} ${activeButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${activeButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
          <button className={`${categoryFilter} ${inactiveButton}`}>
            Category
          </button>
        </div>
        <div className=" grid gap-x-10 gap-y-10 place-self-center lg:grid-cols-2 lg:px-0 xl:px-20">
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
        <button className="2xl:text-lg; mt-16 max-w-xs self-center rounded-full bg-[#424242] bg-opacity-40 py-3 px-8 text-left font-semibold text-[#FF71D7] sm:max-w-full sm:px-9 sm:py-3 sm:text-center sm:text-xs md:px-9 md:py-3 md:text-xs lg:px-9 lg:py-3 lg:text-sm xl:px-10 xl:py-4 xl:text-base 2xl:px-12 2xl:py-6">
          See all
        </button>
      </section>
    </>
  );
};
