import { useState, useContext } from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

import { Container } from './styles';
import { ThemeCtx } from '../../context/ThemeContex';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const { theme, setTheme } = useContext(ThemeCtx) as any;

    const handleClickTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    return (
        <Container className='w-full mx-auto px-8 border-b border-stone-600 shadow fixed top-0 sm:px-16 z-50 justify-between md:flex md:items-center'>
            <div>
                <div className="flex items-center justify-between py-3">
                    <div className="md:py-2 mb:block">
                        <h2 className="main text-2xl pb-1 xxs:hidden">Rodrigo <span className='text-teal-400'>Oliveira</span></h2>
                        <h2 className="main text-2xl tracking-tighter pb-1 hidden xxs:flex">R 
                            <span className='text-teal-400 main text-2xl'>O</span>
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
                        <a href='#main' className="navbar-button-mobile md:links" onClick={() => setNavbar(!navbar)}>
                            Home
                        </a>
                        <hr className='border-gray-600 md:hidden md:w-0'/>
                        <a href='#about' className="navbar-button-mobile md:links" onClick={() => setNavbar(!navbar)}>
                            About me
                        </a>
                        <hr className='border-gray-600 md:hidden md:w-0'/>   
                        <a href='#projects' className="navbar-button-mobile md:links" onClick={() => setNavbar(!navbar)}>
                            Projects
                        </a>

                        <hr className='border-gray-600 md:hidden md:w-0'/>

                        <button className={`${!navbar ? 'mt-10' : "flex flex-row"}`}>
                            <p className='my-auto pr-2 uppercase text-sm tracking-widest cursor-default hidden xxs:flex'>Theme</p>
                            {theme === "dark" ? (
                                <RiSunLine 
                                    onClick={() => handleClickTheme("light")}
                                    size={38} 
                                    className='bg-stone-400 p-2.5 px-2.5 rounded-full hover:bg-stone-500 text-gray-100' 
                                />
                            ) : (
                                <RiMoonFill 
                                    onClick={() => handleClickTheme("dark")}
                                    size={40} 
                                    className='bg-stone-400 p-2.5 pl-3 rounded-full hover:bg-stone-500 text-gray-100' 
                                />
                            )}
                        </button>
                        <div className='md:hidden p-0 m-0'/> 
                    </div>
                </div>
            </div>
        </Container>
    )
}