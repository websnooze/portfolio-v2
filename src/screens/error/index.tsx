import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./css/module.error.css";

const Error = () => {
  const { t } = useTranslation();
  return (
    <section className="error container">
      <div className="error-text">
        <div className="error-text-title">
          <h1 className="error-text-gradient">{t("errorPage.hero.title")}</h1>
          <h1>{t("errorPage.hero.subtTitle1")}</h1>
          <h1>{t("errorPage.hero.subtTitle2")}</h1>
        </div>
        <p>{t("errorPage.hero.text")}</p>
        <Link to="/" className="error-home-btn">
          <span>{t("errorPage.hero.button")}</span>
        </Link>
      </div>
      <div className="error-img">
        <img src="/error.webp" alt="Logo" />
        <div className="error-img-gradient" />
      </div>
    </section>
  );
};

export default Error;
