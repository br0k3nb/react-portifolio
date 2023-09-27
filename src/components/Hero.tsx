import { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { HiArrowDown } from "react-icons/hi"
import { motion } from 'framer-motion';

import SvgLoader from './Loader';
import me from '../assets/me2.jpg';

export default function Hero() {
    const [imageIsLoading, setImageIsLoading] = useState(true);
    
    const [text] = useTypewriter({
        words: [ "Hi, my name is Rodrigo!", "A guy who loves ☕", "<But loves more to code />" ],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1.2 }}
            className='mb-40'
        >
            <div className="relative flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 lg:flex-row sm:flex-col md:py-48 md:flex-col md:space-x-10 md:text-left">
                <motion.div 
                    initial={{ x: -200, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="md:mt-2 md:px-10"
                    >
                    <div className="absolute rounded-full object-cover shadow-2xl shadow-teal-600/60 md:h-80 md:w-80 sm:h-72 sm:w-72 xxs:h-48 xxs:w-48 animate-pulse" />
                    {imageIsLoading && (
                        <div className="absolute md:h-80 md:w-80 sm:h-72 sm:w-72 xxs:h-48 xxs:w-48 animate-pulse">
                            <div className="relative text-gray-100 z-10 my-auto h-12 mx-auto w-40 bg-[#22857d] border border-gray-300 py-3 rounded-full top-32 xxs:top-[70px]">
                                <SvgLoader options={{ 
                                    showLoadingText: true 
                                }} />
                            </div>
                        </div>
                    )}
                    <img
                        src={me}
                        width={250}
                        height={200}
                        onLoad={() => setImageIsLoading(false)}
                        className="rounded-full object-cover md:h-80 md:w-80 sm:h-72 sm:w-72 xxs:h-48 xxs:w-48"
                    />
                </motion.div>
                <motion.div 
                    initial={{ x: 600, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="md:mt-2 md:w-4/5 lg:w-3/5 md:pr-0 sm:p-5 xxs:p-5 xxs:text-center"
                >
                    <h1 className="text-4xl font-bold mt-6 md:mt-2 md:text-6xl">
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='#0D9488' />
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I'm a {" "}
                        <span className="font-semibold text-teal-600">
                            Software developer {" "}
                        </span>
                        based in Brazil. Working towards creating software that
                        makes life easier and more meaningful.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <a href="#projects" className="text-gray-100 uppercase text-[15px]  hover:shadow-teal-900 bg-teal-600 hover:bg-teal-700 transition-all ease-in-out duration-300 tracking-widest px-6 py-3 rounded-full shadow-lg shadow-gray-800">
                            Projects
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-row items-center text-center justify-center pb-10">
                <a href="#about"> <HiArrowDown size={35} className="animate-bounce" /> </a>
            </div>
        </motion.div>
    )
}