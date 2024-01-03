import { headerSocials } from "./data/headerSocials";

import styles from "../css/topbar.module.css";

const HeaderSocials = () => {
  const data = headerSocials;
  return (
    <div className={styles.HeaderSocials}>
      {data.map((item) => (
        <a
          key={item.id}
          className={styles.HeaderSocialsItem}
          href={item.link}
          target="_blank"
          rel="noreferrer">
          <item.icon />
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
