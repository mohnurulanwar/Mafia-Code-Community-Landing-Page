import { type FC } from "react";
import Image from "next/image";
import { GrLinkedinOption } from "react-icons/gr";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-between space-y-6  bg-transparent px-5  pb-10 text-center text-base font-semibold text-white md:flex-row md:divide-x-2 md:divide-y-0 md:text-start md:text-sm">
      <div className="flex w-full items-center justify-center leading-none">
        <Image
          className="object-contain md:w-[150px] order-1"
          width={200}
          height={200}
          src={"/img/logo-MCC.svg"}
          color="white"
          alt="Logo Mafia Code Community"
        />
      </div>
      <div className="flex w-full justify-center leading-9 order-3">
        <div className="max-w-max py-1 md:border-t-0 md:border-b-0 md:py-0">
          <ul className="flex flex-col justify-between text-lg font-normal">
            <li>About</li>
            <li>Timeline</li>
            <li>Projects</li>
            <li>Tools</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center leading-9 order-4">
        <ul className="text-lg font-normal">
          <li>F.A.Q</li>
          <li>Sitemap</li>
          <li>Condition</li>
        </ul>
      </div>
      <div className="flex w-full justify-center order-2 md:order-last px-4 leading-9 md:w-full md:justify-center">
        <div className="space-y-4 self-center">
          <p className="text-lg font-semibold">Socialize with Mafia Code</p>
          <ul className="flex justify-center space-x-3 text-2xl">
            <li className="rounded-full bg-glass-purple-300 p-2 text-primary-500">
              <GrLinkedinOption />
            </li>
            <li className="rounded-full bg-glass-purple-300 p-2 text-primary-500">
              <BsInstagram />
            </li>
            <li className="rounded-full bg-glass-purple-300 p-2 text-primary-500">
              <BsYoutube />
            </li>
            <li className="rounded-full bg-glass-purple-300 p-2 text-primary-500">
              <AiOutlineTwitter />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
