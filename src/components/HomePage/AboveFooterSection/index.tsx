import { type FC } from "react";

const AboveFooterSection: FC = () => {
  return (
    <>
      <section className="abovefooter-section">
        <div className="abovefooter-title">
          <h1 className="abovefooter-h1">Want to join the team?</h1>
          <h1 className="abovefooter-h1">{"Let's work together"}</h1>
        </div>
        <button className="abovefooter-cta">Get in Touch</button>
      </section>
    </>
  );
};

export default AboveFooterSection;
