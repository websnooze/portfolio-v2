import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

import styles from "./css/workIdSide.module.css";

const WorkIdSide = ({ homepage, languages }) => {
  return (
    <div className={styles.WorkIdSide}>
      {homepage ? (
        <a
          href={homepage}
          target="_blank"
          rel="noreferrer"
          className={styles.WorkIdSideDemo + " " + styles.DemoEnabled}>
          <FaLink />
          <span>Demo</span>
        </a>
      ) : (
        <div className={styles.WorkIdSideDemo + " " + styles.DemoDisabled}>
          <FaLink />
          <span>Demo indisponible</span>
        </div>
      )}
      <div className={styles.WorkIdSideLanguages}>
        {languages.map((item, index) => (
          <div key={index} className={styles.WorkIdSideLanguagesItem}>
            <h1>{item.lang}</h1>
            <div className={styles.WorkIdSideLanguagesItemProgressContainer}>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${item.pourcent}%` }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={styles.WorkIdSideLanguagesItemProgress}
                style={{ backgroundColor: item.color }}
              />
            </div>
            <p>{item.pourcent}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkIdSide;
