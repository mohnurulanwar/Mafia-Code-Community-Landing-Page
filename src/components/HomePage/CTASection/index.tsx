import { type FC } from "react";
import Image from "next/image";

const CTASection: FC = () => {
  return (
    <section className="CTA-section">
      <span className="flex justify-between container absolute -z-10 opacity-80">
        <Image
          src="/img/bg-section/ellipse-blur4.svg"
          alt="background section"
          width={900}
          height={800}
        />
        <Image
          src="/img/bg-section/ellipse-blur3.svg"
          alt="background section"
          width={900}
          height={800}
        />
      </span>
      <div className="CTA-title">
        <h1 className="CTA-h1">Want to join the team?</h1>
        <h1 className="CTA-h1">{"Let's work together"}</h1>
      </div>
      <button className="CTA-btn">Get in Touch</button>
    </section>
  );
};

export default CTASection;
