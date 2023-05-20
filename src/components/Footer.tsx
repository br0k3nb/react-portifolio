import { AiOutlineGithub } from "react-icons/ai";
// import { BsMailbox } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="min-w-6xl bg-stone-900">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-stone-600 border-0" />
            <div className="py-4 flex flex-col text-neutral-900 justify-center">
                <div className="flex flex-row items-center justify-center space-x-1 text-gray-300">
                    <p className="text-[14px] tracking-widest px-5 uppercase">
                       Rodrigo Oliveira
                    </p>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 px-5 md:px-0 mt-3">
                    <a href="https://github.com/br0k3nb/">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={28}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/rodrigo-oliveira-33935b205/">
                        <img
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            width={28}
                            height={28}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}