import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function Navbar() {

    const [navbar, setNavbar] = useState(false);

    return (
        <header className='w-full mx-auto px-8 bg-stone-900 border-b border-stone-600 shadow fixed top-0 sm:px-16 z-50'>
            <div className="justify-between md:flex md:items-center">
                <div className={`${navbar && 'xxs:pt-2 sm:pt-2'}`}>
                    <div className="flex items-center justify-between py-3">
                        <div className="md:py-2 mb:block">
                            <h2 className="main text-2xl tracking-tight pb-1 xxs:hidden">Rodrigo Oliveira</h2>
                            <h2 className="main text-2xl tracking-widest pb-1 hidden xxs:flex">R 
                                <span className='text-teal-600 main text-2xl animate-pulse-slow '>O</span>
                            </h2>
                        </div>
                        <div className="md:hidden pt-1">
                            <button onClick={() => setNavbar(!navbar)}>
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <div className="items-start justify-start space-y-5 md:flex md:space-x-6 md:space-y-0 md:justify-center md:items-center">
                            <Link
                                to='#about'
                                className="navbar-button-mobile md:links"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setNavbar(!navbar)}
                            >
                                Home
                            </Link>

                            <hr className='border-gray-600 md:hidden md:w-0'/>

                            <Link
                                to='#about'
                                className="navbar-button-mobile md:links"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setNavbar(!navbar)}>
                                About
                            </Link>

                            <hr className='border-gray-600 md:hidden md:w-0'/>   

                            <Link
                                to='#about'
                                className="navbar-button-mobile md:links"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setNavbar(!navbar)}>
                                Projects
                            </Link>

                            <hr className='border-gray-600 md:hidden md:w-0'/> 

                            <button className={`bg-stone-500 p-2.5 px-2.5 rounded-full hover:animate-spin-slow hover:bg-stone-600 ${!navbar && 'mt-10'}`}>
                                <RiSunLine size={20} />
                            </button>

                            <div className='mt-0 pt-0 md:hidden p-0 m-0'/> 
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}