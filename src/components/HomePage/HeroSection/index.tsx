import type { FC } from "react";
import Image from "next/image";

const HeroSection: FC = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <span className="flex justify-end -right-10 -bottom-14 absolute -z-10 opacity-80">
          <Image
            src="/img/bg-section/net.svg"
            className=""
            alt="background section"
            width={900}
            height={800}
          />
        </span>
        <Image
          src="/img/bg-section/ellipse-blur4.svg"
          className="absolute -left-96"
          alt="background section"
          width={900}
          height={800}
        />
        <h1 className="hero-title">
          We Are <span className=" italic">Mafia Code</span> Community,{" "}
          <span className="text-[#CC3EA4]">Not</span> Criminals
        </h1>
        <p className="hero-description">
          {" "}
          pellentesque vestieu facilisi varius vivamus aenean mi urna cursus.
          Egestas ut leolementum momentum planet pellentesque vestieu facilisi
          varius vivamus aenean mi urna cursus. Egentum planet
        </p>
        <button className="hero-cta">Our Services</button>
      </section>
    </>
  );
};

export default HeroSection;
