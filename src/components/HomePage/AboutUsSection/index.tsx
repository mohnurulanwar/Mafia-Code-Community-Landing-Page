import type { FC } from "react";
import Image from "next/image";

const AboutUsSection: FC = () => {
  return (
    <section className="min-h-fit w-full bg-base-500 py-10">
      <h1 className="text-gradient-purple text-center text-5xl font-bold">
        About Us
      </h1>
      <div className="flex items-center justify-center">
        <Image
          src="/img/logo-MCC.svg"
          alt="logo Mafia Code Community"
          width={450}
          height={450}
        />
        <div>
          <h2 className="text-3xl font-bold text-white">
            Mafia Code Community
          </h2>
          <p className="max-w-2xl py-4 text-neutral-100">
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
