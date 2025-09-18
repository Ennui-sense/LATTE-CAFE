import "./Hero.scss";

import HeroImage from "/img/hero-image.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <img
          src={HeroImage}
          alt=""
          width={1328}
          height={644}
          loading="lazy"
          className="hero__image"
        />
      </div>
    </section>
  );
};

export default Hero;
