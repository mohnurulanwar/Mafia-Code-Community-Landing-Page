import { type FC } from "react";
import { DiGit, DiGithubBadge } from "react-icons/di";
import { RiTrelloFill, RiReactjsFill } from "react-icons/ri";
import { RxNotionLogo } from "react-icons/rx";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPrisma, SiFigma, SiDocker } from "react-icons/si";




const TechStackSection: FC = () => {
    return (
        <section className="py-20">
            <h1 className="section-title">Tech Stack</h1>
            <div className="flex justify-center py-10">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex flex-col items-end justify-center text-sm text-white">
                        <p>Project Management</p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <RiTrelloFill size={35} />
                        <RxNotionLogo size={35} />
                    </div>
                    <div className="flex flex-col items-end justify-center text-sm text-white">
                        <p>Version Control</p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <DiGit size={35} />
                        <DiGithubBadge size={35} />
                    </div>
                    <div className="flex flex-col items-end justify-center text-sm text-white">
                        <p>UIUX</p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <SiFigma size={35} />
                    </div>
                    <div className="flex flex-col items-end justify-center text-sm text-white">
                        <p>Frontend</p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <RiReactjsFill size={35} />
                        <SiNextdotjs size={35} />
                        <SiTailwindcss size={35} />
                        <SiTypescript size={35} />
                    </div>
                    <div className="flex flex-col items-end justify-center text-sm text-white">
                        <p>Backend</p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <SiMongodb size={35} />
                        <SiNextdotjs size={35} />
                        <SiPrisma size={35} />
                        <SiTypescript size={35} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStackSection;

