import { NavLink } from "react-router-dom";
import { headerLinks } from "./data/headerLinks";
import { useTranslation } from "react-i18next";

import styles from "../css/topbar.module.css";

const MobileHeaderLinks = ({ setIsOpen }) => {
  const { t } = useTranslation();

  const LinkClick = () => {
    setIsOpen(false);
  };

  return headerLinks.map((item) => (
    <NavLink
      key={item.id}
      to={item.link}
      onClick={LinkClick}
      className={({ isActive }) =>
        isActive
          ? styles.TopbarItem + " " + styles.TopbarItemActive
          : styles.TopbarItem
      }>
      <span>{t(item.name)}</span>
    </NavLink>
  ));
};

export default MobileHeaderLinks;
