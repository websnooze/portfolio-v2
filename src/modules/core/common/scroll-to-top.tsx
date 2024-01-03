import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    const timeout = setTimeout(scrollToTop, 200); // Add a 200ms delay before scrolling

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
};

export default ScrollToTop;
