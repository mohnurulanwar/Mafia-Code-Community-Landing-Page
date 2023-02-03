import type { FC } from "react";
import Image from "next/image";

const AboutUsSection: FC = () => {
  return (
    <section className="flex min-h-[100vh] w-full flex-col justify-center bg-base-500 py-24">
      <h1 className="section-title">About Us</h1>
      <div className="flex flex-col items-center  justify-center px-12 md:flex-row md:px-10 lg:px-16">
        <div className="img-wrapper relative h-72 w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 ">
          <Image
            src="/img/logo-MCC.svg"
            alt="logo Mafia Code Community"
            fill={true}
          />
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="text-xl font-bold text-white lg:text-2xl xl:text-3xl">
            Mafia Code Community
          </h2>
          <p className="max-w-md text-center text-xs text-neutral-100 md:max-w-md md:text-left lg:max-w-xl lg:text-sm xl:max-w-2xl xl:py-4 xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            ultricies mi quis hendrerit dolor magna eget est. Libero enim sed
            faucibus turpis in eu. Lacus vestibulum sed arcu non odio euismod
            lacinia. Turpis egestas integer eget aliquet nibh praesent. Leo in
            vitae turpis massa. Ipsum a arcu cursus vitae. Egestas pretium
            aenean pharetra magna ac placer.....
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
