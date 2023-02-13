import type { FC } from "react";
import Image from "next/image";
import Button from "./_children/Button";

const AboutUsSection: FC = () => {
  return (
    <section className="section-container flex flex-col justify-center py-24">
      <span className="flex absolute container justify-end -z-10 opacity-80">
        <Image
          src="/img/bg-section/ellipse-blur4.svg"
          alt="background section"
          width={800}
          height={700}
        />
      </span>
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
          <p className="section-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            ultricies mi quis hendrerit dolor magna eget est. Libero enim sed
            faucibus turpis in eu. Lacus vestibulum sed arcu non odio euismod
            lacinia. Turpis egestas integer eget aliquet nibh praesent. Leo in
            vitae turpis massa. Ipsum a arcu cursus vitae. Egestas pretium
            aenean pharetra magna ac placer.....
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
