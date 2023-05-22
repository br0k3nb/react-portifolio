import { useState } from "react";
import { BsGithub, BsArrowUpRightSquare, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

import projects from "../datasets/projects";
import SvgLoader from "./Loader";

export default function Projects() {
  const [ imageToShow, setImageToShow ] = useState(0);
  const [ direction, setDirection ] = useState(0);
  const [ imageIsLoading, setImageIsLoading ] = useState(false);
  const [ deviceScreenSize, setDeviceScreeSize ] = useState(window.innerWidth);

  addEventListener("resize", () => setTimeout(() => setDeviceScreeSize(window.innerWidth), 500));

  const variants = {
    initial: (direction: number) => {
      return { x: direction > 0 ? 1000 : -1000, opacity: 0 }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      }
    },
  }

  const handleLeftClick = (image: any) => {
    setImageIsLoading(true);
    if (imageToShow) setImageToShow(imageToShow - 1);
    else setImageToShow(image.length - 1);

    setDirection(-1);
  };

  const handleRightClick = (image: any) => {
    setImageIsLoading(true);
    if(imageToShow < image.length - 1) setImageToShow(imageToShow + 1);
    else setImageToShow(0);

    setDirection(1);
  };

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
            {projects.map((project, index: number) => {
              const { image, underConstruction, description, name, codeBase, github, link } = project;

              return (
                <motion.div
                  key={index}
                  initial={underConstruction ? { opacity: 0.80 } : { opacity: 1 }}
                  whileHover={deviceScreenSize > 640 ? { scale: 1.04, opacity: 1 } : undefined}
                  transition={{ type: "spring", stiffness: 80, damping: 10 }} 
                  className="xxs:!w-[78%] xxs:max-w-[400px] sm:w-[440px] md:w-[470px] lg:w-1/2 xl:w-[490px] p-7 xxs:py-7 xxs:px-0 xxs:mx-auto"
                >
                    <div className="block hover:shadow-2xl hover:shadow-teal-900/50 bg-stone-800 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out border border-gray-600 xxs:hover:border-gray-600">
                      <div className="relative pb-64 overflow-hidden xxs:pb-44">
                        {underConstruction ? (
                          <div className="absolute inset-0">
                            <div className="relative flex items-center">
                              <div className='z-10 absolute w-full bg-teal-600/90 flex flex-row justify-evenly xxs:justify-center rounded-sm shadow-2xl shadow-slate-900 top-24 xxs:top-12'>
                                <p className="text-2xl py-5 xxs:py-5 xxs:mt-2 xxs:text-sm xxs:uppercase sm:text-lg sm:py-4 sm:uppercase lg:tracking-wide text-center">
                                    Under Construction
                                </p>
                                <span className="text-6xl xxs:text-4xl xxs:py-4 sm:text-5xl sm:mt-2">👷‍♂️</span>
                              </div>
                              <img className="object-cover blur-[1px] z-0 border border-transparent border-b-gray-600" src={image[0]} alt="Project image" />
                            </div>
                          </div>
                        ) : (
                          <>
                            <BsArrowRight 
                              onClick={() => handleRightClick(image)} 
                              size={35} 
                              className="z-10 absolute top-[7.4rem] xxs:top-[5rem] right-1 cursor-pointer bg-gray-900 px-2 py-1 rounded-full"
                            />
                            <BsArrowLeft
                              onClick={() => handleLeftClick(image)}
                              size={35} 
                              className="z-10 absolute top-[7.4rem] xxs:top-[5rem] active:ring-0 left-1 cursor-pointer bg-gray-900 px-2 py-1 rounded-full"
                            />
                            <AnimatePresence initial={false} custom={direction}>
                              <motion.img
                                exit="exit"
                                animate="animate"
                                initial="initial"
                                custom={direction}
                                variants={variants}
                                src={image[imageToShow]}
                                key={image[imageToShow]}
                                onLoad={() => setImageIsLoading(false)}
                                className="absolute inset-0 h-full w-full object-cover border border-transparent border-b-gray-600"
                                />
                            </AnimatePresence>
                            {imageIsLoading && ( 
                              <div className="z-10 absolute top-[7.4rem] xxs:top-[5rem] left-40 xxs:left-32 bg-gray-900 px-3 py-3 rounded-full">
                                  <SvgLoader options={{showLoadingText: true}} />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="px-2">
                          <h2 className="mt-2 mb-4 font-thin text-3xl xxs:text-2xl">{name}</h2>
                          <p className="text-base text-gray-300/90 xxs:text-sm">
                            {description}
                          </p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="px-2">
                          <div className="mb-8 flex flex-row space-x-2">
                            {codeBase?.map((icons, idx) => <img draggable={false} src={icons} alt="" key={idx} className='h-[30px] w-[30px] xxs:w-[30px] xxs:h-[35px]'/> )}
                          </div>
                          <div className="flex flex-row align-bottom space-x-4 mb-2">
                            <a 
                              draggable={false}
                              href={github ? github as string : '#'}
                              className={`${!link && 'text-gray-100/70'}`}
                            >
                              <BsGithub className={`xxs:text-2xl text-3xl hover:-translate-y-1 transition-transform cursor-pointer ${!link && '!cursor-not-allowed hover:translate-y-0'}`}/>
                            </a>
                            <a 
                              draggable={false}
                              href={link ? link as string : '#'}
                              className={`${!link && 'text-gray-100/70'}`}
                            >
                              <BsArrowUpRightSquare className={`xxs:text-2xl text-3xl hover:-translate-y-1 transition-transform cursor-pointer ${!link && '!cursor-not-allowed hover:translate-y-0'}`}/>
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