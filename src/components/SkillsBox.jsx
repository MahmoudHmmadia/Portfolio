import React from "react";
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "framer-motion";
import { ContextP } from "../contexts/ContextProvider";
const SkillsBox = ({ title, details, icon, name, reference }) => {
  const { handleSkillsInfoBoxes } = ContextP();
  return (
    <div className="box">
      <div className="icon"> {icon} </div> <h3 className="title"> {title} </h3>
      <p className="details"> {details} </p>
      <motion.button
        type="button"
        ref={reference}
        onClick={() => handleSkillsInfoBoxes(reference)}
        className={`${name}`}
        whileHover={{
          scale: 1.1,
        }}
      >
        Show More <MdOutlineReadMore />
      </motion.button>
    </div>
  );
};

export default SkillsBox;
