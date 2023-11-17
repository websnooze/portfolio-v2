import { Link } from "react-router-dom";
import { HeaderDivider } from "../Topbar/modules";
import "./css/module.footer.css";

const Footer = () => {
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
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
