import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  HeaderSocials,
  LangSwitcher,
  MobileHeaderLinks,
  MobileThemeSwitcher,
} from "..";

import "./css/module.mobile-menu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.className !== "mobile-menu-icon"
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="mobile-menu">
      <AnimatePresence mode="wait">
        <div className="mobile-menu-icon" onClick={toggleDropdown}>
          <motion.span
            className={`mobile-tick-top ${
              isOpen ? "mobile-tick-top-open" : "mobile-tick-top-closed"
            }`}
          />
          <motion.span
            className={`mobile-tick-center ${
              isOpen ? "mobile-tick-center-open" : "mobile-tick-center-closed"
            }`}
          />
          <motion.span
            className={`mobile-tick-bottom ${
              isOpen ? "mobile-tick-bottom-open" : "mobile-tick-bottom-closed"
            }`}
          />
        </div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-container">
            <motion.div className="mobile-menu-block">
              <div className="mobile-menu-links">
                <MobileHeaderLinks setIsOpen={setIsOpen} />
              </div>
              <LangSwitcher />
              <MobileThemeSwitcher />
              <HeaderSocials />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
