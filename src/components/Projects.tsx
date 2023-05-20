import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";

import projects from "../datasets/projects";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="py-32 px-20 xxs:!p-0 lg:px-28 mb-28"
    >
      <h1 className="text-center font-bold text-4xl pb-14 xxs:pb-5">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center flex-wrap xxs:flex-col">
            {projects.map(project => {
              return (
                  <motion.div
                    initial={ project.underConstruction ? { opacity: 0.80 } : { opacity: 1 }}
                    whileHover={{ scale: 1.04, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 90, damping: 10 }}
                    className={`xxs:!w-[78%] xxs:max-w-[400px] sm:w-[440px] md:w-[470px] lg:w-1/2 xl:w-[490px] p-7 xxs:py-7 xxs:px-0 xxs:mx-auto`}
                  >
                      <div className={`block shadow-2xl shadow-teal-900/30 hover:shadow-teal-800/100 bg-stone-800 hover:shadow-xl rounded-2xl overflow-hidden `}>
                        <div className="relative pb-64 overflow-hidden xxs:pb-44">
                          {project.underConstruction ? (
                            <div className="absolute inset-0">
                              <div className="relative flex items-center">
                                <div className='z-10 absolute w-full bg-teal-600/90 flex flex-row justify-evenly xxs:justify-center rounded-sm shadow-2xl shadow-slate-900 top-24 xxs:top-12'>
                                  <p className="text-2xl py-5 xxs:py-5 xxs:mt-2 xxs:text-sm xxs:uppercase sm:text-lg sm:py-4 sm:uppercase lg:tracking-wide text-center">
                                      Under Construction
                                  </p>
                                  <span className="text-6xl xxs:text-4xl xxs:py-4 sm:text-5xl sm:mt-2">👷‍♂️</span>
                                </div>
                                <img className="object-cover blur-xs z-0" src={project.image} alt="" />
                              </div>
                            </div>
                          ): (
                            <img className="absolute inset-0 h-full w-full object-cover" src={project.image} alt="Project image" />
                          )}
                        </div>
                        <div className="p-4">
                          <div className="px-2">
                            <h2 className="mt-2 mb-4 font-thin text-3xl xxs:text-2xl">{project.name}</h2>
                            <p className="text-base text-gray-300/90 xxs:text-sm">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="px-2">
                            <div className="mb-8 flex flex-row space-x-2">
                              {project.codeBase?.map((icons, idx) => <img draggable={false} src={icons} alt="" key={idx} className='h-[30px] w-[30px] xxs:w-[30px] xxs:h-[35px]'/> )}
                            </div>
                            <div className="flex flex-row align-bottom space-x-4 mb-2">
                              <a 
                                draggable={false}
                                href={project.github === '' ? '#' : project.github}
                                className={`${project.link === '' && 'text-gray-100/70'}`}
                              >
                                <BsGithub className={`xxs:text-2xl text-3xl hover:-translate-y-1 transition-transform cursor-pointer ${project.link === '' && 'cursor-not-allowed hover:translate-y-0'}`}/>
                              </a>
                              <a 
                                draggable={false}
                                href={project.link === '' ? '#' : project.link}
                                className={`${project.link === '' && 'text-gray-100/70'}`}
                              >
                                <BsArrowUpRightSquare className={`xxs:text-2xl text-3xl hover:-translate-y-1 transition-transform cursor-pointer ${project.link === '' && 'cursor-not-allowed hover:translate-y-0'}`}/>
                              </a>
                            </div> 
                          </div>
                        </div>
                      </div>
                  </motion.div>
                )
              })}
          </div>
       </motion.div > 
    </motion.div>
  )
}