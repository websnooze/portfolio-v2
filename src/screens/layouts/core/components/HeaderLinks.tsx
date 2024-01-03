import { NavLink } from "react-router-dom";
import { headerLinks } from "./data/headerLinks";
import { useTranslation } from "react-i18next";

import styles from "../css/topbar.module.css";

const HeaderLinks = () => {
  const { t } = useTranslation();

  return headerLinks.map((item) => (
    <NavLink
      key={item.id}
      to={item.link}
      className={({ isActive }) =>
        isActive
          ? styles.TopbarItem + " " + styles.TopbarItemActive
          : styles.TopbarItem
      }>
      <span>{t(item.name)}</span>
    </NavLink>
  ));
};

export default HeaderLinks;
