import NodeItem from "./NodeItem";
import { type FC, useEffect, useState } from "react";
import {
  LampCharge,
  Code1,
  BrushSquare,
  ShieldSearch,
  CloudConnection,
  Hierarchy3,
} from "iconsax-react";
import { useBreakpoint } from "@/utils/screenWidthUtil";

const TimelineSection: FC = () => {
  const [iconSize, setIconSize] = useState(40);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (breakpoint === "2xl" || breakpoint === "xl") setIconSize(40);
    if (breakpoint === "lg" || breakpoint === "md") setIconSize(32);
    if (breakpoint === "sm" || breakpoint === "xs") setIconSize(24);
  }, [breakpoint]);

  return (
    <section className="section-container flex flex-col justify-center bg-base-500 py-10">
      <h1 className="section-title">Projects Timeline</h1>
      <div className="timeline-content mt-8 justify-center ">
        <div className="line min-h-[64vh] w-2 rounded-full bg-gradient-to-b from-[#ff1cf7] to-[#3F0741] md:min-h-[72vh] md:w-3 xl:min-h-[80vh] xl:w-4" />
        <NodeItem
          title="Brainstorming"
          icon={<LampCharge size={iconSize} color="white" />}
          liIdx={1}
        />
        <NodeItem
          title="UI/UX"
          icon={<BrushSquare size={iconSize} color="white" />}
          liIdx={2}
        />
        <NodeItem
          title="Development"
          icon={<Code1 size={iconSize} color="white" />}
          liIdx={3}
        />
        <NodeItem
          title="Testing"
          icon={<ShieldSearch size={iconSize} color="white" />}
          liIdx={4}
        />
        <NodeItem
          title="Deployment"
          icon={<CloudConnection size={iconSize} color="white" />}
          liIdx={5}
        />
        <NodeItem
          title="Improvement"
          icon={<Hierarchy3 size={iconSize} color="white" />}
          liIdx={6}
        />
      </div>
    </section>
  );
};

export default TimelineSection;
