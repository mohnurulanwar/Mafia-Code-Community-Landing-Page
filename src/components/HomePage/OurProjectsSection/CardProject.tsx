import { type FC } from "react";
import Image from "next/image";
import { Tag } from "iconsax-react";

type CardProjectProps = {
  title: string;
  desc: string;
  badge: JSX.Element;
};

const CardProject: FC<CardProjectProps> = ({ title, desc, badge }) => {
  return (
    <div className=" w-80 rounded-[2.5rem] bg-gray-400 bg-opacity-10 bg-clip-padding py-10 px-8 backdrop-blur-sm backdrop-filter sm:w-96 md:py-16 lg:py-8 xl:w-full">
      <div>
        <Image
          src="/img/project-mob2.png"
          alt="Project Picture"
          className="rounded-t-[2rem]"
          width={640}
          height={520}
        />
        <div className=" rounded-b-[2.5rem] py-4 px-2 backdrop-blur-sm backdrop-filter">
          <p className="link-hover  text-lg font-bold text-white md:text-xl xl:text-2xl">
            {title}
          </p>
          <p className=" py-2 text-xs text-neutral-300 lg:text-sm">{desc}</p>
          <div className="my-2 flex items-center gap-x-2">
            <Tag
              size="25"
              className="rotate-90 text-primary-300"
              variant="Bulk"
            />
            {badge}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
