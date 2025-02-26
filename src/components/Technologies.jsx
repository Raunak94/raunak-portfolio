import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiPython,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

// Function to create smooth bounce animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div className="pb-24">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Icons Container */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 px-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.2 }}
      >
        {/* Technology Icons with Titles */}
        {[
          {
            Icon: SiHtml5,
            color: "text-orange-600",
            title: "HTML5",
            duration: 3,
          },
          { Icon: SiCss3, color: "text-blue-600", title: "CSS3", duration: 4 },
          {
            Icon: SiJavascript,
            color: "text-yellow-500",
            title: "JavaScript",
            duration: 3.5,
          },
          {
            Icon: SiBootstrap,
            color: "text-purple-600",
            title: "Bootstrap",
            duration: 1,
          },
          {
            Icon: FaNodeJs,
            color: "text-green-500",
            title: "Node.js",
            duration: 5,
          },
          {
            Icon: SiMongodb,
            color: "text-green-600",
            title: "MongoDB",
            duration: 3,
          },
          {
            Icon: RiReactjsLine,
            color: "text-cyan-400",
            title: "React.js",
            duration: 2.5,
          },
          {
            Icon: SiTailwindcss,
            color: "text-teal-500",
            title: "Tailwind CSS",
            duration: 2.5,
          },
          {
            Icon: SiPython,
            color: "text-yellow-500",
            title: "Python",
            duration: 2,
          },
          {
            Icon: SiFlutter,
            color: "text-blue-500",
            title: "Flutter",
            duration: 2.5,
          },
        ].map(({ Icon, color, title, duration }, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(duration)}
              className="text-7xl hover:scale-110 transition-transform duration-300"
            >
              <Icon className={`${color}`} />
            </motion.div>
            <p className="m-2 text-lg font-medium">{title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
