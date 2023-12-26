import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { db } from "../../config/firebase";

import "./css/module.works.css";

const GithubWorks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const worksRef = collection(db, "projects");
    const q = query(worksRef, orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      const tournaments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(tournaments);
    });
  }, []);

  return (
    <section className="github-works-grid container">
      <AnimatePresence>
        {data.map((repo, index) => (
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
            <Link
              to={`/works/${repo.github_repo}`}
              className="github-works-item">
              <div className="github-works-item__icon">{repo.icon}</div>
              <h4>{repo.title}</h4>
              <p>
                {repo.description.length > 100
                  ? `${repo.description.substring(0, 100)}...`
                  : repo.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default GithubWorks;
