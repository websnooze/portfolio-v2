import { Link } from "react-router-dom";
import { HeaderDivider } from "../Topbar/modules";
import "./css/module.footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer container">
        <span>Copyright © {currentYear}</span>
        <HeaderDivider />
        <Link to="/" className="footer-link">
          Websnooze.xyz
        </Link>
        <HeaderDivider />
        <span>{t("footer.rights")}</span>
      </div>
    </footer>
  );
};

export default Footer;
