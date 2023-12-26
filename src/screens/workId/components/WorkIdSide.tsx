import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { octokit } from "../../../config/octokit";
import { GITHUB_OWNER } from "../../../utils/consts";

import "./css/module.workid-side.css";

const WorkIdSide = ({ demo, githubRepo }) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getLanguages = async () => {
      try {
        const response = await octokit.rest.repos.listLanguages({
          owner: GITHUB_OWNER,
          repo: githubRepo,
          headers: {
            accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        const data = response.data;
        const dataArray = Object.keys(data).map((key) => ({
          lang: key,
          value: data[key],
        }));
        const totalValue = dataArray.reduce((acc, item) => acc + item.value, 0);
        setData(dataArray);
        setTotal(totalValue);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getLanguages();
  }, [githubRepo]);

  return (
    <div className="workid-side">
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="workid-side-demo">
        <span>Lien Demo</span>
      </a>
      <div className="workid-side-languages">
        {data &&
          data.map((item, index) => (
            <div key={index} className="workid-side-languages-item">
              <h1>{item.lang}</h1>
              <div className="workid-side-languages-item-progress-container">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${(item.value / total) * 100}%` }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="workid-side-languages-item-progress"
                />
              </div>
              <p>{((item.value / total) * 100).toFixed(1)}%</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkIdSide;
