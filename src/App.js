import React from "react";
import "./app.scss";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/landing/Landing";
import Services from "./pages/services/Services";
import Skills from "./pages/skills/Skills";
import Works from "./pages/works/Works";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidbar/Sidebar";
import SkillsInfoBox from "./components/skillsInfo/SkillsInfoBox";
import { ContextP } from "./contexts/ContextProvider";
const App = () => {
  const { skillsInfo } = ContextP();
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Works />
      <Services />
      <Contact />
      {skillsInfo === "frontend" ? (
        <>
          <div className="overlay"></div>
          <SkillsInfoBox name="frontend" />
        </>
      ) : skillsInfo === "backend" ? (
        <>
          <div className="overlay"></div>
          <SkillsInfoBox name="backend" />
        </>
      ) : skillsInfo === "networking" ? (
        <>
          <SkillsInfoBox name="networking" />
          <div className="overlay"></div>
        </>
      ) : (
        ""
      )}

      <div className="footer">
        <Sidebar footerInfo="Made With Love By Mahmoud Hmmadia" />
      </div>
    </>
  );
};
export default App;
