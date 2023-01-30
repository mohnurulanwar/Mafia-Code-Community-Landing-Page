import NodeItem from "./NodeItem";
import type { FC } from "react";
import {
  LampCharge,
  Code1,
  BrushSquare,
  ShieldSearch,
  CloudConnection,
  Hierarchy3,
} from "iconsax-react";

const TimelineSection: FC = () => {
  return (
    <section className="min-h-screen w-full bg-base-500 py-10">
      <h1 className="text-gradient-purple text-center text-5xl font-bold">
        Timeline Projects
      </h1>
      <div className="timeline-content mt-8 justify-center">
        <div className="line min-h-[80vh] w-4 rounded-full bg-gradient-to-b from-[#ff1cf7] to-[#3F0741]" />
        <NodeItem
          title="Brainstorming"
          icon={<LampCharge size="40" color="white" />}
          liIdx={1}
        />
        <NodeItem
          title="UI/UX"
          icon={<Code1 size="40" color="white" />}
          liIdx={2}
        />
        <NodeItem
          title="Development"
          icon={<BrushSquare size="40" color="white" />}
          liIdx={3}
        />
        <NodeItem
          title="Testing"
          icon={<ShieldSearch size="40" color="white" />}
          liIdx={4}
        />
        <NodeItem
          title="Deployment"
          icon={<CloudConnection size="40" color="white" />}
          liIdx={5}
        />
        <NodeItem
          title="Improvement"
          icon={<Hierarchy3 size="40" color="white" />}
          liIdx={6}
        />
      </div>
    </section>
  );
};

export default TimelineSection;
