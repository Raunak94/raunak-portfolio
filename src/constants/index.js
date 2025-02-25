import project1 from "../assets/projects/netflix.png";
import project2 from "../assets/projects/lyrics2.png";
import project3 from "../assets/projects/port.png";

export const EXPERIENCES = [
  {
    year: "2016 - Present",
    role: "Founder and Owner",
    company: "Computech Nagpur",
    description: `Founded and managed a successful computer sales and service business, providing IT solutions for B2B and B2C clients. Offered software installation, remote desktop setup, and complete network solutions, including LAN cabling and infrastructure mapping. Conducted on-site inspections and troubleshooting for corporate clients, optimizing networking systems and server performance. Delivered technical support, resolving hardware/software issues, managing installations, and overseeing upgrades. Served key clients across finance, IT, education, transportation, healthcare, and retail sectors. `,
  },
  {
    year: "2020 - 2024",
    role: "Co-Founder and Technology Head",
    company: "Dreamplay Nagpur",
    description: `Co-founded and managed a leading kids' entertainment center offering Virtual Reality experiences and a soft play area. Designed and built a custom VR infrastructure, including high-performance gaming PCs, VR headsets, and multiplayer networks. Managed and maintained the entire network ecosystem, ensuring optimal performance and troubleshooting efficiency. Led a team of 3-5 employees, overseeing daily operations, customer engagement, and workflow optimization. Assisted customers with VR equipment setup and safety guidelines while organizing promotional activities and special events to enhance the experience.igns and optimized frontend performance.`,
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
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Reactjs"],
  },
];

export const CONTACT = {
  address: "Nagpur India ",
  phoneNo: "+91-9766128875",
  email: "raunakgaggar94@gmail.com",
};
