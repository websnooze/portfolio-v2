import { useTranslation } from "react-i18next";

import { contactHeroData } from "./data/contactHeroData";

import styles from "./css/contactHero.module.css";

const ContactHero = () => {
  const { t } = useTranslation();
  const data = contactHeroData;
  return (
    <section className={styles.Contact + " container"}>
      <div className={styles.ContactText}>
        <div className={styles.ContactTextTitle}>
          <h1 className={styles.ContactTextGradient}>{t(data.title)}</h1>
          <h1>{t(data.subtitle1)}</h1>
          <h1>{t(data.subtitle2)}</h1>
        </div>
        <p>{t(data.text)}</p>
        <div className={styles.ContactButtons}>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className={styles.ContactBtn + " " + styles.ContactBlue}>
            <span>{t("contactPage.buttons.form")}</span>
          </a>
          <a
            href="mailto:websnooze.dev@gmail.com"
            rel="noreferrer"
            className={styles.ContactBtn}>
            <span>{t("contactPage.buttons.mail")}</span>
          </a>
          <a
            href="https://discordapp.com/users/180449157159321601"
            target="_blank"
            rel="noreferrer"
            className={styles.ContactBtn}>
            <span>{t("contactPage.buttons.discord")}</span>
          </a>
          <a
            href="https://github.com/websnooze"
            target="_blank"
            rel="noreferrer"
            className={styles.ContactBtn + " " + styles.ContactBlue}>
            <span>{t("contactPage.buttons.github")}</span>
          </a>
        </div>
      </div>
      <div className={styles.ContactImg}>
        <img src="/hero-contact.webp" alt="Logo" />
        <div className={styles.ContactImgGradient} />
      </div>
    </section>
  );
};

export default ContactHero;
