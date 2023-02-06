import { type FC } from "react";
import { LampCharge } from "iconsax-react";
import NodeItem from "./NodeItem";

const ProjectTimeline: FC = () => {
  const option = {
    size: 40,
    color: "white",
  };

  return (
    <section className="section-container">
      <h1 className="section-title pb-3">Project Timeline</h1>
      <div className="grid grid-flow-col grid-col-5 w-fit mx-auto gap-10">
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
    </section>
  );
};

export default ProjectTimeline;
