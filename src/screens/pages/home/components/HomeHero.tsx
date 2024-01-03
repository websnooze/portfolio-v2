import { useTranslation } from "react-i18next";

import { homeHeroData } from "./data/homeHeroData";
import heroImg from "../../../../assets/hero.webp";

import styles from "./css/homeHero.module.css";

const HomeHero = () => {
  const { t } = useTranslation();
  const data = homeHeroData;
  return (
    <section className={styles.Hero + " container"}>
      <div className={styles.HeroText}>
        <div className={styles.HeroTextTitle}>
          <h1 className={styles.HeroTextGradient}>{data.title}</h1>
          <h1>{t(data.subtitle1)}</h1>
          <h1>{t(data.subtitle2)}</h1>
        </div>
        <p>{t(data.text)}</p>
      </div>
      <div className={styles.HeroImg}>
        <img src={heroImg} alt="Logo" />
        <div className={styles.HeroImgGradient} />
      </div>
    </section>
  );
};

export default HomeHero;
