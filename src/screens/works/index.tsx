import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { GitHubWorksData } from "../../data/GitHubWorks";

import styles from "./css/works.module.css";

const Works = () => {
  const data = GitHubWorksData;

  return (
    <section className={styles.GithubWorksGrid + " container"}>
      <AnimatePresence>
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
            className={styles.GithubWorksItemBlock}>
            <Link to={`/works/${item.slug}`} className={styles.GithubWorksItem}>
              <div className={styles.GithubWorksItem__Icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)}...`
                  : item.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Works;
