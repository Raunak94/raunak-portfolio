import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Work
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl  lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <h3 className="mb-2 font-semibold text-3xl">
                {experience.company}
              </h3>

              <h4 className="text-xl text-stone-100">{experience.role}</h4>

              <ul className="list-disc list-inside mt-3 space-y-2">
                {experience.description.map((point, idx) => (
                  <li key={idx} className="mb-4 text-stone-400">
                    {point}
                  </li>
                ))}
              </ul>
              <br />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
