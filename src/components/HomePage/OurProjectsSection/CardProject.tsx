import type { FC } from "react";
import Image from "next/image";
import { Tag } from "iconsax-react";

type CardProjectProps = {
  title: string;
  desc: string;
  badge: JSX.Element;
};

const CardProject: FC<CardProjectProps> = ({ title, desc, badge }) => {
  return (
    <div className="rounded-[2.5rem] bg-gray-400 bg-opacity-10 bg-clip-padding py-8 px-10 backdrop-blur-sm backdrop-filter">
      <div>
        <Image
          src="/img/project-mob2.png"
          alt="Project Picture"
          className="w-full rounded-t-[2rem]"
          width={640}
          height={520}
        />
        <div className="rounded-b-[2.5rem] py-4 px-8 backdrop-blur-sm backdrop-filter">
          <p className="link-hover text-2xl font-bold text-white">{title}</p>
          <p className="py-2 text-sm text-neutral-300">{desc}</p>
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
