import NodeItem from "./NodeItem";
import { FC, useEffect, useState } from "react";
import {
  LampCharge,
  Code1,
  BrushSquare,
  ShieldSearch,
  CloudConnection,
  Hierarchy3,
} from "iconsax-react";

interface ICustomProps {
  screenWidth: number;
}

const TimelineSection: FC<ICustomProps> = ({ screenWidth }) => {
  const [iconSize, setIconSize] = useState(40);
  const countSize = (): number => {
    if (screenWidth < 640) return 24;
    if (screenWidth >= 640 && screenWidth < 768) return 24;
    if (screenWidth >= 768 && screenWidth < 1024) return 32;
    if (screenWidth >= 1024 && screenWidth < 1280) return 32;
    if (screenWidth >= 1280 && screenWidth < 1536) return 40;
    return 40;
  };
  useEffect(() => {
    setIconSize(countSize());
  }, [screenWidth]);

  return (
    <section className="flex min-h-[100vh] w-full flex-col justify-center bg-base-500 py-10">
      <h1 className="text-gradient-purple text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
        Projects Timeline
      </h1>
      <div className="timeline-content mt-8 justify-center ">
        <div className="line min-h-[64vh] w-2 rounded-full bg-gradient-to-b from-[#ff1cf7] to-[#3F0741] md:min-h-[72vh] md:w-3 xl:min-h-[80vh] xl:w-4" />
        <NodeItem
          title="Brainstorming"
          icon={<LampCharge size={iconSize} color="white" />}
          liIdx={1}
          startColor="#F81BF0"
        />
        <NodeItem
          title="UI/UX"
          icon={<BrushSquare size={iconSize} color="white" />}
          liIdx={2}
          startColor="#D918D3"
        />
        <NodeItem
          title="Development"
          icon={<Code1 size={iconSize} color="white" />}
          liIdx={3}
          startColor="#B814B4"
        />
        <NodeItem
          title="Testing"
          icon={<ShieldSearch size={iconSize} color="white" />}
          liIdx={4}
          startColor="#981195"
        />
        <NodeItem
          title="Deployment"
          icon={<CloudConnection size={iconSize} color="white" />}
          liIdx={5}
          startColor="#780D77"
        />
        <NodeItem
          title="Improvement"
          icon={<Hierarchy3 size={iconSize} color="white" />}
          liIdx={6}
          startColor="#580A59"
        />
      </div>
    </section>
  );
};

export default TimelineSection;
