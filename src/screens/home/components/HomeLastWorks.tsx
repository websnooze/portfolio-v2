import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { homeLastWorksData } from "./data/homeLastWorksData";

import "./css/module.last-works.css";

const HomeLastWorks = () => {
  const { t } = useTranslation();
  const data = homeLastWorksData;
  return (
    <section className="home-lastworks container">
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
          className="home-lastworks-item">
          <div className="home-lastworks-item__icon">{item.icon}</div>
          <h4>{t(item.title)}</h4>
          <p>{t(item.text)}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default HomeLastWorks;
