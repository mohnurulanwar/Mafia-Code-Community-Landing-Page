import { type FC } from "react";

const CTASection: FC = () => {
  return (
    <section className="CTA-section">
      <div className="CTA-title">
        <h1 className="CTA-h1">Want to join the team?</h1>
        <h1 className="CTA-h1">{"Let's work together"}</h1>
      </div>
      <button className="CTA-btn">Get in Touch</button>
    </section>
  );
};

export default CTASection;
