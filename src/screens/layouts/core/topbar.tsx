import MediaQuery from "react-responsive";

import {
  HeaderDivider,
  HeaderLinks,
  HeaderLogo,
  HeaderSocials,
  LangSwitcher,
  ThemeSwitcher,
  MobileMenu,
} from "./components";

import styles from "./css/topbar.module.css";

const Topbar = () => {
  return (
    <header>
      <MediaQuery maxWidth={639}>
        <nav className={styles.NavContainer}>
          <HeaderLogo />
          <MobileMenu />
        </nav>
      </MediaQuery>
      <MediaQuery minWidth={640}>
        <nav className={styles.NavContainer}>
          <HeaderLogo />
          <div className={styles.TopbarRight}>
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
