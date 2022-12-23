import aboutLight from "../assets/about.svg";
import aboutDark from "../assets/about-dark.svg";
import worksLight from "../assets/works.svg";
import worksDark from "../assets/works-dark.svg";
import servicesLight from "../assets/servBack1.svg";
import servicesDark from "../assets/servBackDark.svg";
import skillsLight from "../assets/skills.svg";
import skillsDark from "../assets/skillsDark.svg";
import contactLight from "../assets/contactbg.svg";
import contactDark from "../assets/contactDark.svg";
export const sectionsBackground = [
    { name: "about", darkBack: aboutDark, lightBack: aboutLight },
    { name: "services", darkBack: servicesDark, lightBack: servicesLight },
    { name: "skills", darkBack: skillsDark, lightBack: skillsLight },
    { name: "contact", darkBack: contactDark, lightBack: contactLight },
    { name: "works", darkBack: worksDark, lightBack: worksLight },
];
const lightMainColor = "#2dc1e4";
const lightTextColor = "#666";
const lightNameColor = "#000";
const lightFooterColor = "#fff";
const lightGradient = "linear-gradient(90deg, #2dc1e4 0%, #e8ecc7 100%)";
const lightGradientBg = "linear-gradient(90deg, #fdfbfb 0%, #eceeef 100%)";
const lightShadow =
    "0px 12px 20px 0px rgb(0 0 0 / 13%), 0px 2px 4px 0px rgb(0 0 0 / 12%)";
const darkMainColor = "#ffa852";
const darkTextColor = "#999";
const darkNameColor = "#fff";
const darkFooterColor = "#000";
const darkGradient = "linear-gradient(90deg, #ffe25a 0%, #ffa852 100%)";
const darkGradientBg = "linear-gradient(90deg, #000 0%, #222 100%)";
const darkShadow =
    "0px 12px 20px 0px rgb(255 255 255 / 7%), 0px 2px 4px 0px rgb(255 255 255 /6%)";
export {
    lightMainColor,
    lightTextColor,
    lightNameColor,
    lightFooterColor,
    lightGradient,
    lightGradientBg,
    lightShadow,
};
export {
    darkMainColor,
    darkTextColor,
    darkNameColor,
    darkFooterColor,
    darkGradient,
    darkGradientBg,
    darkShadow,
};