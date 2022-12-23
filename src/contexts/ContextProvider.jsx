import { createContext, useContext, useState, useEffect, useRef } from "react";
import { sectionsBackground } from "./contextData";
import {
  lightMainColor,
  lightTextColor,
  lightNameColor,
  lightFooterColor,
  lightGradient,
  lightGradientBg,
  lightShadow,
} from "./contextData";
import {
  darkMainColor,
  darkTextColor,
  darkNameColor,
  darkFooterColor,
  darkGradient,
  darkGradientBg,
  darkShadow,
} from "./contextData";
const context = createContext();

export const Provider = ({ children }) => {
  // ==> refs <== //
  const frontend = useRef();
  const backend = useRef();
  const networking = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  // ==> States <== //
  const [navToggle, setNavToggle] = useState(false);
  const [themeToggle, setThemeToggle] = useState(true);
  const [skillsInfo, setSkillsInfo] = useState("");
  // ==> Functions <== //
  // [1] Handle Toggle
  const handleToggle = () => {
    setNavToggle((prev) => !prev);
  };
  // [2] Handle Theme Toggle
  const handleThemeToggle = () => {
    setThemeToggle((prev) => !prev);
  };
  // [3] Handle Skills Info Boxes
  const handleSkillsInfoBoxes = (box) => {
    setSkillsInfo(`${box.current.className}`);
  };
  const closeSkillInfo = () => {
    setSkillsInfo("");
  };
  // [4] Handle Focus
  const handleFocus = (e) => {
    e.current.parentElement.classList.add("focus");
  };
  // [5] Handle Blur
  const handleBlur = (e) => {
    if (e.current.value === "") {
      e.current.parentElement.classList.remove("focus");
    }
  };
  // [6] Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //effects
  // [1] Check Up Theme
  useEffect(() => {
    if (themeToggle) {
      document.documentElement.style.setProperty("--main", lightMainColor);
      document.documentElement.style.setProperty("--text", lightTextColor);
      document.documentElement.style.setProperty("--name", lightNameColor);
      document.documentElement.style.setProperty("--footer", lightFooterColor);
      document.documentElement.style.setProperty("--box-shadow", lightShadow);
      document.documentElement.style.setProperty("--gradient", lightGradient);
      document.documentElement.style.setProperty("--bg", lightGradientBg);
    } else {
      document.documentElement.style.setProperty("--main", darkMainColor);
      document.documentElement.style.setProperty("--text", darkTextColor);
      document.documentElement.style.setProperty("--name", darkNameColor);
      document.documentElement.style.setProperty("--footer", darkFooterColor);
      document.documentElement.style.setProperty("--box-shadow", darkShadow);
      document.documentElement.style.setProperty("--gradient", darkGradient);
      document.documentElement.style.setProperty("--bg", darkGradientBg);
    }
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      sectionsBackground.forEach((item) => {
        if (themeToggle) {
          if (section.id === item.name) {
            section.style.cssText = `background-image: url('${item.lightBack}')`;
          }
        } else {
          if (section.id === item.name) {
            section.style.cssText = `background-image: url('${item.darkBack}')`;
          }
        }
      });
    });
  }, [themeToggle]);

  return (
    <context.Provider
      value={{
        navToggle,
        handleToggle,
        setNavToggle,
        handleThemeToggle,
        themeToggle,
        skillsInfo,
        setSkillsInfo,
        frontend,
        backend,
        networking,
        handleSkillsInfoBoxes,
        closeSkillInfo,
        nameInput,
        emailInput,
        messageInput,
        handleFocus,
        handleBlur,
        handleSubmit,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const ContextP = () => useContext(context);
