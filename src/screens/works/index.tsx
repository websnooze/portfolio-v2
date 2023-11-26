import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { db } from "../../config/firebase";
import { CreateWork } from "./components";

import "./css/module.works.css";

const Works = () => {
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
    <section className="works container">
      <article className="works-top">
        <h1>Works</h1>
        <CreateWork />
      </article>
      <article className="works-grid">
        <AnimatePresence mode="wait">
          {data.map((item, index) => (
            <motion.div
              layout
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              className="works-item-block">
              <Link
                key={item.id}
                to={`/works/${item.slug}`}
                className="works-item">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  src={item.thumbnail}
                  alt="project-img"
                />
                <motion.div
                  initial={{ opacity: 0.4 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  className="works-item-fade"
                />
                <span>{item.projectName}</span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </article>
    </section>
  );
};

export default Works;
