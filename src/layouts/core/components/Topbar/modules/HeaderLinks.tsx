import { NavLink } from "react-router-dom";
import { headerLinks } from "./data/headerLinks";
import { useTranslation } from "react-i18next";

const HeaderLinks = () => {
  const { t } = useTranslation();
  return headerLinks.map((item) => (
    <NavLink
      key={item.id}
      to={item.link}
      className={({ isActive }) =>
        `${isActive ? "topbar-item topbar-item-active" : "topbar-item"}`
      }>
      <span>{t(item.name)}</span>
    </NavLink>
  ));
};

export default HeaderLinks;
