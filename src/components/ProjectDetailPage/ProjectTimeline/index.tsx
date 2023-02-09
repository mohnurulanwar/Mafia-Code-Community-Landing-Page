import { type FC } from "react";
import { LampCharge } from "iconsax-react";
import NodeItem from "./NodeItem";

const ProjectTimeline: FC = () => {
  const option = {
    size: 40,
    color: "white",
  };

  return (
    <section className="section-container mt-20">
      <h1 className="section-title pb-3">Project Timeline</h1>
      <div className="flex w-[80vw] mx-auto flex-col items-center">
        <div className="grid grid-flow-col grid-col-5 w-fit gap-10">
          {/* <div className="absolute top-1/2 right-11 h-1 w-[50vw] bg-white border-1 border-gray-300" /> */}
          <NodeItem
            idx={1}
            title="Resources"
            icon={<LampCharge {...option} />}
            date="25 Maret 2023"
          />
          <NodeItem
            idx={2}
            title="Resources"
            icon={<LampCharge {...option} />}
            date="25 Maret 2023"
          />
          <NodeItem
            idx={3}
            title="Resources"
            icon={<LampCharge {...option} />}
            date="25 Maret 2023"
          />
          <NodeItem
            idx={4}
            title="Resources"
            icon={<LampCharge {...option} />}
            date="25 Maret 2023"
          />
          <NodeItem
            idx={5}
            title="Resources"
            icon={<LampCharge {...option} />}
            date="25 Maret 2023"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
