import React from "react";
import SkillsBox from "../../components/SkillsBox";
import { MdEngineering } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
import "./skills.scss";
import Sidebar from "../../components/sidbar/Sidebar";
import { ContextP } from "../../contexts/ContextProvider";
const Skills = () => {
  const { frontend, backend, networking } = ContextP();
  return (
    <div className="skills section" id="skills">
      <h1 className="cool-title-plus">
        SKILLS <div></div>
      </h1>
      <motion.div
        className="container"
        whileInView={{
          opacity: [0, 1],
          x: [100, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 600,
        }}
      >
        <div className="skills__boxes">
          <SkillsBox
            title="Frontend Developer"
            details=" I,m Start The Frontend Developer Road Map From +1 Year And I Work
            Really Hard To Become An Excellent Developer"
            icon={<FaPalette />}
            name="frontend"
            reference={frontend}
          />
          <SkillsBox
            title="Electronic And Communication Engineer"
            details="  I'm Studying The Electronic And Communication Engineer For +5
            Years And I Will Graduating soon With Good Networking Skills"
            icon={<MdEngineering />}
            name="networking"
            reference={networking}
          />
          <SkillsBox
            title="Backend Developer"
            details=" I,m Start The Backend Developer Road Map Since Last Week But I
            Also Gonna To Work Really Really Hard To Mastering It And Become A
            Full Stack Developer"
            icon={<FaLaptopCode />}
            name="backend"
            reference={backend}
          />
        </div>
      </motion.div>
      <Sidebar />
    </div>
  );
};

export default Skills;
