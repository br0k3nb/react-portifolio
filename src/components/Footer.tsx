import {
    AiOutlineGithub,
    AiOutlineYoutube,
} from "react-icons/ai";

import { BsMailbox } from "react-icons/bs";

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="mx-auto min-w-6xl bg-stone-900 px-2">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                    © 2023 Rodrigo Oliveira<a href="#main" className="hover:underline"></a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <a href="/" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a href="/">
                        <BsMailbox
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/rodrigo-oliveira-33935b205/">
                        <img
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="">
                        <AiOutlineYoutube
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}