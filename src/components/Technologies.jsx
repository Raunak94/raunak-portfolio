import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        {/* html */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <SiHtml5 className="text-orange-700 text-7xl mx-5" title="HTML5" />
        </motion.div>
        {/* css */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <SiCss3 className="text-blue-600 text-7xl mx-5" title="CSS3" />
        </motion.div>
        {/* js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <SiJavascript
            className="text-yellow-500 text-7xl mx-5"
            title="JavaScript"
          />
        </motion.div>
        {/* btst */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <SiBootstrap
            className="text-purple-600 text-7xl mx-5"
            title="Bootstrap"
          />
        </motion.div>
        {/* node */}
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVarients(5)}
        >
          <FaNodeJs className="text-7xl text-green-500 mx-5" />
        </motion.div>
        {/* mongodb */}

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
        >
          <SiMongodb className="text-7xl" color="#47A248" />
        </motion.div>
        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400 mx-5" />
        </motion.div>

        {/* tcss */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <SiTailwindcss
            className="text-teal-500 text-7xl mx-5"
            title="Tailwind CSS"
          />
        </motion.div>

        {/* pyt */}
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVarients(2)}
        >
          <SiPython className="text-yellow-500 text-7xl mx-5" />
        </motion.div>
        {/* flu */}
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <SiFlutter className="text-blue-500 text-7xl mx-5" />
        </motion.div>
      </motion.div>
    </div>
  );
}
