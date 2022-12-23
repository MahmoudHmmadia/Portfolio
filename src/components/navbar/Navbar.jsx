/* eslint-disable no-unused-vars */
import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { nanoid } from "nanoid";
import { ContextP } from "../../contexts/ContextProvider";
import { motion } from "framer-motion";
import { links, navContainerVariant } from "../../data/data";
import "./navbar.scss";
const Navbar = () => {
  const { navToggle, handleToggle, setNavToggle, themeToggle } = ContextP();
  return (
    <nav className={`${navToggle ? "special" : ""}`}>
      <motion.div
        className="container"
        variants={navContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="box">
          <h2 className="logo"> Mahmoud Hmmadia </h2>
          <motion.div
            className="app-icon"
            onClick={() => handleToggle()}
            whileHover={{
              scale: 1.5,
            }}
          >
            {navToggle ? (
              <>
                <AiFillCloseCircle />
              </>
            ) : (
              <>
                <AiTwotoneAppstore />
              </>
            )}
          </motion.div>
        </div>
        <ul className={`links`}>
          {links.map((li) => (
            <li key={nanoid()} onClick={() => setNavToggle(false)}>
              <a href={`#${li.name.toLowerCase()}`}>
                {li.icon}
                {li.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
