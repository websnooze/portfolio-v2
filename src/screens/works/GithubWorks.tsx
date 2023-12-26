import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

import { octokit } from "../../config/octokit";

import "./css/module.works.css";

const GithubWorks = () => {
  const [repos, setRepos] = useState([]);
  const [descriptions, setDescriptions] = useState({});

  useEffect(() => {
    const getRepos = async () => {
      const response = await octokit.request(
        "GET /user/repos?visibility=private",
        {
          headers: {
            accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      const data = response.data;
      setRepos(data);

      const descriptionsMap = {};
      for (const repo of data) {
        const description = await getReadMeDescription(
          repo.owner.login,
          repo.name
        );
        descriptionsMap[repo.name] = description;
      }
      setDescriptions(descriptionsMap);
    };
    getRepos();
  }, []);

  const getReadMeDescription = async (owner, repo) => {
    try {
      const response = await octokit.rest.repos.getContent({
        owner: owner,
        repo: repo,
        path: "README.md",
        mediaType: {
          format: "raw",
        },
        headers: {
          accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      const readmeContent = response.data || "";
      const readmeContentString = readmeContent.toString();
      return readmeContentString.slice(0, 100);
    } catch (error) {
      console.error("Error fetching README.md:", error);
      return "";
    }
  };

  return (
    <section className="github-works-grid container">
      <AnimatePresence>
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              duration: 0.2,
              delay: index * 0.2,
              ease: "linear",
            }}
            className="github-works-item-block">
            <Link to={`/works/${repo.name}`} className="github-works-item">
              <div className="github-works-item__icon">
                <FaGithub />
              </div>
              <h4>{repo.name}</h4>
              <p>{descriptions[repo.name]}...</p>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default GithubWorks;
