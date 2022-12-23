import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiSass } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FcElectricalThreshold } from "react-icons/fc";
import { FaSatelliteDish } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { HiSwitchHorizontal } from "react-icons/hi";
import { MdRouter } from "react-icons/md";
import { SiNintendonetwork } from "react-icons/si";
import { TbNetwork } from "react-icons/tb";
import { HiServer } from "react-icons/hi";
import { MdCable } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { MdViewQuilt } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import work1 from "../assets/work-1.PNG";
import work2 from "../assets/work-2.PNG";
import work3 from "../assets/work-3.PNG";
import work4 from "../assets/work-4.PNG";
import work5 from "../assets/work-5.PNG";
import work6 from "../assets/work-6.PNG";
import work7 from "../assets/work-7.PNG";
import work8 from "../assets/work-8.PNG";
import work9 from "../assets/work-9.PNG";
import work10 from "../assets/work-10.PNG";
import work11 from "../assets/work-11.PNG";
export const social = [{
        icon: < BsFacebook / > ,
        address: "Mahmoud Hmmadia",
        color: "#4267B2",
    },
    {
        icon: < AiFillInstagram / > ,
        address: "hmmadia.mh",
        color: "#cd486b",
    },
    {
        icon: < IoLogoWhatsapp / > ,
        address: "+963967224804",
        color: "#25D366",
    },
    {
        icon: < FaTelegram / > ,
        address: "+963967224804",
        color: "#0088CC",
    },
];
export const works = [{
        title: "Author",
        image: { work1 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
    {
        title: "Bondi",
        image: { work2 },
        github: true,
        page: true,
        loading: false,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
        githubHref: "https://github.com/MahmoudHmmadia/Bondi",
        pageHref: "https://mahmoudhmmadia.github.io/Bondi/",
    },
    {
        title: "Elzero",
        image: { work3 },
        github: true,
        page: true,
        loading: false,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
        githubHref: "https://github.com/MahmoudHmmadia/elzero",
        pageHref: "https://mahmoudhmmadia.github.io/elzero/",
    },
    {
        title: "Tic Tac Toe",
        image: { work4 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
    {
        title: "Memory Game",
        image: { work5 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
    {
        title: "Notes App",
        image: { work6 },
        github: true,
        page: true,
        loading: false,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
        githubHref: "https://github.com/MahmoudHmmadia/Notes-App",
        pageHref: "https://mahmoudhmmadia.github.io/Notes-App/",
    },
    {
        title: "Cool Design",
        image: { work7 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
    {
        title: "GPT3",
        image: { work8 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
    {
        title: "Quiz App",
        image: { work9 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
    {
        title: "To Do App List",
        image: { work10 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
    {
        title: "Validate Form",
        image: { work11 },
        github: false,
        page: false,
        loading: true,
        githubIcon: < AiFillGithub / > ,
        viewIcon: < MdViewQuilt / > ,
        loadingIcon: < AiOutlineLoading3Quarters / > ,
    },
];
export const skillsInfo = [{
        name: "frontend",
        done: true,
        data: [
            { icon: < AiFillHtml5 / > , prog: "85%", color: "#f06529" },
            { icon: < DiCss3 / > , prog: "90%", color: "#246de4" },
            { icon: < DiJavascript / > , prog: "80%", color: "#f0db4f" },
            { icon: < SiSass / > , prog: "85%", color: "#cd6799" },
            { icon: < FaBootstrap / > , prog: "75%", color: "#5e3b7f " },
            { icon: < FaReact / > , prog: "80%", color: "#61DBFB" },
        ],
    },
    {
        name: "backend",
        done: false,
        data: [{
                icon: < SiPhp / > ,
                prog: Math.floor(Math.random() * 100),
                color: "#AEB2D5",
            },
            {
                icon: < FaLaravel / > ,
                prog: Math.floor(Math.random() * 100),
                color: "#F05340  ",
            },
            {
                icon: < SiMysql / > ,
                prog: Math.floor(Math.random() * 100),
                color: "#00758f",
            },
            { icon: < AiFillGithub / > , prog: "60%", color: "#171515" },
        ],
    },
    {
        name: "networking",
        done: true,
        data: [
            { icon: < SiCisco / > , prog: "90%", color: "#f00" },
            { icon: < HiSwitchHorizontal / > , prog: "90%", color: "#ffa852" },
            { icon: < MdRouter / > , prog: "90%", color: "#c75959" },
            { icon: < SiNintendonetwork / > , prog: "90%", color: "#ff0" },
            { icon: < MdCable / > , prog: "80%", color: "#8cbdff" },
            { icon: < HiServer / > , prog: "75%", color: "#999" },
        ],
    },
    {
        name: "electronic",
        done: true,
        data: [
            { icon: < FcElectricalThreshold / > , prog: "75%", color: "#f00" },
            { icon: < FaSatelliteDish / > , prog: "75%", color: "#ffa852" },
            { icon: < MdEngineering / > , prog: "90%", color: "#046c8d " },
        ],
    },
];
export const webServices = [
    { icon: < AiOutlineHtml5 / > , color: "#f06529" },
    { icon: < DiCss3Full / > , color: "#246de4" },
    { icon: < IoLogoJavascript / > , color: "#f0db4f" },
    { icon: < IoLogoSass / > , color: "#cd6799" },
    { icon: < FaReact / > , color: "#61DBFB" },
];
export const networkServices = [
    { icon: < SiCisco / > , color: "#f00" },
    { icon: < HiSwitchHorizontal / > , color: "#ffa852" },
    { icon: < MdRouter / > , color: "#000" },
    { icon: < SiNintendonetwork / > , color: "#ff0" },
    { icon: < TbNetwork / > , color: "#000fff" },
    { icon: < MdCable / > , color: "#4a4a4a" },
    { icon: < HiServer / > , color: "#999" },
];
export const navContainerVariant = {
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.5,
            stiffness: 60,
            duration: 2,
        },
    },
};
export const landingContainerVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 2,
            type: "ease",
        },
    },
};

export const links = [
    { icon: < AiFillHome / > , name: "Home" },
    { icon: < FaUser / > , name: "About" },
    { icon: < GiProgression / > , name: "Skills" },
    { icon: < MdOutlineWork / > , name: "works" },
    { icon: < MdMiscellaneousServices / > , name: "Services" },
    { icon: < IoCall / > , name: "Contact" },
];