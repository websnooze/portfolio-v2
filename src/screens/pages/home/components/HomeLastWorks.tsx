import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { homeLastWorksData } from "./data/homeLastWorksData";

import styles from "./css/lastWorks.module.css";

const HomeLastWorks = () => {
  const { t } = useTranslation();
  const data = homeLastWorksData;
  return (
    <section className={styles.HomeLastWorks + " container"}>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            duration: 0.2,
            delay: index * 0.2,
            ease: "linear",
          }}
          className={styles.HomeLastWorksItem}>
          <div className={styles.HomeLastWorksItem__Icon}>{item.icon}</div>
          <h4>{t(item.title)}</h4>
          <p>{t(item.text)}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default HomeLastWorks;
