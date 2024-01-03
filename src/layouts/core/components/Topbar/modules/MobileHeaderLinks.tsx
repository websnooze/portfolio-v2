import { NavLink } from "react-router-dom";
import { headerLinks } from "./data/headerLinks";
import { useTranslation } from "react-i18next";

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
        `${isActive ? "topbar-item topbar-item-active" : "topbar-item"}`
      }>
      <span>{t(item.name)}</span>
    </NavLink>
  ));
};

export default MobileHeaderLinks;
