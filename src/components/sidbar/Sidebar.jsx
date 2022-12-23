import React from "react";
import "./sidbar.scss";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ContextP } from "../../contexts/ContextProvider";
import { motion } from "framer-motion";
const Sidebar = ({ footerInfo }) => {
  const { handleThemeToggle, themeToggle } = ContextP();
  return (
    <div className="sidebar-container">
      <ul className="sidbar">
        <li>
          <motion.a
            href="https://facebook.com/mahmoud.hmmadia.58"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <BsFacebook />
          </motion.a>
        </li>
        <li>
          <motion.a href="" whileHover={{ scale: 1.1 }}>
            <AiFillInstagram />
          </motion.a>
        </li>
        <li>
          <motion.a
            href="https://github.com/MahmoudHmmadia"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <AiFillGithub />
          </motion.a>
        </li>
        <li className={`${themeToggle ? "light-theme" : "dark-theme"} theme`}>
          <span className="light">
            <BsFillSunFill />
          </span>
          <div
            className={`toggle ${themeToggle ? "" : "move"}`}
            onClick={() => handleThemeToggle()}
          ></div>
          <span className="dark">
            <BsFillMoonFill />
          </span>
        </li>
      </ul>
      {footerInfo && <footer>{footerInfo}</footer>}
    </div>
  );
};

export default Sidebar;
