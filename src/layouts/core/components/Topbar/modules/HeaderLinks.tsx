import { NavLink } from "react-router-dom";
import { headerLinks } from "./data/headerLinks";

const HeaderLinks = () => {
  return headerLinks.map((item) => (
    <NavLink
      key={item.id}
      to={item.link}
      className={({ isActive }) =>
        `${isActive ? "topbar-item topbar-item-active" : "topbar-item"}`
      }>
      <span>{item.name}</span>
    </NavLink>
  ));
};

export default HeaderLinks;
