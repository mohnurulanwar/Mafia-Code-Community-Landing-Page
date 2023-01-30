/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type FC } from "react";

type NodeItemProps = {
  title: string;
  icon: JSX.Element;
  liIdx: number;
};

const NodeItem: FC<NodeItemProps> = ({ title, icon, liIdx }) => {
  const isEven = (num: number) => num % 2 === 0;
  // const IconTag = `${icon}` as keyof JSX.IntrinsicElements;
  return (
    <div className={`item-${liIdx}`}>
      {!isEven(liIdx) ? (
        <div className={`flex items-center justify-end`}>
          <p className="pr-3 text-3xl font-medium text-white">{title}</p>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-t from-[#3F0741] to-[#8F008E]">
            {/* <IconTag color="white" size={45} className="absolute" /> */}
            {icon}
          </div>
          <div className="from h-[0.2rem] w-16 bg-gradient-to-l from-[#ff1cf7] to-[#8F008E]" />
        </div>
      ) : (
        <div className={`flex items-center justify-start`}>
          <div className="from h-[0.2rem] w-16 bg-gradient-to-r from-[#ff1cf7] to-[#8F008E]" />
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-t from-[#3F0741] to-[#8F008E]">
            {/* <IconTag color="white" size={45} className="absolute" /> */}
            {icon}
          </div>
          <p className="pl-3 text-3xl font-medium text-white">{title}</p>
        </div>
      )}
    </div>
  );
};

export default NodeItem;
