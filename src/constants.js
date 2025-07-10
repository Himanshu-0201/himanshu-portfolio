// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/renderLogo.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import cgiLogo from './assets/company_logo/cgi_logo.jpg';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
// import mnitLogo from './assets/education_logo/mnit-logo.png';
import nitpLogo from './assets/education_logo/nitp_logo.jpg';

import rbseLogo from './assets/education_logo/rbse.png';
import sjcLogo from './assets/education_logo/cbse.jpg';

// Project Section Logo's
import heyThereLogo from './assets/work_logo/heyThere.png';
import googleCalendarAnalyticsLogo from './assets/work_logo/google_calendar_analytics_logo.png';
import weatherLogo from './assets/work_logo/weather.png';
import foodOrderApp from "./assets/work_logo/foodOrderApp.png";
import tttLogo from './assets/work_logo/ttt.png';
import fileShareLogo from './assets/work_logo/fileShare.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: renderLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cgiLogo,
    role: "Software Testing Engineer",
    company: "CGI",
    date: "July 2023 - Present",
    desc: "Contributed to system reliability by creating test cases that detected 95% of invalid files and improved error handling. Performed regression testing on 10+ CI/CD builds and validated 100+ API endpoints using Postman. Prepared detailed test reports to aid debugging and was awarded the Bronze Award for outstanding teamwork and project contribution.",
    skills: [
      "Selenium,",
      "TestNG,",
      "JUnit,",
      "Postman",
      "File Testing",
      "System Testing",
      "Manual Testing",
      "Java",
      "Camunda",
      "Nifi",
      "Linux",
    ],
  },
  {
    id: 2,
    img: cgiLogo,
    role: "Software Development Engineer (Volunteer)",
    company: "CGI",
    date: "December 2023 - May 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "Typescript",
      "Node.js",
      "SQL",
      "Express.js",
      "MongoDB",
      "Git",
      "Agile Methodologies",
    ],
  },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "Figma",
  //     "Material UI",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: nitpLogo,
    school: "NIT, Patna",
    date: "Nov 2019 - May 2023",
    grade: "7.24 CGPA",
    desc: "Graduated with a strong foundation in electrical engineering concepts such as circuits, control systems, and power electronics. Alongside my core studies, I developed a deep interest in programming and software development. I actively learned web development, data structures, and backend technologies through self-study and hands-on projects.",
    degree: "Bachelor of Technology B.Tech.",
  },
  // {
  //   id: 1,
  //   img: rbseLogo,
  //   school: "Arihant Children Sr. Sec. School, Kota",
  //   date: "2022",
  //   grade: "91.8%",
  //   desc: "I completed my Class 12 education from Arihant Children Senior Secondary School, Kota, under the Rajasthan Board of Secondary Education (RBSE). My main subjects were Physics, Chemistry, and Mathematics (PCM), which helped me build a strong analytical and problem-solving mindset. This academic phase played a key role in shaping my interest in engineering and laid the foundation for my technical education and future career path.",
  //   degree: "Senior Secondary (Class XII), RBSE",
  // },
  // {
  //   id: 2,
  //   img: sjcLogo,
  //   school: "Shiv Jyoti Convent School, Kota",
  //   date: "2020",
  //   grade: "93.4%",
  //   desc: "I completed my Class 10 education at Shiv Jyoti Convent School, Kota, under the Central Board of Secondary Education (CBSE). During this time, I developed a strong academic foundation, particularly in the Science stream, which sparked my interest in technology and problem-solving.",
  //   degree: "Secondary (Class X), CBSE",
  // },
];

export const projects = [
  {
    id: 0,
    title: "Google Calendar Analytics",
    description:
      "Google Calendar Analytics is a web app that connects to your Google Calendar, reads your events, and provides insightful visualizations. It shows how your time is spent across different tasks or categories using interactive charts. Users can log in with Google, and the app analyzes calendar data to display trends, totals, and productivity patterns.",
    image: googleCalendarAnalyticsLogo,
    tags: ["React JS", "TypeScript", "Express.js", "Google Api", "MongoDB", "Vercel", "Chart.js", "Visualizations"],
    github: "https://github.com/Himanshu-0201/calendar-analysis",
    webapp: "https://google-calendar-analysis.vercel.app/",
  },
  {
    id: 1,
    title: "Food Order App",
    description:
      "A front end well designed website, which is able to add meal food in cart dyanamically , we can increase amount of the meal and decrease the amount of meal from the cart",
    image: foodOrderApp,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Redux","GitHub"],
    github: "https://github.com/Himanshu-0201/FoodOrderApp",
    webapp: "https://github.com/Himanshu-0201/FoodOrderApp",
  },
  // {
  //   id: 2,
  //   title: "Tic-Tac-Toe Game",
  //   description:
  //     "A lightweight and interactive browser-based game designed to let users play classic Tic Tac Toe in a smooth and responsive interface. Built using HTML, CSS, and JavaScript, the game supports two-player mode, win/draw detection, sound control, and real-time UI updates—offering a quick and engaging experience for casual users.",
  //   image: tttLogo,
  //   tags: ["React JS", "Node.js", "HTML", "Tailwind CSS", "JavaScript", "GitHub Pages"],
  //   github: "https://github.com/amannagar04/Tic-Tac-Toe-Game",
  //   webapp: "https://amannagar04.github.io/Tic-Tac-Toe-Game/",
  // },
  // {
  //   id: 3,
  //   title: "File Sharing App",
  //   description:
  //     "A real-time local file sharing platform built with Express.js and Socket.IO, designed to enable fast, secure file transfers between PCs and mobile devices on the same Wi-Fi network. KundraShare offers drag-and-drop uploads, animated progress indicators, modern styling, and instant peer-to-peer communication—delivering a smooth and reliable offline file sharing experience without the need for internet or third-party services.",
  //   image: fileShareLogo,
  //   tags: ["React JS", "HTML", "CSS","Socket.IO","Express.js","Render"],
  //   github: "https://github.com/amannagar04/KundraShare",
  //   webapp: "https://kundrashare.onrender.com",
  // },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];



export const socialMediaLinks = {
  linkedIn: "https://www.linkedin.com/in/himanshu-nagar-333934202",
  github: "https://github.com/Himanshu-0201",
  email : "nagar.himanshu.1802@gmail.com",
  instagram: "https://www.instagram.com/himanshu.nagar.2",
}

export const personalInfo = {
  fname : "Himanshu",
  lname : "Nagar",
  description : "I'm Himanshu Nagar, a full-stack developer with a focus on React, Node.js, and automation testing using Selenium. I enjoy building clean, user-friendly web apps and continuously learning new technologies to grow as a developer."
}


export const resumeLink = "https://drive.google.com/file/d/1U4_ZvAzezeyzPC0kHj0IDgBbNGG1p5jz/view?usp=sharing";