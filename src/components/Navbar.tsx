import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

type Props = {}

export default function Navbar({ }: Props) {

    const [navbar, setNavbar] = useState(false);

    return (
        <header className='w-full mx-auto px-8 bg-stone-900 border-b border-stone-600 shadow fixed top-0 sm:px-16 z-50'>
            <div className="justify-between md:flex md:items-center">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <div className="md:py-2 mb:block">
                            <h2 className="main text-2xl tracking-tight">Rodrigo Oliveira</h2>
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
                        <div className="items-start justify-start space-y-6 md:flex md:space-x-6 md:space-y-0 md:justify-center md:items-center">
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

                            <button className="bg-stone-500 p-2.5 px-2.5 rounded-full hover:animate-spin-slow hover:bg-stone-600">
                                <RiSunLine size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}