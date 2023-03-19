import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";

import projects from "../datasets/projects";

export default function Projects() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="py-32 px-20 xxs:p-10 lg:px-28 mb-28"
    >
      <h1 className="text-center font-bold text-4xl pb-14 xxs:pb-5">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap flex-row lg:gap-x-6 lg:gap-y-6"
      >
        {projects.map((project, idx) => {
          return (
            <motion.div
              initial={ project.underConstruction ? { opacity: 0.80 } : { opacity: 1 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              transition={{ type: "spring", stiffness: 90, damping: 10 }}
              className="pb-2 mx-auto min-h-[350px] mt-10 max-w-sm sm:max-w-md rounded-lg shadow-2xl shadow-teal-900/30 hover:shadow-teal-800/100  bg-stone-800"
            >
              <a href="#">
                {project.underConstruction ? (
                  <div className="relative flex items-center">
                    <div className='z-10 absolute w-full bg-teal-600/90 flex flex-row justify-evenly xxs:justify-center rounded-sm shadow-2xl shadow-slate-900'>
                      <p className="text-2xl py-4 xxs:py-5 xxs:mt-2 xxs:text-sm xxs:uppercase sm:text-lg sm:py-4 sm:uppercase lg:tracking-wide text-center">
                          Under Construction
                      </p>
                      <span className="text-6xl xxs:text-4xl xxs:py-4 sm:text-5xl sm:mt-2">👷‍♂️</span>
                    </div>
                    <img className="rounded-t-lg max-h-44 w-full object-cover blur-xs z-0" src={project.image} alt="" />
                  </div>
                ): (
                  <img className="rounded-t-lg max-h-44 w-full object-cover" src={project.image} alt="" />
                )}
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-3xl font-semibold tracking-tighter text-white">
                    {project.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">
                  {project.description}
                </p>
                <div className="mx-auto mt-5 mb-5 flex flex-row text-center items-center">
                  {/* <p className="text-sm mr-2 tracking-widest text-gray-300 uppercase"> stack:  </p> */}
                  {project.codeBase?.map((icons, idx) => (
                    // <div>
                      <img src={icons} alt="" key={idx} className='h-[35px] w-[35px] xxs:w-[30px] xxs:h-[35px] pr-2'/>
                    // </div>
                  ))}
                </div>
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
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div >
  )
}