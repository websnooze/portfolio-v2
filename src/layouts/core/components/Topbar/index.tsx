import MediaQuery from "react-responsive";

import {
  HeaderDivider,
  HeaderLinks,
  HeaderLogo,
  HeaderSocials,
  LangSwitcher,
  ThemeSwitcher,
} from "./modules";

import "./css/module.topbar.css";
import { MobileMenu } from "./modules/components";

const Topbar = () => {
  return (
    <header>
      <MediaQuery maxWidth={639}>
        <nav className="nav-container">
          <HeaderLogo />
          <MobileMenu />
        </nav>
      </MediaQuery>
      <MediaQuery minWidth={640}>
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
      </MediaQuery>
    </header>
  );
};

export default Topbar;
