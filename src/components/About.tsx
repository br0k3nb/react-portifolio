import { motion } from 'framer-motion';

import computer from '../assets/about-me.png';

import skills from '../datasets/skills.json';
import tools from '../datasets/tools.json';
import learning from '../datasets/learning.json';

type Props = {}

export default function About({ }: Props) {

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1.2 }}
            className="my-12 mt-5 pb-12 md:pt-16 md:pb-48 md:px-10 lg:px-16"
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
                    <p className="text-lg xxs:text-sm">
                        Hi, my name is Rodrigo! and i'm a{" "}
                        <span className="font-bold">{" highly ambitious, "}</span>
                        <span className="font-bold">{" self-motivated "}</span> and
                        <span className="font-bold">{" driven "}</span> software developer
                        based in Pernambuco, Brazil.
                    </p>
                    <br />
                    <p className="text-lg xxs:text-sm">
                        I'm studying Computer Engineering at Uninassau since 2022 and have been
                        working in the field ever since.
                    </p>
                    <br />
                    <p className="text-lg xxs:text-sm">
                        I have a wide range of hobbies and passions that keep me busy.
                        From reading, playing games, to traveling, i'm always seeking
                        new experiences and love to keep myself engaged and learning new things.
                    </p>
                    <br />
                    <p className="text-lg xxs:text-sm">
                        I believe that you should{" "}
                        <span className="font-bold text-teal-500">
                            never stop growing
                        </span>{" "}
                        and that's what i strive to do, i have a passion for
                        technology and a desire to always push the limits of what is
                        possible. I'm excited to see where my career takes me and i'm
                        always open to new opportunities. 🙂
                    </p>
                    <img
                        src={computer}
                        alt=""
                        width={325}
                        height={325}
                        className="pt-10 mx-auto md:w-[700px] md:h-[600px] object-cover sm:w-[500px] sm:h-[400px]"
                    />
                </motion.div>
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
                        {skills.map((item, idx) => {
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className='cards'
                                    key={idx}
                                >
                                    <p
                                        className='text-white text-xs p-1 mb-2 text-center uppercase tracking-widest'
                                        draggable={false}
                                    >
                                        {item.skill}

                                    </p>
                                    <span
                                        className='h-25 w-25 mx-auto justify-center flex pb-2'
                                    >
                                        <img draggable={false} width={50} height={50} src={item.img} />
                                    </span>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className='flex justify-center mt-8'>
                        <p className='text-gray-500 text-md tracking-widest uppercase'> tools </p>
                    </div>

                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-2">
                        {tools.map((item, idx) => {
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className='cards'
                                    key={idx}
                                >
                                    <p
                                        className="text-white text-xs p-1 mb-2 text-center uppercase tracking-widest"
                                        draggable={false}
                                    >
                                        {item.skill}

                                    </p>
                                    <span
                                        className='h-25 w-25 mx-auto justify-center flex pb-2'
                                    >
                                        <img draggable={false} width={50} height={50} src={item.img} />
                                    </span>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className='flex justify-center mt-8'>
                        <p className='text-gray-500 text-md tracking-widest uppercase'> learning / to learn </p>
                    </div>

                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-4">
                        {learning.map((item, idx) => {
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className='cards'
                                    key={idx}
                                >
                                    <p
                                        className="text-white text-xs p-1 mb-2 text-center uppercase tracking-widest"
                                        draggable={false}
                                    >
                                        {item.skill}

                                    </p>
                                    <span
                                        className='h-25 w-25 mx-auto justify-center flex pb-2'
                                    >
                                        <img draggable={false} width={50} height={50} src={item.img} />
                                    </span>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}