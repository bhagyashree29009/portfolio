import { l } from "maath/dist/misc-7d870b3c.esm";
import {
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  jobit,
  tripguide,
} from "../assets";
import frontend from "../assets/frontend.png";
import cplusplus from "../assets/tech/cplusplus.png";
import c from "../assets/tech/c.png";
import sql from "../assets/tech/sql.png";
import java from "../assets/tech/java.png";
import gfg from "../assets/company/gfg.png";
import chegg from "../assets/company/chegg.jpg";
import tnp from "../assets/company/tnp.png";
import codingclub from "../assets/company/codingclub.jpg";
import Shopvista from "../assets/Shopvista.png";
import portfolio from "../assets/portfolio.png";
import web from "../assets/web.png";
import vtlogo from "../assets/vtlogo.png";
import nielit from "../assets/nielit.png";
import student from "../assets/student.jpg";
import php from "../assets/tech/php.webp";

export const navLinks = [
  {
    id: "/portfolio",
    title: "Home",
  },
  {
    id: "/portfolio/#Projects",
    title: "Projects",
  },
  {
    id: "/portfolio/#Experience",
    title: "Experience",
  },
  // {
  //   id: "/portfolio/#Achievement",
  //   title: "Achievement",
  // },
  {
    id: "/portfolio/#Gallery",
    title: "Gallery",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Technical Writing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Jr. Software Developer",
    company_name: "Vasp Technologies",
    icon: vtlogo,
    iconBg: "#383E56",
    date: "May 2025 - Current",
    points: [
      `Developed and integrated APIs using PHP & Laravel projects, including an eBook publishing platform (admin
panel for articles, authors, media, publications) and a CareBus app (React + Vite, authentication, secure login).`,
      `Built and deployed 2 Websites (conf. event and school websites) using React, CSS, JavaScript featuring real-time
countdown, registration, video player, dynamic content, media gallery, and embedded YouTube videos.`,
      `Designed responsive UIs and optimized data flow with Redux state management, ensuring scalable, user-friendly
experiences across web applications.`,
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "NIELIT",
    icon: nielit,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - April 2025",
    points: [
      `Developed a Mental Health Support Web and Mobile App using the MERN stack, React.js, and React Native
with secure authentication and state management (Redux).`,
      `Reduced load time by 20 percent by implementing lazy loading for components and images, and optimizing API
calls with pagination`,
    ],
  },
];

const projects = [
  {
    name: "Ecommerce-Platform",
    description:
      "It's an Full Stack Web application based on MERN Stack Development. It's an E cart type application which is used to purchase various items available, It supports Login, Authentication, Password reset, Payment option, save cart, admin panel for sellers, search and other various functionalities.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Shopvista,
    source_code_link: "https://github.com/bhagyashree29009/e-commerce",
  },
  {
    name: "Student Management App",
    description:
      "It’s a Full Stack Web Application based on MERN Stack Development. It’s a Student Management System that allows managing and organizing student profiles. It supports Login, Authentication, complete CRUD operations, image upload functionality using Multer, and includes a responsive and user-friendly interface with seamless navigation using React Router.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: student,
    source_code_link: "https://github.com/bhagyashree29009/Student-Management-App",
  },
  {
    name: "Diabetes Predictor",
    description:
      "An application of Machine learning based diabetes prediction, In this project patient dataset has been taken and the various ML models is prepared for predicting diabetes and based on that prediction the appropriate Health Insurance Policy will be suggested.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/bhagyashree29009/diabetes-prediction",
  },
  {
    name: "My Portfolio",
    description:
      "An Amazing 3D portfolio website developed using ThreeJS and ReactJS, used powerful graphics library for rendering and animation. It contains all the neccessary information to reflect a good portfolio of a developer.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/bhagyashree29009/portfolio",
  },
];

export { services, technologies, experiences, projects };
