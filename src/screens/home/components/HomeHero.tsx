import { homeHeroData } from "./data/homeHeroData";

import "./css/module.home-hero.css";

const HomeHero = () => {
  const data = homeHeroData;
  return (
    <section className="hero container">
      <div className="hero-text">
        <div className="hero-text-title">
          <h1 className="hero-text-gradient">{data.title}</h1>
          <h1>{data.subtitle1}</h1>
          <h1>{data.subtitle2}</h1>
        </div>
        <p>{data.text}</p>
        <div className="hero-buttons">
          {data.buttons.map((item) => (
            <a
              href={item.link}
              key={item.id}
              target="_blank"
              rel="noreferrer"
              className={`hero-btn ${item.color}`}>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-img">
        <img src="/logo-with-shadow.png" alt="Logo" />
        <div className="hero-img-gradient" />
      </div>
    </section>
  );
};

export default HomeHero;
