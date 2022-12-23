import React from "react";
import "./about.scss";
import { FiDownloadCloud } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import me from "../../assets/1662803757214.jpg";
import { motion } from "framer-motion";
import Sidebar from "../../components/sidbar/Sidebar";
import cv from "../../assets/cv.pdf";
const About = () => {
  return (
    <div className="about section" id="about">
      <motion.h1
        className="cool-title"
        whileHover={{
          scale: 1.2,
        }}
      >
        ABOUT ME
      </motion.h1>
      <motion.div
        className="container"
        whileInView={{
          opacity: [0, 1],
          y: [+100, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          duration: 1,
        }}
      >
        <div className="about__boxes">
          <div className="box profile">
            <div className="image">
              <img src={me} alt="" />
            </div>
            <h2>Mahmoud Hmmadia</h2>
            <div className="icon">
              <VscCode />
            </div>
            <div className="details">
              <div className="info">
                <FaUser />
                <p> I'm 23 Years Old , And Programming Is My Sweet Love</p>
              </div>
              <div className="info">
                <HiLocationMarker />
                <p> Syria , Damascus</p>
              </div>
              <div className="info">
                <AiFillCalendar />
                <p> 9 November 1998</p>
              </div>
              <div className="info">
                <MdEmail />
                <p>hmmadia.mh@gmail.com</p>
              </div>
            </div>
            <motion.button
              type="button"
              whileHover={{
                scale: 1.1,
              }}
            >
              <a href={cv} download="">
                Download CV <FiDownloadCloud />
              </a>
            </motion.button>
          </div>
        </div>
      </motion.div>
      <Sidebar />
    </div>
  );
};

export default About;
