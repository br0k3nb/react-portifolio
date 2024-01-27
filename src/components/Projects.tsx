import { useState } from "react";
import Compressor from "compressorjs";
import { useQuery } from "react-query";
import { FaPlusCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FieldValues, useForm, useFieldArray } from "react-hook-form";
import imageCompression from 'browser-image-compression';
import { BsGithub, BsArrowUpRightSquare, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
// import { Link } from "react-router-dom";

import SvgLoader from "./Loader";
import api from "../services/api";
import { toastAlert } from "./Alert";
import useTheme from "../hooks/useTheme";
import useDebounce from "../hooks/useDebounce";
import AddProjectModal from "./Modals/AddProjectModal";
import useUpdateViewport from "../hooks/useUpdateViewport";

export default function Projects() {
  const isLocalhost = location.hostname === "localhost";
  
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [direction, setDirection] = useState(0);
  const [imageToShow, setImageToShow] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [projectImageLoader, setProjectImageLoader] = useState('');
  const [imageClicked, setImageClicked] = useState<number | null>(null);
  const [deviceScreenSize, setDeviceScreeSize] = useState({ width: window.innerWidth });
  const [pageStatus, setPageStatus] = useState({ hasNext: false, hasPrev: false, totalPages: 0 });
  
  const { theme } = useTheme();
  useUpdateViewport(setDeviceScreeSize, 500);
  const delayedSearch = useDebounce(search, 500);

  const { handleSubmit, register, reset, formState, clearErrors } = useForm();
  const { errors } = formState;

  const { control } = useForm<Projects>();
  const { append, replace, remove, fields } = useFieldArray({ control, name: "projects" });
  
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

  const handleLeftClick = (image: string[], id: number) => {
    setImageIsLoading(true);
    setImageClicked(id);

    if (imageToShow) setImageToShow(imageToShow - 1);
    else setImageToShow(image.length - 1);

    setDirection(-1);
  };

  const handleRightClick = (image: string[], id: number) => {
    setImageIsLoading(true);
    setImageClicked(id);

    if(imageToShow < image.length - 1) setImageToShow(imageToShow + 1);
    else setImageToShow(0);

    setDirection(1);
  };

  const handleAddProject = async (data: FieldValues) => {
    try {
      if(!isLocalhost) return;
      const { name, description, githubLink, projectLink, stack, stackIcons, image } = data;

      const filteredStack = stack.split(", ");
      const filteredStackIcons = stackIcons.split(", ");

      if(image[0].size <= 5006613 && image[0].type.startsWith("image")) { //aprox 5mb
        setProjectImageLoader('compressing');
        new Compressor(image[0], {      
          quality: 0.3,
          success: async (compressedResult) => {
            const options = {
              maxSizeMB: 0.2,
              maxWidthOrHeight: 1920,
              useWebWorker: true,
            }
            try {
              const compressedFile = await imageCompression(compressedResult as File, options);
                const reader = new FileReader();
                reader.onload = async function () {
                  if (typeof reader.result === "string") {
                    setProjectImageLoader('');

                    await api.post("/projects/add", {
                      name,
                      description,
                      githubLink,
                      image: reader.result,
                      projectLink,
                      stack: filteredStack,
                      stackIcons: filteredStackIcons
                    });

                    fetchProjects();
                    toastAlert({ icon: "success", title: "Project added!", timer: 2000 });
                  }
                  return "";
                };
                reader.readAsDataURL(compressedFile);
            } catch (error) {
              console.log(error);
            }
          },
        });
      } else if(image[0].type.startsWith("image")) {
        toastAlert({ icon: "error", title: "Only images are supported!", timer: 3000 });
        return;
      } else {
        toastAlert({ icon: "error", title: "Image too large!", timer: 3000 });
        return;
      }
    } catch (err: any) {
      console.log(err);
      toastAlert({ icon: "error", title: err.message, timer: 3000 });
    }
  };

  const fetchProjects = async () => {
    try {
      console.log(page);
      const {
        data: { 
          projects: {
            docs,
            hasNextPage,
            hasPrevPage,
            limit,
            page: currentPage,
            totalPages
          }
        } 
      } = await api.get("/projects", {
        params: {
          page,
          limit: 10,
          search: delayedSearch
        }
      });

      setPageStatus({ hasNext: hasNextPage, hasPrev: hasPrevPage, totalPages });
      replace(docs);
      console.log(docs);
    } catch (err: any) {
      console.log(err);
      toastAlert({ icon: "error", title: err.message, timer: 3000 });
    }
  };

  const { isFetching } = useQuery(["projects", delayedSearch, page], fetchProjects, { 
    refetchInterval: 300000,
    refetchOnWindowFocus: false
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}      
      className="py-32 px-20 xxs:!p-0 lg:px-28 mb-28"
    >
     <AddProjectModal 
      clearErrors={clearErrors}
      errors={errors}
      handleAddProject={handleAddProject}
      handleSubmit={handleSubmit}
      openAddModal={openAddModal}
      setOpenAddModal={setOpenAddModal}
      projectImageLoader={projectImageLoader}
      register={register}
      reset={reset}
     />
      <h1 className="text-center font-bold text-4xl pb-10 xxs:pb-5">
        <div className="flex flex-row justify-center items-center">
          Projects
          {isLocalhost && (
            <button
              onClick={() => setOpenAddModal(true)}
            >
              <FaPlusCircle className="ml-5 rounded-full hover:bg-teal-900 hover:cursor-pointer" />
            </button>
          )}
        </div>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-4 justify-center items-center mb-14">
        <input
          className=" border transition duration-300 dark:bg-[#232424] dark:border-gray-600 dark:text-white bg-gray-200 border-gray-600 text-gray-900 text-[17px] lg:w-[37%] xxs:w-[70%] sm:w-[70%] md:w-[50%] placeholder-gray-400 rounded-[30px] h-[45px] px-5 focus:outline-none dark:hover:border-gray-400"
          onChange={({currentTarget}) => setSearch(currentTarget.value)}
          placeholder="Search..."
          value={search}
        />
        <div className="bg-transparent border border-transparent">
                <div className="btn-group bg-transparent flex !justify-between px-6">
                    {!pageStatus.hasPrev ? (
                        <button className="btn !border-transparent !bg-inherit text-gray-500 cursor-not-allowed"> 
                            <MdKeyboardDoubleArrowLeft size={18} className="cursor-not-allowed" />
                        </button>
                    ) : (
                        <button
                          className="btn !bg-transparent !border-transparent text-lg transition-all duration-300 ease-in-out hover:!text-2xl"
                          onClick={() => setPage(page - 1)}
                          disabled={isFetching}
                        > 
                            <MdKeyboardDoubleArrowLeft className="text-gray-900 dark:text-gray-300" />
                        </button>
                    )}
                    <p className="bg-transparent dark:text-gray-300 uppercase tracking-widest text-sm cursor-default my-auto mx-10">
                        Page {page}
                    </p>
                    {!pageStatus.hasNext ? (
                        <button className="btn !border-transparent !bg-inherit text-gray-500 cursor-not-allowed">
                            <MdKeyboardDoubleArrowRight 
                              className="cursor-not-allowed" 
                              size={18} 
                            />
                        </button>
                    ) : (
                        <button 
                          className="btn !bg-transparent !border-transparent text-lg transition-all duration-300 ease-in-out hover:!text-2xl"
                          onClick={() => setPage(page + 1)}
                          disabled={isFetching}
                        > 
                          <MdKeyboardDoubleArrowRight className="text-gray-900 dark:text-gray-300" />
                        </button>
                    )}
                </div>
            </div>
      </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          >
          <div className="flex justify-center flex-wrap xxs:flex-col">
            {fields.map((project, index: number) => {
              const { 
                image,
                generalInfo: { 
                  name,
                  description,
                  githubLink,
                  projectLink
                },
                stackInfo: { icons } 
              } = project;

              return (
                <motion.div
                  key={index}
                  initial={false ? { opacity: 0.80 } : { opacity: 1 }}
                  whileHover={deviceScreenSize.width > 640 ? { scale: 1.04, opacity: 1 } : undefined}
                  transition={{ type: "spring", stiffness: 80, damping: 10 }} 
                  className="xxs:!w-[78%] xxs:max-w-[400px] sm:w-[440px] md:w-[470px] lg:w-1/2 xl:w-[490px] p-7 xxs:py-7 xxs:px-0 xxs:mx-auto"
                >
                    <div 
                      className={`
                        block shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ease-in-out
                        ${theme === "dark" ? (
                          "bg-[#171817] text-[#F5F5F5] border border-[#4b5563] hover:shadow-gray-700" 
                        ) : (
                          "bg-[#eaeaea] text-[#18181b] hover:shadow-[#111827] border border-[#050505]"
                        )}
                      `}
                    >
                      <div className="relative pb-64 overflow-hidden xxs:pb-52">
                        {false ? (
                          <div className="absolute inset-0">
                            <div className="relative flex items-center">
                              <div className='z-10 absolute w-full bg-teal-600/90 flex flex-row justify-evenly xxs:justify-center rounded-sm shadow-2xl shadow-slate-900 top-[100px] xxs:top-16'>
                                <p className="text-gray-100 text-2xl uppercase py-5 xxs:py-5 xxs:mt-2 xxs:text-sm sm:text-lg sm:py-4 lg:tracking-wide text-center">
                                  Under Construction
                                </p>
                                <span className="text-6xl xxs:text-4xl xxs:py-4 sm:text-5xl sm:mt-2">👷‍♂️</span>
                              </div>
                              <img 
                                className="object-cover blur-[1px] z-0 !h-[400px] w-full" 
                                src={image} 
                                alt="Project image" 
                              />
                            </div>
                          </div>
                        ) : (false) ? (
                          <>
                            <BsArrowRight
                              className="text-gray-100 z-10 absolute top-0 bottom-0 my-auto right-1 cursor-pointer bg-teal-600 px-2 py-1 rounded-full"
                              // onClick={() => handleRightClick(images, index)}
                              size={35}
                            />
                            <BsArrowLeft
                              className="text-gray-100 z-10 absolute top-0 bottom-0 my-auto left-1 cursor-pointer bg-teal-600 px-2 py-1 rounded-full"
                              // onClick={() => handleLeftClick(images, index)}
                              size={35}
                            />
                            <AnimatePresence
                              initial={false}
                              custom={direction}
                            >
                              <motion.img
                                exit="exit"
                                loading="lazy"
                                animate="animate"
                                initial="initial"
                                draggable={false}
                                custom={direction}
                                variants={variants}
                                onLoad={() => setImageIsLoading(false)}
                                // src={images[imageClicked === index ? imageToShow : 0]}
                                // key={images[imageClicked === index ? imageToShow : 0]}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                            </AnimatePresence>
                            {(imageIsLoading && imageClicked === index) && ( 
                              <div className="text-gray-100 z-10 absolute top-0 bottom-0 my-auto h-12 left-0 right-0 mx-auto w-40 bg-teal-600 border border-gray-300 py-3 rounded-full">
                                <SvgLoader 
                                  options={{ showLoadingText: true }}
                                />
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="absolute inset-0">
                            <img 
                              className="object-cover !h-full w-full"
                              src={image}
                              alt="Project image"
                              draggable={false}
                            />
                          </div>
                        )}
                      </div>
                      <div className="p-4 border border-transparent border-t-inherit">
                        <div className="px-2">
                          <h2 className="mt-2 mb-4 font-thin text-3xl xxs:text-2xl">{name}</h2>
                          <p className="text-base xxs:text-sm opacity-90">{description}</p>
                        </div>
                      </div>
                      <p className="px-6 uppercase tracking-widest text-xs">Stack</p>
                      <div className="p-4 !pt-3">
                        <div className="px-2">
                          <div className="mb-8 flex flex-row space-x-2">
                            {icons.map((icons, idx) => {
                              return (
                                <img 
                                  key={idx}
                                  alt=""
                                  draggable={false}
                                  src={icons}
                                  className={`
                                    h-[30px] w-[30px] xxs:w-[30px] xxs:h-[35px] rounded
                                    ${(icons.includes("express") && theme === 'dark') && "invert-color"}
                                  `}
                                />
                              )
                            })}
                          </div>
                          <div className="flex flex-row align-bottom space-x-4 mb-2">
                            <a 
                              draggable={false}
                              href={githubLink ? githubLink as string : '#'}
                              className={`${!githubLink && 'blur-[1px]'}`}
                            >
                              <BsGithub 
                                className={`xxs:text-2xl text-3xl hover:-translate-y-1 transition-transform cursor-pointer ${!githubLink && '!cursor-not-allowed hover:translate-y-0'}`}
                              />
                            </a>
                            <a 
                              draggable={false}
                              href={projectLink ? projectLink as string : '#'}
                              className={`${!projectLink && 'blur-[1px]'}`}
                            >
                              <BsArrowUpRightSquare 
                                className={`xxs:text-2xl text-3xl hover:-translate-y-1 transition-transform cursor-pointer ${!projectLink && '!cursor-not-allowed hover:translate-y-0'}`}
                              />
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