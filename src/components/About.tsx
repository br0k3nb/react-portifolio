import { motion } from 'framer-motion';

import about from '../assets/about-me.png';
import skills from '../datasets/skills.json';
import tools from '../datasets/tools.json';
import learning from '../datasets/learning.json';

import useTheme from '../hooks/useTheme';

export default function About() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1.2 }}
            className="my-12 mt-5 md:pt-16 lg:px-32 pb-48 mb-10 md:px-10 xxs:pb-36"
        >
            <h1 className="text-center font-bold text-4xl xxs:text-3xl mt-16">
                About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
            </h1>
            <div className="flex flex-col space-y-10 mt-16 xxs:mt-8 items-stretch justify-center md:space-x-15 sm:space-x-12 md:space-y-0 md:p-8 md:flex-row md:text-left xxs:p-7 sm:px-10">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.4 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 text-left tracking-wide"
                >
                    <h1 className="text-center text-3xl mb-6 md:text-left xxs:text-2xl">
                        Get to know me! 👋
                    </h1>
                    <p className="text-base xxs:text-sm">
                        Hi, my name is Rodrigo! and i'm a{" "}
                        <span className="font-bold">{" highly ambitious, "}</span>
                        <span className="font-bold">{" self-motivated "}</span> and
                        <span className="font-bold">{" driven "}</span> software developer
                        based in Pernambuco, Brazil.
                    </p>
                    <br />
                    <p className="text-base xxs:text-sm">
                        I'm studying Computer Engineering at Uninassau since 2022 and have been
                        working in the field ever since.
                    </p>
                    <br />
                    <p className="text-base xxs:text-sm">
                        I have a wide range of hobbies and passions that keep me busy.
                        From reading, playing games, to traveling, i'm always seeking
                        new experiences and love to keep myself engaged and learning new things.
                    </p>
                    <br />
                    <p className="text-base xxs:text-sm">
                        I believe that you should{" "}
                        <span className="font-bold text-teal-500"> never stop growing </span>{" "}
                        and that's what i strive to do, i have a passion for
                        technology and a desire to always push the limits of what is
                        possible. I'm excited to see where my career takes me and i'm
                        always open to new opportunities. 🙂
                    </p>
                    <img
                        src={about}
                        width={325}
                        height={325}
                        className="pt-10 mx-auto object-cover md:w-[700px] md:h-[600px] lg:w-[780px] lg:h-[680px] sm:w-[500px] sm:h-[400px]"
                    />
                </motion.div>
                <div className='hidden lg:flex'>
                    <hr className="w-1 h-[100%] shadow-sm shadow-teal-900/30 bg-stone-700/30 border-0 rounded"/>
                </div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    transition={{ duration: 1.4 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center md:w-1/2 md:text-left"
                >
                    <div className="flex flex-row justify-center md:justify-start">
                        <h1 className="text-3xl mb-4 xxs:text-2xl">My Skills 🤓</h1>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {skills.map((item, idx) => <CardBase key={idx} idx={idx} item={item}/> )}
                    </div>
                    <div className='flex justify-center mt-8'>
                        <p className='text-md tracking-widest uppercase'>tools</p>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-2">
                        {tools.map((item, idx) => <CardBase key={idx} idx={idx} item={item}/> )}
                    </div>
                    <div className='flex justify-center mt-8'>
                        <p className='text-md tracking-widest uppercase'> learning / to learn</p>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-4">
                        {learning.map((item, idx) => <CardBase key={idx} idx={idx} item={item}/> )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

type CardBaseType = {
    idx: number;
    item: {
        skill: string;
        img: string;
    }
};

export function CardBase({ idx, item: { img, skill } }: CardBaseType) {
    const { theme } = useTheme();

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            key={idx}
        >
            <div className="cards overflow-hidden shadow-md hover:shadow-xl hover:shadow-gray-600 dark:bg-[#000000] dark:text-[#F5F5F5] bg-[#eaeaea] text-[#18181b]">
                <p className='text-xs p-1 mb-2 text-center uppercase tracking-widest' draggable={false}>
                    {skill}
                </p>
                <span className='!bg-inherit h-25 w-25 mx-auto justify-center flex pb-2'>
                    <img 
                        width={50}
                        height={50}
                        src={img}
                        draggable={false}
                        className={`
                            ${(theme === 'dark' && (img.includes("express") || img.includes("next"))) && "invert-color"}
                        `}
                    />
                </span>
            </div>
        </motion.div>
    )
}