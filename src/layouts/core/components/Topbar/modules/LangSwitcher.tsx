import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

import { Flags } from "../../../../../components";
import { langOptionsData } from "./data/langOptionsData";
import { LangIcon } from "../../../../../icons";

import "../css/module.lang.css";

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [isChevronRotated, setIsChevronRotated] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    ["fr", "en"].includes(navigator.language) ? navigator.language : "en"
  );

  const chevron = {
    default: {
      rotate: 0,
      transformOrigin: "center",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    clicked: {
      rotate: 180,
      transformOrigin: "center",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
    setIsChevronRotated(!isChevronRotated);
    e.stopPropagation();
  };

  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.className !== "down-dropdown-button"
    ) {
      setIsOpen(false);
      setIsChevronRotated(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="lang-switch">
      <AnimatePresence mode="wait">
        <motion.div
          className="lang-switcher"
          onClick={toggleDropdown}
          initial="default"
          animate={isChevronRotated ? "clicked" : "default"}>
          <LangIcon />
          <motion.div className="lang-switcher-chevron" variants={chevron}>
            <IoChevronDown />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lang-switcher-container">
            {langOptionsData.map((item) => (
              <div
                key={item.id}
                className="lang-switcher-item"
                onClick={() => handleChangeLanguage(item.code)}>
                <Flags
                  countryCode={item.flag}
                  width={26}
                  height={18}
                  className="lang-switcher-item-flags"
                />
                <span>{item.country}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LangSwitcher;
