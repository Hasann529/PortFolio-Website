import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    starbucks,
    netflix,
    socialmedia,
    ecommerce,
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      id:1,
      title: "Web Developer",
      icon: web,
    },
    {
      id:2,
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      id:3,
      title: "Backend Developer",
      icon: backend,
    },
    {
      id:4,
      title: "Content Creator",
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
      name: "Redux",
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
  
  ];
  
  const experiences = [
   
    {
      id:1,
      title: "Software Engineer",
      company_name: "LTIMindtree",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2021 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      id:1,
      name: "Social Media",
      description:
        "Web-App that allows users to share memories, providing a convenient, efficient solution for interacting with each other.",
      tags: [
        {
          name: "react",
          color: "#6C9BCF",
        },
        {
          name: "mongodb",
          color: "#5D9C59",
        },
        {
          name: "redux",
          color: "#E384FF",
        },
      ],
      image: socialmedia,
      source_code_link: "https://github.com/Hasann529/Social-Media-App",
    },
    {
      id:2,
      name: "Ecommerce",
      description:
        "Built a web based end to end E-commerce platform for influencers to set up their stores and sell merch online.",
      tags: [
        {
          name: "react",
          color: "#6C9BCF",
        },
        {
          name: "restapi",
          color: "#5D9C59",
        },
        {
          name: "css",
          color: "#E384FF",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Hasann529/Ecommerce-MERN",
    },
    {
      id:3,
      name: "Netflix Clone",
      description:
        "Built a Netflix Clone with Firebase for Authentication, Public API and Redux for state management .",
      tags: [
        {
          name: "react",
          color: "#6C9BCF",
        },
        {
          name: "firebase",
          color: "#5D9C59",
        },
        {
          name: "sass",
          color: "#E384FF",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/Hasann529/Netflix-Clone",
    },
  
  ];
  
  export { services, technologies, experiences, testimonials, projects };