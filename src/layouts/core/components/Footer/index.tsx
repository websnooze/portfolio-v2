import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";

import { HeaderDivider } from "../Topbar/modules";

import styles from "./css/footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <MediaQuery maxWidth={639}>
        <div className={styles.Footer + " container"}>
          <span>Copyright © {currentYear}</span>
          <Link to="/" className={styles.FooterLink}>
            Websnooze.xyz
          </Link>
          <span>{t("footer.rights")}</span>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={640}>
        <div className={styles.Footer + " container"}>
          <span>Copyright © {currentYear}</span>
          <HeaderDivider />
          <Link to="/" className={styles.FooterLink}>
            Websnooze.xyz
          </Link>
          <HeaderDivider />
          <span>{t("footer.rights")}</span>
        </div>
      </MediaQuery>
    </footer>
  );
};

export default Footer;
