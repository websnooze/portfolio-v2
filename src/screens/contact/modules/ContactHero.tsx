import { useTranslation } from "react-i18next";

import { contactHeroData } from "./data/contactHeroData";

import "./css/module.contact-hero.css";

const ContactHero = () => {
  const { t } = useTranslation();
  const data = contactHeroData;
  return (
    <section className="contact container">
      <div className="contact-text">
        <div className="contact-text-title">
          <h1 className="contact-text-gradient">{t(data.title)}</h1>
          <h1>{t(data.subtitle1)}</h1>
          <h1>{t(data.subtitle2)}</h1>
        </div>
        <p>{t(data.text)}</p>
        <div className="contact-buttons">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="contact-btn contact-blue">
            <span>{t("contactPage.buttons.form")}</span>
          </a>
          <a
            href="mailto:websnooze.dev@gmail.com"
            rel="noreferrer"
            className="contact-btn">
            <span>{t("contactPage.buttons.mail")}</span>
          </a>
          <a
            href="https://discordapp.com/users/180449157159321601"
            target="_blank"
            rel="noreferrer"
            className="contact-btn">
            <span>{t("contactPage.buttons.discord")}</span>
          </a>
          <a
            href="https://github.com/websnooze"
            target="_blank"
            rel="noreferrer"
            className="contact-btn contact-blue">
            <span>{t("contactPage.buttons.github")}</span>
          </a>
        </div>
      </div>
      <div className="contact-img">
        <img src="/hero-contact.png" alt="Logo" />
        <div className="contact-img-gradient" />
      </div>
    </section>
  );
};

export default ContactHero;
