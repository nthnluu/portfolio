import socials from '/data/socials.json'
import SocialLinkButton from "./SocialLinkButton";
import {useContext} from "react";
import DarkModeContext from "../../util/dark_mode_context";
import useDarkMode from "../../util/useDarkMode";
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter()
    const [darkMode, toggleDarkMode] = useDarkMode();

    return <div
        className={`w-full ${darkMode ? "bg-gray-900" : "bg-white"} backdrop-filter backdrop-blur-lg bg-opacity-50`}>
        <div className="py-3">
            <div className="mx-auto max-w-4xl flex justify-between items-center px-4">
                <nav className="space-x-4">
                    {router.pathname !== "/" && <Link href="/">
                        <a className="text-black dark:text-white text-lg md:text-xl font-semibold">
                            Nathan Benavides-Luu
                        </a>
                    </Link>}
                </nav>

                <div className="space-x-1.5 flex items-center">
                    {/*Dark mode toggle*/}
                    <button onClick={toggleDarkMode}
                            className="w-9 h-9 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center border dark:bg-transparent dark:border-gray-300 dark:text-white ring-blue-500 focus:ring-2 focus:outline-none">
                        {darkMode ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                          fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                            </svg>}
                        <span className="sr-only">{darkMode ? "Disable dark mode" : "Enable dark mode"}</span>
                    </button>
                    <SocialLinkButton name="github" href={socials.github} fontAwesomeClassname="fab fa-github"/>
                    <SocialLinkButton name="linkedin" href={socials.linkedIn} fontAwesomeClassname="fab fa-linkedin"/>
                    <SocialLinkButton name="instagram" href={socials.instagram}
                                      fontAwesomeClassname="fab fa-instagram"/>
                </div>
            </div>
        </div>
    </div>
}

export default Navbar;