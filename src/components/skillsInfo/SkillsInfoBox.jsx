import React from "react";
import { skillsInfo } from "../../data/data";
import { nanoid } from "nanoid";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { ContextP } from "../../contexts/ContextProvider";
import "./skills-info.scss";
const SkillsInfoBox = ({ name }) => {
  const { closeSkillInfo } = ContextP();
  return (
    <>
      {skillsInfo.map((item) => {
        if (item.name === name) {
          return (
            <motion.div
              className="skill__info"
              key={nanoid()}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: "-50%",
                x: "-50%",
                opacity: 1,

                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 40,
                },
              }}
            >
              <motion.div
                className="close"
                onClick={closeSkillInfo}
                whileHover={{
                  scale: 2,
                  color: "#f00",
                }}
              >
                <IoMdCloseCircle />
              </motion.div>
              {item.data.map((item) => (
                <div className="skill" key={nanoid()}>
                  <div className="icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="prog">
                    <motion.div
                      style={{ width: item.prog, backgroundColor: item.color }}
                      data-width={item.prog}
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: item.prog,
                        transition: {
                          delay: 1,
                          stiffness: 200,
                          type: "spring",
                          duration: 2,
                        },
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          );
        }
      })}
    </>
  );
};

export default SkillsInfoBox;
