import { homeLastWorksData } from "./data/homeLastWorksData";

import "./css/module.last-works.css";
import { useTranslation } from "react-i18next";

const HomeLastWorks = () => {
  const { t } = useTranslation();
  const data = homeLastWorksData;
  return (
    <section className="home-lastworks container">
      {data.map((item) => (
        <div key={item.id} className="home-lastworks-item">
          <div className="home-lastworks-item__icon">{item.icon}</div>
          <h4>{t(item.title)}</h4>
          <p>{t(item.text)}</p>
        </div>
      ))}
    </section>
  );
};

export default HomeLastWorks;
