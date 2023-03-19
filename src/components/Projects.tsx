import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";

import projects from "../datasets/projects";

export default function Projects() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="p-20 xxs:p-16 lg:px-28 mb-32 "
    >
      <h1 className="my-10   text-center font-bold text-4xl pb-14 xxs:pb-5">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap flex-col lg:flex-row space-y-0 xxs:space-y-10 sm:space-y-10 "
      >
        {projects.map((project, idx) => {
          return (
            <div key={idx} className='lg:w-[47%] md:w-[100%] lg:h-[50%] mx-auto lg:mt-10 '>
              <div className='flex flex-col lg:flex-row lg:space-x-5 mt-5'>
                <motion.div
                  initial={{ x: 0, opacity: 0.8 }}
                  whileHover={{ scale: 1.03, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className="lg:w-1/2 flex flex-shrink-0 shadow-xl shadow-slate-800"
                >
                  <a href={project.link}>
                    <img
                      src={project.image}
                      alt="Project Image"
                      width={800}
                      height={500}
                      className="rounded-xl shadow-xl object-cover h-[100%] "
                    />
                  </a>
                </motion.div>
                <div className="xxs:mt-5 sm:mt-5">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <a href={project.github}>
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </a>
                    <a href={project.link}>
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </motion.div>
    </motion.div >
  )
}