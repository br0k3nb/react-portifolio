import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";

import projects from "../datasets/projects";

export default function Projects() {

  return (
    <div className="p-24 xxs:p-10">
      <h1 className="my-10 text-center font-bold text-4xl pb-14 xxs:pb-5">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <motion.div
        initial={{ x:-600, opacity: 0 }}
        whileInView={{ x:0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-col space-y-28"
      >
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="relative">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <a href={project.link}>
                      <img
                        src={project.image}
                        alt="Project Image"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </a>
                  </div>
                  <div className="mt-8 md:w-1/2">
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
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}