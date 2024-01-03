import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  HeaderSocials,
  LangSwitcher,
  MobileHeaderLinks,
  MobileThemeSwitcher,
} from "..";

import styles from "./css/mobileMenu.module.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.className !== styles.MobileMenuIcon
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
    <div className={styles.MobileMenu}>
      <AnimatePresence mode="wait">
        <div className={styles.MobileMenuIcon} onClick={toggleDropdown}>
          <motion.span
            className={
              styles.MobileTickTop +
              " " +
              (isOpen ? styles.MobileTickTopOpen : styles.MobileTickTopClosed)
            }
          />
          <motion.span
            className={
              styles.MobileTickCenter +
              " " +
              (isOpen
                ? styles.MobileTickCenterOpen
                : styles.MobileTickCenterClosed)
            }
          />
          <motion.span
            className={
              styles.MobileTickBottom +
              " " +
              (isOpen
                ? styles.MobileTickBottomOpen
                : styles.MobileTickBottomClosed)
            }
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
            className={styles.MobileMenuContainer}>
            <motion.div className={styles.MobileMenuBlock}>
              <div className={styles.MobileMenuLinks}>
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
