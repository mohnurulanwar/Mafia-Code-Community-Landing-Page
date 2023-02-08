import React, { FC } from "react";
import Image from "next/image";
import LogoMCC from "../../../public/img/logo-MCC-width-pres.png";
import { GrLinkedinOption } from "react-icons/gr";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer: FC = () => {
  return (
    <footer className="justify-between space-y-6  bg-[#050406] px-5  pb-10 text-center text-base font-semibold  text-white md:flex md:text-sm  md:divide-x-4 md:divide-y-0 md:text-start">
      <div className="flex w-full justify-center items-center leading-none">
        <Image
          className="object-contain  w-[300px] md:w-[150px] "
        // width={100}
          src={LogoMCC}
          color="white"
          alt="Picture of the author"
        />
      </div>
      <div className="flex  w-full   justify-center leading-9  md:hidden">
        <div className="space-y-4">
          <p>SOCIALIZE WITH MAFIA CODE</p>
          <div className="flex justify-center space-x-3 text-2xl">
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <GrLinkedinOption />
            </div>
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <BsYoutube />
            </div>
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <BsInstagram />
            </div>
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <AiOutlineTwitter />
            </div>
          </div>
          <button className="w-full rounded-full bg-gradient-to-r text-black font-bold from-[#B5489C] to-[#C0B7E8] p-2 text-center">
            BUILD YOUR WORLD
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center leading-9">
        <div className="max-w-max py-1 bg-gradient-to-r from-[#343045] via-[#B33A92] to-[#343045]  md:border-t-0 md:border-b-0 md:py-0">
          <div className="flex flex-col justify-between h-full bg-black  p-4">
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>TECHNOLOGIES</p>
            <p>NOW TO</p>
            <p>JOIN HYDRA</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center leading-9">
        <div>
          <p>F.A.Q</p>
          <p>SITEMAP</p>
          <p>CONDITIONS</p>
          <p>LICENSES</p>
        </div>
      </div>
      <div className="hidden  w-full px-4  justify-center leading-9  md:flex md:w-full md:justify-center">
        <div className="space-y-4">
          <p >SOCIALIZE WITH MAFIA CODE</p>
          <div className="flex justify-center space-x-3 text-2xl">
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <GrLinkedinOption />
            </div>
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <BsYoutube />
            </div>
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <BsInstagram />
            </div>
            <div className="rounded-full bg-[#C0B7E8] p-2 text-black">
              <AiOutlineTwitter />
            </div>
          </div> 
          <button className="w-full rounded-full bg-gradient-to-r text-black from-[#B5489C] to-[#C0B7E8] p-2 text-center ">
            BUILD YOUR WORLD
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
