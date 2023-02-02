import { type FC, useEffect, useState } from "react";
import Image from "next/image";
import { Tag } from "iconsax-react";

type CardProjectProps = {
  title: string;
  desc: string;
  badge: JSX.Element;
  screenWidth: number;
};

const CardProject: FC<CardProjectProps> = ({
  title,
  desc,
  badge,
  screenWidth,
}) => {
  const [imgSize, setImgSize] = useState({
    w: 640,
    h: 520,
  });
  const countSize = (): { w: number; h: number } => {
    if (screenWidth < 640) return { w: 1200, h: 487 };
    if (screenWidth >= 640 && screenWidth < 768) return { w: 600, h: 487 };
    if (screenWidth >= 768 && screenWidth < 1024) return { w: 600, h: 487 };
    if (screenWidth >= 1024 && screenWidth < 1280) return { w: 600, h: 487 };
    if (screenWidth >= 1280 && screenWidth < 1536) return { w: 600, h: 487 };
    return { w: 600, h: 487 };
  };
  useEffect(() => {
    setImgSize(countSize());
  }, [screenWidth]);

  return (
    <div className=" w-96 rounded-[2.5rem] bg-gray-400 bg-opacity-10 bg-clip-padding py-16 px-10 backdrop-blur-sm backdrop-filter lg:py-8 xl:w-full">
      <div>
        <Image
          src="/img/project-mob2.png"
          alt="Project Picture"
          className="rounded-t-[2rem]"
          width={imgSize.w}
          height={imgSize.h}
        />
        <div className=" rounded-b-[2.5rem] py-4 backdrop-blur-sm backdrop-filter">
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
