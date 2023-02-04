import type { FC } from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siJavascript,
  siNextdotjs,
  siReact,
  siTypescript,
  siNodedotjs,
  siGithub,
  siVercel,
  siVisualstudiocode,
  siTrello,
  siWhatsapp,
  siTelegram,
  siTrpc,
  siTailwindcss,
  siDaisyui,
  siReactquery,
  siPrisma,
  siCss3,
  siHtml5,
  siFigma,
  siMysql,
  siLinux,
  siDocker,
  siJenkins,
} from "simple-icons";

export const cloudOptions: Omit<typeof Cloud, "children"> = {
  // https://www.goat1000.com/tagcanvas-options.php
  clickToFront: 500,
  depth: 1,
  imageScale: 2,
  initial: [0.1, -0.1],
  outlineColour: "#0000",
  reverse: true,
  tooltip: "native",
  tooltipDelay: 0,
  wheelZoom: false,
};

const importedIcons = [
  siJavascript,
  siNextdotjs,
  siReact,
  siTypescript,
  siNodedotjs,
  siGithub,
  siVercel,
  siVisualstudiocode,
  siTrello,
  siWhatsapp,
  siTelegram,
  siTrpc,
  siTailwindcss,
  siDaisyui,
  siReactquery,
  siPrisma,
  siCss3,
  siHtml5,
  siFigma,
  siMysql,
  siLinux,
  siDocker,
  siJenkins,
];

const icons = importedIcons.map((icon) =>
  renderSimpleIcon({
    icon,
    size: 48,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  })
);

const ToolsSection: FC = () => {
  return (
    <section className="tools-section">
      <div className="tools-box">
        <h1 className="section-title">Tools Used</h1>
        <Cloud options={cloudOptions}>
          <div className="icons-cloud">{icons}</div>
          <span></span>
        </Cloud>
      </div>
    </section>
  );
};

export default ToolsSection;
