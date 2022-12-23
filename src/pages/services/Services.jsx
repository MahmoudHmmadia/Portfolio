import React from "react";
import "./services.scss";
import Sidebar from "../../components/sidbar/Sidebar";
import servLight1 from "../../assets/serv1.svg";
import servDark1 from "../../assets/serv1-dark.svg";
import servLight2 from "../../assets/serv2.svg";
import servDark2 from "../../assets/serv2-dark.svg";
import servLight3 from "../../assets/serv3.svg";
import servDark3 from "../../assets/serv3-dark.svg";
import { webServices, networkServices } from "../../data/data";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { ContextP } from "../../contexts/ContextProvider";
const Services = () => {
  const { themeToggle } = ContextP();
  return (
    <div className="services section" id="services">
      <h1 className="cool-title-plus">
        SERVICES <div></div>
      </h1>
      <div className="main-image">
        {themeToggle ? (
          <img src={servLight1} alt="" />
        ) : (
          <img src={servDark1} alt="" />
        )}
      </div>
      <div className="container">
        <div className="services__boxes">
          <motion.div
            className="box web-services"
            whileInView={{
              opacity: [0, 1],
              x: [100, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 600,
            }}
          >
            <p>
              Build Fully Responsive Web Pages And Applications From The Scratch
              With Best Frameworks
            </p>
            <ul className="icons">
              {webServices.map((item) => (
                <li
                  className=""
                  key={nanoid()}
                  style={{ background: item.color }}
                >
                  <div style={{ borderColor: item.color }}></div>
                  <span className="icon">{item.icon}</span>
                </li>
              ))}
            </ul>
            <div className="image">
              {themeToggle ? (
                <img src={servLight3} alt="" />
              ) : (
                <img src={servDark3} alt="" />
              )}
            </div>
          </motion.div>
          <motion.div
            className="box network-services"
            whileInView={{
              opacity: [0, 1],
              x: [-100, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 1000,
            }}
          >
            <div className="image">
              {themeToggle ? (
                <img src={servLight2} alt="" />
              ) : (
                <img src={servDark2} alt="" />
              )}
            </div>
            <ul className="icons">
              {networkServices.map((item) => (
                <li key={nanoid()} style={{ background: item.color }}>
                  <div style={{ borderColor: item.color }}></div>
                  <span className="icon">{item.icon}</span>
                </li>
              ))}
            </ul>
            <p>
              With Good Knowledge In Network And System , I Can Build a Small
              Network Project And Initialize Routers , Switches , And Servers
              With Deferent Services And Check The Network Environment To Find
              Problem , Fix It , Or Understand How It Works
            </p>
          </motion.div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Services;
