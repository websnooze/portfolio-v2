import {
  HeaderDivider,
  HeaderLinks,
  HeaderLogo,
  HeaderSocials,
  LangSwitcher,
  ThemeSwitcher,
} from "./modules";

import "./css/module.topbar.css";

const Topbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <HeaderLogo />
        <div className="topbar-right">
          <HeaderLinks />
          <HeaderDivider />
          <ThemeSwitcher />
          <HeaderDivider />
          <LangSwitcher />
          <HeaderDivider />
          <HeaderSocials />
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
