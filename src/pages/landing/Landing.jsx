import React from "react";
import landing from "../../assets/landing.svg";
import landingDark from "../../assets/landing-dark.svg";
import "./landing.scss";
import { skillsInfo } from "../../data/data";
import { nanoid } from "nanoid";
import { IoMdDoneAll } from "react-icons/io";
import { motion } from "framer-motion";
import { landingContainerVariant } from "../../data/data";
import Sidebar from "../../components/sidbar/Sidebar";
import { ContextP } from "../../contexts/ContextProvider";
const Landing = () => {
  const { themeToggle } = ContextP();
  return (
    <div className="landing" id="home">
      <motion.div
        className="container"
        variants={landingContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="landing__box">
          <h1 className="content">
            I'm <span className="frontend">Frontend</span> Developer
            <br />
            <span className="electronic">Electronic</span> And{" "}
            <span className="communication">Communication</span> Engineer
            <br />
            And Study To Become <span className="backend">Backend</span>{" "}
            Developer Too
          </h1>
          {skillsInfo.map((item) => {
            if (item.done) {
              return (
                <ul className={`${item.name}-icons icons`} key={nanoid()}>
                  {item.data.map((item) => (
                    <li style={{ color: `${item.color}` }} key={nanoid()}>
                      {item.icon}
                    </li>
                  ))}
                  <li className="state" style={{ color: " #7CFC00" }}>
                    <IoMdDoneAll />
                  </li>
                </ul>
              );
            } else {
              return (
                <ul className={`${item.name}-icons icons`} key={nanoid()}>
                  {item.data.map((item) => (
                    <li
                      style={
                        themeToggle ? { color: "#666" } : { color: "#ccc" }
                      }
                      key={nanoid()}
                    >
                      {item.icon}
                    </li>
                  ))}
                  <li className="state">
                    <div className="loader"></div>
                    <div className="loader-content">On My Road</div>
                  </li>
                </ul>
              );
            }
          })}
        </div>
        <div className="landing__image">
          {themeToggle ? (
            <img src={landing} alt="" />
          ) : (
            <img src={landingDark} alt="" />
          )}
        </div>
      </motion.div>
      <Sidebar />
    </div>
  );
};

export default Landing;
