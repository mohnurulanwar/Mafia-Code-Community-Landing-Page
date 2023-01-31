import type { FC } from "react";

type TabProps = {
  tab: string;
  isActive?: boolean;
};

const Tab: FC<TabProps> = ({ tab, isActive = false }) => {
  return (
    <div
      className={`tab tab-active text-xl font-medium text-white ${
        isActive ? "underline decoration-primary-500 underline-offset-4" : ""
      }`}
    >
      {tab}
    </div>
  );
};

export default Tab;
