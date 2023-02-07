import { type FC } from "react";

type NodeItemProps = {
  idx: number;
  title: string;
  icon: JSX.Element;
  date: string;
};

const NodeItem: FC<NodeItemProps> = ({ idx, title, icon, date }) => {
  const isEven = (num: number) => num % 2 === 0;
  return (
    <div className="z-20">
      {!isEven(idx) ? (
        <div className="flex flex-col items-center h-[150%]">
          <p className="mb-5 text-center text-2xl font-medium text-white">
            {title}
          </p>
          <div className="h-28 w-fit border-l border-white" />
          <div className="circle-icon">{icon}</div>
          <p className="mt-3 text-lg text-white">{date}</p>
        </div>
      ) : (
        <div className="flex flex-col-reverse items-center h-[150%]">
          <p className="mt-5 text-center text-2xl font-medium text-white">
            {title}
          </p>
          <div className="h-28 w-fit border-l border-white" />
          <div className="circle-icon">{icon}</div>
          <p className="mb-3 text-lg text-white">{date}</p>
        </div>
      )}
    </div>
  );
};

export default NodeItem;
