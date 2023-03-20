import {
    AiOutlineGithub,
    AiOutlineYoutube,
    AiOutlineArrowUp,
} from "react-icons/ai";

import { BsMailbox } from "react-icons/bs";

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="mx-auto min-w-6xl bg-stone-900">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-stone-600 border-0" />
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1 text-neutral-100">
                    <p className="hover:text-teal-600 transition-all ease-in-out text-lg tracking-tighter px-5 duration-300 hover:scale-105 hover:-translate-y-0">
                       Rodrigo Oliveira
                    </p>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 px-5 xxs:mt-3">
                    <a href="https://github.com/br0k3nb/">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    {/* <a href="/">
                        <BsMailbox
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a> */}

                    <a href="https://www.linkedin.com/in/rodrigo-oliveira-33935b205/">
                        <img
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* <a href="">
                        <AiOutlineYoutube
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a> */}
                </div>
            </div>
        </footer>
    )
}