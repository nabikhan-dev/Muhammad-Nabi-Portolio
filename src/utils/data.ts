import thumbnail1 from "../assets/ProjectImages/car App 1.png";
import carApp2 from "../assets/ProjectImages/car App 2.png";
import carApp3 from "../assets/ProjectImages/car App 3.webp";
import carApp4 from "../assets/ProjectImages/car App 4.png";

import webpage1 from "../assets/ProjectImages/car web 1.webp";
import webpage2 from "../assets/ProjectImages/car web 2.webp";
import webpage3 from "../assets/ProjectImages/car web 3.webp";
import webpage4 from "../assets/ProjectImages/car web 4.webp";
import webpage5 from "../assets/ProjectImages/car web 5.webp";

import webDoctor1 from "../assets/ProjectImages/Doctordesign1.png";
import webDoctor2 from "../assets/ProjectImages/DoctorDesign2.jpg";
import webDoctor3 from "../assets/ProjectImages/DoctorDesign 3.png";

import ecommerce1 from "../assets/ProjectImages/ecommerce 1.jpg";
import ecommerce2 from "../assets/ProjectImages/ecommerce 2.jpg";
import ecommerce3 from "../assets/ProjectImages/ecommerce 3.jpg";
import ecommerce4 from "../assets/ProjectImages/ecommerce 4.png";

import stocksync1 from "../assets/ProjectImages/stocksync1.webp";
import stocksync2 from "../assets/ProjectImages/stocksync2.webp";
import stocksync3 from "../assets/ProjectImages/stocksync3.webp";
import stocksync4 from "../assets/ProjectImages/stocksync4.webp";
import stocksync5 from "../assets/ProjectImages/stocksync5.webp";

import shoes1 from "../assets/ProjectImages/shoes 1.png";
import shoes2 from "../assets/ProjectImages/shoes 2.png";
import shoes3 from "../assets/ProjectImages/shoes 3.jpg";

import personalmanager1 from "../assets/ProjectImages/Personal Manger App design 1.png";
import personalmanager2 from "../assets/ProjectImages/Personal Manger App design 2.png";
import personalmanager3 from "../assets/ProjectImages/Personal Manger App design 3.png";

import swat1 from "../assets/ProjectImages/swat 1.png";
import swat2 from "../assets/ProjectImages/swat 2.png";
import swat3 from "../assets/ProjectImages/swat 3.png";
import swat4 from "../assets/ProjectImages/swat 4.png";

