import type { FC } from "react";
import Image from "next/image";
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
  siTrpc,
  siTailwindcss,
  siFlutter,
  siRedux,
  siMongodb,
  siNestjs,
  siGraphql,
  siPython,
  siDjango,
  siFlask,
  siGo,
  siPostgresql,
  siFirebase,
  siPrettier,
  siEslint,
  siJest,
  siFastapi,
  siExpress,
  siGoogleadsense,
  siGoogleadmob,
  siGit,
  siSvelte,
  siNuxtdotjs,
  siVuedotjs,
  siGatsby,
  siFramer,
  siWebflow,
  siReactquery,
  siPrisma,
  siNotion,
  siFigma,
  siMysql,
  siDocker,
  siJenkins,
  siMobx,
  siOpenai,
} from "simple-icons";

export const cloudOptions: Omit<typeof Cloud, "children"> = {
  id: 'stable-id-for-csr-ssr',
  options: {
    active: 0.3,
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
  }
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
  siTrpc,
  siFastapi,
  siExpress,
  siGoogleadsense,
  siGoogleadmob,
  siGit,
  siSvelte,
  siNuxtdotjs,
  siVuedotjs,
  siGatsby,
  siFramer,
  siWebflow,
  siFlutter,
  siRedux,
  siMongodb,
  siNotion,
  siNestjs,
  siGraphql,
  siPython,
  siDjango,
  siFlask,
  siGo,
  siPostgresql,
  siFirebase,
  siPrettier,
  siEslint,
  siJest,
  siMobx,
  siOpenai,
  siTailwindcss,
  siReactquery,
  siPrisma,
  siFigma,
  siMysql,
  siDocker,
  siJenkins,
];

const icons = importedIcons.map((icon) =>
  renderSimpleIcon({
    icon,
    size: 40,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  })
);

const ToolsSection: FC = () => {
  return (
    <section className="tools-section">
      <span className="flex justify-center absolute -z-10 opacity-80">
        <Image
          src="/img/bg-section/ellipse-blur2.svg"
          className=""
          alt="background section"
          width={900}
          height={800}
        />
      </span>
      <div className="tools-box">
        <h1 className="section-title">Tools Used</h1>
        <Cloud {...cloudOptions}>
          <div className="icons-cloud">{icons}</div>
          <span></span>
        </Cloud>
      </div>
    </section>
  );
};

export default ToolsSection;
