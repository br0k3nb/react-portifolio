import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { HiArrowDown } from "react-icons/hi"
import { motion } from 'framer-motion';

import me from '../assets/me3.jpg';

type Props = {}

export default function Hero({ }: Props) {
    
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Rodrigo!",
            "A guy who loves ☕",
            "<But loves more to code />"
        ],
        loop: true,
        delaySpeed: 1500,
    });


    return (
        <div>
            <div className="relative flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 lg:flex-row sm:flex-col md:py-48 md:flex-col md:space-x-5 md:text-left">
                <motion.div 
                    initial={{ x: -200, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="md:mt-2 md:px-0"
                >
                    <div className="absolute rounded-full object-cover shadow-2xl shadow-slate-400 md:h-80 md:w-80 sm:h-72 sm:w-72 xxs:h-52 xxs:w-52 animate-pulse">
                        
                    </div>
                    <img
                        src={me}
                        alt="Profile picture"
                        width={250}
                        height={200}
                        className="rounded-full object-scale-do md:h-80 md:w-80 sm:h-72 sm:w-72 xxs:h-52 xxs:w-52"
                    />
                
                </motion.div>
                <motion.div 
                    initial={{ x: 600, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="md:mt-2 md:w-3/5 md:pr-0 sm:p-5 xxs:p-5"
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
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projects
                    </Link>
                </motion.div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </div>
    )
}