const data = [
  {
    id: 1,
    title: "Road Master Mobile App",
    description:
      "Road Master is a comprehensive mobile application designed to manage all car-related services in one place. It features a sleek dark-themed UI, Firebase authentication, and Firestore integration for managing car information and service history. The app strengthened my skills in multi-screen React Native development, Firebase backend integration, and Tailwind CSS styling.",
    image: thumbnail1,
    tech: [
      { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
    ],
    screenshots: [carApp2, carApp3, carApp4],
  },
  {
    id: 2,
    title: "RIDEZY Car Rental Web App & Admin Dashboard",
    description:
      "RIDEZY is a modern web application designed for car rental businesses, offering both a user-facing site and an admin dashboard. It features a clean, responsive design built with React, TypeScript, and Tailwind CSS. The system includes a booking flow, car listings, and an admin dashboard for managing vehicles and reservations. This project enhanced my expertise in full-stack web development and responsive UI design.",
    image: webpage1,
    tech: [
      { name: "React JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", src: "https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF" },
    ],
    screenshots: [webpage1, webpage2, webpage3, webpage4, webpage5],
  },
  {
    id: 3,
    title: "Doctorzone – Hospital System UI/UX Design",
    description:
      "Doctorzone is a professional and user-friendly hospital directory design aimed at simplifying the process of finding healthcare professionals. The clean layout, teal-white color scheme, and intuitive navigation enhance usability. The project emphasizes hierarchy, responsive design, and consistent branding across all pages, showcasing my UI/UX design and visual storytelling skills.",
    image: webDoctor1,
    tech: [
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
      { name: "Illustrator", src: "https://devicon-website.vercel.app/api/illustrator/plain.svg?color=%23FAA625" },
    ],
    screenshots: [webDoctor1, webDoctor2, webDoctor3],
  },
  {
    id: 4,
    title: "Mega Bazaar – E-commerce Website",
    description:
      "Mega Bazaar is a conceptual e-commerce website showcasing a scalable and modular design approach. Built with React and Tailwind CSS, it emphasizes modern UI, component reusability, and responsive layouts. The project highlights my skills in creating intuitive shopping interfaces, structured design systems, and seamless user flows for online stores.",
    image: ecommerce1,
    tech: [
      { name: "React JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
    screenshots: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
  },
  {
    id: 5,
    title: "StockSync – E-commerce Dashboard",
    description:
      "StockSync is a powerful dashboard for managing e-commerce operations, focusing on usability and data visualization. I handled both the UI/UX design and front-end development. Built with React, TypeScript, and Tailwind CSS, it provides tools for managing inventory, tracking sales, and monitoring key metrics. This project demonstrates my expertise in creating dynamic and data-driven dashboards.",
    image: stocksync1,
    tech: [
      { name: "React JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", src: "https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF" },
    ],
    screenshots: [stocksync1, stocksync2, stocksync3, stocksync4, stocksync5],
  },
  {
    id: 6,
    title: "Sneaker Paradise – E-commerce Design",
    description:
      "Sneaker Paradise is a modern and responsive e-commerce design concept for a footwear brand. It focuses on clean visuals, intuitive navigation, and a dark, high-contrast theme to highlight products. Key features include responsive layouts, promotional banners, and structured product displays. The design emphasizes a smooth shopping experience across all devices.",
    image: shoes1,
    tech: [
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    ],
    screenshots: [shoes1, shoes2, shoes3],
  },
  {
    id: 7,
    title: "Personal Manager Mobile App",
    description:
      "Personal Manager is a productivity app developed using Expo, TypeScript, React Native, Clerk, and Appwrite. It helps users manage daily tasks through an elegant dark-themed UI. The app integrates Clerk for secure authentication and Appwrite for backend management. Key features include progress tracking, categorized tasks, and seamless navigation — highlighting my expertise in cross-platform development and authentication systems.",
    image: personalmanager1,
    tech: [
      { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Expo", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
     { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", src: "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF" },
    ],
    screenshots: [personalmanager1, personalmanager2, personalmanager3],
  },
  {
    id: 8,
    title: "Swat Guidnear Mobile App",
    description:
      "SwatGuidnear is a mobile app designed to help tourists explore the Swat region of Pakistan. It provides an interactive platform to discover attractions, restaurants, and hidden gems. Features include an interactive map, personalized profiles, and destination details with ratings and imagery. The modern, nature-inspired design creates a welcoming experience for travelers. Built with React Native and Firebase.",
    image: swat1,
    tech: [
      { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
    ],
    screenshots: [swat1, swat2, swat3, swat4],
  },
];

const services = [
  {
    id: 1,
    title: "React Native App Development",
    description:
      "Creating seamless, high-performance cross-platform mobile apps with React Native. Focused on animation, UX, and performance.",
  },
  {
    id: 2,
    title: "React Web Development",
    description:
      "Developing fast, responsive, and dynamic web applications using React, TypeScript, and Tailwind CSS for a modern UI experience.",
  },
  {
    id: 3,
    title: "UI/UX Design & Prototyping",
    description:
      "Designing smooth, user-friendly interfaces using Figma — focusing on accessibility, balance, and motion that enhances usability.",
  },
  {
    id: 4,
    title: "Cloud Integration",
    description:
      "Integrating mobile and web applications with scalable cloud platforms like Firebase and AWS for secure, real-time performance.",
  },
  {
    id: 5,
    title: "Backend APIs & Databases",
    description:
      "Building efficient RESTful and GraphQL APIs with Node.js and Express, using MongoDB or PostgreSQL for optimized data flow.",
  },
  {
    id: 6,
    title: "App Deployment & Optimization",
    description:
      "Ensuring apps are fully optimized for App Store, Play Store, and Web with CI/CD pipelines, testing, and performance tuning.",
  },
];
const processsteps = [
  {
    id: 1,
    title: "1. Planning & Research",
    description:
      "Understanding client goals, researching the target audience, and defining a clear roadmap before starting development.",
  },
  {
    id: 2,
    title: "2. UI/UX Design",
    description:
      "Crafting intuitive and engaging interfaces in Figma with a strong focus on usability and seamless user flow.",
  },
  {
    id: 3,
    title: "3. Development",
    description:
      "Bringing designs to life using React Native and React, focusing on clean architecture, animations, and scalability.",
  },
  {
    id: 4,
    title: "4. Testing & Optimization",
    description:
      "Running extensive QA tests, optimizing performance, and fixing issues to ensure the product runs flawlessly.",
  },
  {
    id: 5,
    title: "5. Deployment",
    description:
      "Deploying applications to the App Store, Play Store, or Web with CI/CD pipelines for a smooth launch.",
  },
  {
    id: 6,
    title: "6. Maintenance & Support",
    description:
      "Monitoring post-launch performance, applying updates, and ensuring long-term stability and improvements.",
  },
];
export { data, services, processsteps };
