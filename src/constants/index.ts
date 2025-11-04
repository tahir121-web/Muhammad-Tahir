import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  portfolio,
  ai,
  laptop,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "AI Chatbot Developer",
    icon: mobile,
  },
  {
    title: "3D Web Experiences",
    icon: backend,
  },
  {
    title: "Full-Stack Development",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "MERN Stack",
    icon: html,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "AI/Chatbots",
    icon: git,
  },
  {
    name: "Cloud Deployment",
    icon: figma,
  },
  {
    name: "DevOps",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Founder & CEO",
    companyName: "MA Digital Marketing Agency",
    icon: web,
    iconBg: "#383E56",
    date: "Current",
    points: [
      "Leading a digital marketing agency specializing in web development and AI solutions for clients including RTEETECH and Awisee.com.",
      "Collaborating with premium websites like Forbes.com to deliver cutting-edge digital experiences.",
      "Providing Full-Stack Web Development: Scalable MERN stack solutions for business platforms, portals, and SaaS products.",
      "Creating AI-Powered Chatbots & Automation: Custom chatbots (GPT, NLP) to automate support, lead generation, and customer engagement.",
      "Building 3D & Interactive Interfaces: Modern, immersive UI with Three.js, React Three Fiber, and tailored animations.",
    ],
  },
  {
    title: "Freelance MERN Stack & AI Chatbot Developer",
    companyName: "Available for Remote Projects",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Current",
    points: [
      "Help startups and small businesses unlock the power of intelligent web applications and automation.",
      "Deliver projects that drive growth, efficiency, and outstanding user experiences—with proven results across multiple industries.",
      "Offer Full-Stack Web Development: Scalable MERN stack solutions for business platforms, portals, and SaaS products.",
      "Provide AI-Powered Chatbots & Automation: Custom chatbots (GPT, NLP) to automate support, lead generation, and customer engagement.",
      "Create 3D & Interactive Interfaces: Modern, immersive UI with Three.js, React Three Fiber, and tailored animations.",
    ],
  },
  {
    title: "Full Stack Developer and Chatbot Integrator",
    companyName: "Upwork",
    icon: mongodb,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Present",
    points: [
      "Developing intelligent web applications and automation solutions for startups and small businesses.",
      "Creating custom AI-powered chatbots using GPT and NLP to automate support, lead generation, and customer engagement.",
      "Building scalable MERN stack solutions for business platforms, portals, and SaaS products.",
      "Designing modern, immersive UI with Three.js, React Three Fiber, and tailored animations.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    companyName: "U Devs",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Sep 2025 - Present",
    points: [
      "Working on full-stack development projects using the MERN stack.",
      "Gaining hands-on experience with real business needs from MVPs to full-scale systems.",
      "Collaborating with senior developers to create efficient, scalable, and user-friendly solutions.",
      "Participating in code reviews and providing constructive feedback to team members.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Muhammad Tahir proved me wrong.",
    name: "Sarah Johnson",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Muhammad Tahir does.",
    name: "Michael Smith",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Muhammad Tahir optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Jennifer Brown",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "3D Developer Portfolio",
    description:
      "A showcase of innovation and technical skill with immersive 3D experiences using Three.js.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio, // This is now first
    sourceCodeLink: "https://github.com/tahir121-web",
  },
  {
    name: "Laptop Marketplace",
    description:
      "A full-featured laptop marketplace with advanced authentication, payment workflow, and seamless UX.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: laptop,
    sourceCodeLink: "https://github.com/tahir121-web",
  },
  {
    name: "Medical AI Chatbot Platform",
    description:
      "An AI chatbot platform that automates triage and user onboarding, saving hundreds of staff hours.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: ai, // This is now third
    sourceCodeLink: "https://github.com/tahir121-web",
  },
];

// Trigger deployment update

export { services, technologies, experiences, testimonials, projects };