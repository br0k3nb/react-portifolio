import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { HiArrowDown } from "react-icons/hi"
import { motion } from 'framer-motion';

import me from '../assets/me2.jpg';

export default function Hero() {

    const [ text ] = useTypewriter({
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
                    <div className="absolute rounded-full object-cover shadow-2xl shadow-slate-400 md:h-80 md:w-80 sm:h-72 sm:w-72 xxs:h-48 xxs:w-48 animate-pulse" />
                    <img
                        src={me}
                        alt="Profile picture"
                        width={250}
                        height={200}
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
                        <a href="#projects" className="text-neutral-100 uppercase text-sm transition-all ease-in-out delay-150 tracking-widest px-6 py-3 border border-teal-600 rounded-full shadow-lg shadow-gray-800 hover:-translate-y-0 hover:scale-110 hover:bg-teal-600 duration-300">
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