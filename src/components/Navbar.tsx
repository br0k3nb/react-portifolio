import { useState } from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

import useTheme from '../hooks/useTheme';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleClickTheme = (theme: string) => {
        const htmlElementHasDarkClass = document.documentElement.classList.contains("dark");
        
        if(theme !== 'dark' && htmlElementHasDarkClass) document.documentElement.classList.remove("dark");
        else document.documentElement.classList.add("dark");

        localStorage.setItem("theme", theme);
        setTheme(theme);
    };
    
    const downloadCv = () => {
      window.open("https://ld90qa.bn.files.1drv.com/y4mMgo1iCRYREfJq34s4akBnWcW3rONaMflLfsH-7WOm_GG91Ifuip0MY-FOhV53spqQrTQcycaSVnA82emn5L7MhSOKGzxMKWH3pcmcNucnf6s1uNKZpJD4jGQ3YVOkUjDDgaYe3evKwAD4wUGBe37RjwYgskEY15GthWf2OPE4Id_DmzWwqsGf6jM8zQuZbTi7g5mf_jw3wfsi0OZ3-rKQQ", '_blank')?.focus();
    }

    return (
        <div 
            className={`
                w-full mx-auto px-8 border-b border-stone-600 shadow fixed top-0 sm:px-16 z-50 justify-between md:flex md:items-center
                ${theme === 'dark' ? "bg-[#000000] text-[#F5F5F5]" : "bg-[#eaeaea] text-[#000000]"}
            `}
        >
            <div>
                <div className="flex items-center justify-between py-3">
                    <div className="md:py-2 mb:block">
                        <h2 className="main text-2xl pb-1 xxs:hidden">
                            Rodrigo {" "}
                            <span className='text-teal-400'>
                                Oliveira
                            </span>
                        </h2>
                        <h2 className="main text-2xl tracking-tighter pb-1 hidden xxs:flex">
                            R <span className='text-teal-400 main text-2xl'>O</span>
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
                        <a 
                            href='#main' 
                            className="navbar-button-mobile md:links" 
                            onClick={() => setNavbar(!navbar)}
                        >
                            Home
                        </a>
                        <hr className='border-gray-600 md:hidden md:w-0'/>
                        <a 
                            href='#about' 
                            className="navbar-button-mobile md:links" 
                            onClick={() => setNavbar(!navbar)}
                        >
                            About me
                        </a>
                        <hr className='border-gray-600 md:hidden md:w-0'/>   
                        <a 
                            href='#projects' 
                            className="navbar-button-mobile md:links" 
                            onClick={() => setNavbar(!navbar)}
                        >
                            Projects
                        </a>
                        <a
                            className="navbar-button-mobile md:links" 
                            onClick={() => downloadCv()}
                        >
                            Download CV
                        </a>
                        <hr className='border-gray-600 md:hidden md:w-0'/>
                        <button className={`${!navbar ? 'mt-10' : "flex flex-row"}`}>
                            <p className='my-auto pr-2 uppercase text-sm tracking-widest cursor-default hidden xxs:flex'>Theme</p>
                            {theme === "dark" ? (
                                <RiSunLine 
                                    onClick={() => handleClickTheme("light")}
                                    size={38} 
                                    className='bg-stone-600 p-2.5 px-2.5 rounded-full hover:bg-stone-700 text-gray-100' 
                                />
                            ) : (
                                <RiMoonFill 
                                    onClick={() => handleClickTheme("dark")}
                                    size={40} 
                                    className='bg-stone-600 p-2.5 pl-3 rounded-full hover:bg-stone-700 text-gray-100' 
                                />
                            )}
                        </button>
                        <div className='md:hidden p-0 m-0'/> 
                    </div>
                </div>
            </div>
        </div>
    )
}