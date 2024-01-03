import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

import "./css/module.workid-side.css";

const WorkIdSide = ({ homepage, languages }) => {
  return (
    <div className="workid-side">
      {homepage ? (
        <a
          href={homepage}
          target="_blank"
          rel="noreferrer"
          className="workid-side-demo demo-enabled">
          <FaLink />
          <span>Demo</span>
        </a>
      ) : (
        <div className="workid-side-demo demo-disabled">
          <FaLink />
          <span>Demo indisponible</span>
        </div>
      )}
      <div className="workid-side-languages">
        {languages.map((item, index) => (
          <div key={index} className="workid-side-languages-item">
            <h1>{item.lang}</h1>
            <div className="workid-side-languages-item-progress-container">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${item.pourcent}%` }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="workid-side-languages-item-progress"
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
