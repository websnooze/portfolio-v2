import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./css/error.module.css";

const Error = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.Error + " container"}>
      <div className={styles.ErrorText}>
        <div className={styles.ErrorTextTitle}>
          <h1 className={styles.ErrorTextGradient}>
            {t("errorPage.hero.title")}
          </h1>
          <h1>{t("errorPage.hero.subtTitle1")}</h1>
          <h1>{t("errorPage.hero.subtTitle2")}</h1>
        </div>
        <p>{t("errorPage.hero.text")}</p>
        <Link to="/" className={styles.ErrorHomeBtn}>
          <span>{t("errorPage.hero.button")}</span>
        </Link>
      </div>
      <div className={styles.ErrorImg}>
        <img src="/error.webp" alt="Logo" />
        <div className={styles.ErrorImgGradient} />
      </div>
    </section>
  );
};

export default Error;
