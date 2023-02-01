import type { FC } from "react";

const Badge: FC<{ text: string }> = ({ text }) => {
  return (
    <span className="rounded-full bg-primary-300 bg-opacity-25 px-3 py-1 text-xs font-medium text-primary-300">
      {text}
    </span>
  );
};

export default Badge;
