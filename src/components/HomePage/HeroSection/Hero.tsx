export const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="blurred-ellipse"></div>

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
