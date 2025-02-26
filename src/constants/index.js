import project1 from "../assets/projects/netflix.png";
import project2 from "../assets/projects/lyrics2.png";
import project3 from "../assets/projects/port.png";

export const EXPERIENCES = [
  {
    year: "2016 - Present",
    role: "Founder and Owner",
    company: "Computech Nagpur",
    description: [
      `Founded and managed a successful computer sales and service business,delivering IT solutions to both B2B and B2C clients`,
      `Provided software installation, remote desktop configuration, and end-to-end network setup, including LAN cabling and infrastructure mapping`,
      `Conducted on-site inspections and troubleshooting for corporate clients,optimizing networking systems and server performance.`,
      `Delivered comprehensive technical support, resolving hardware and software issues, managing system installations, and overseeing upgrades.`,
    ],
  },
  {
    year: "2020 - 2024",
    role: "Co-Founder and Technology Head",
    company: "Dreamplay Nagpur",
    description: [
      "Co-founded and managed a leading kids' entertainment center featuring Virtual Reality experiences and a soft play area",
      "Designed and built a custom VR infrastructure, including high-performance gaming PCs, VR headsets, projector displays, and multiplayer gaming networks.",
      "Managed and maintained the entire network ecosystem, including configuring routers, switches, VR headsets, and CPUs, while developing network maps for efficient troubleshooting and performance optimization",
      "Led a team of 3-5 employees, overseeing daily operations, optimizing processes, and ensuring exceptional customer satisfaction",
      "Assisted customers with VR equipment setup, game navigation, and safety guidelines for an immersive experience.",
      "Led promotional activities, introduced new VR games, and organized special events to enhance customer engagement.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Netflix clone",
    image: project1,
    description:
      "Developed a full-stack Netflix clone with core features like browsing, adding, updating, and deleting titles. Built a responsive front-end using JavaScript, HTML, and CSS, and a robust back-end with Node.js and MongoDB. Deployed and maintained the project on GitHub for version control and collaboration.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "MongoDB",
      "Reactjs",
    ],
  },
  {
    title: "Lyrics Now",
    image: project2,
    description:
      "Designed and developed a python software that automatically retrieves lyrics for the currently playing song by integrating with music player APIs and online lyric databases",
    technologies: ["Python"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Nagpur India ",
  phoneNo: "+91-9766128875",
  email: "raunakgaggar94@gmail.com",
};
