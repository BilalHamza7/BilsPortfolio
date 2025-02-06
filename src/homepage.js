import { useEffect, useState } from "react";
import Profile from "./profile";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import NavPanel from "./components/navPanel";

export default function Homepage(params) {

    const [isAtTop, setIsAtTop] = useState(true);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const handlePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Navigation */}
            <div className="flex max-lg:justify-end lg:justify-between items-center px-10 py-8 h-10 bg-[#141414] w-full fixed z-50 top-0 left-0">
                <div className="flex gap-10 max-lg:hidden text-center font-extralight text-white font-montserrat">
                    <a href='#top' className="hover:underline">Profile</a>
                    <a href='#projects' className="hover:underline">Projects</a>
                </div>
                <p className={`absolute left-1/2 transform -translate-x-1/2 pointer-events-none w-full text-center text-white font-gupter transition-all duration-700 ${isAtTop ? 'translate-y-16 text-[56px] sm:translate-y-20 sm:text-[90px] md:translate-y-24 md:text-[110px] lg:translate-y-28 lg:text-[150px] xl:translate-y-32 xl:text-[190px]' : 'text-3xl sm:text-4xl md:text-5xl'}`}>Bilal Hamza</p>
                <div className="flex gap-10 max-lg:hidden text-center font-extralight text-white font-montserrat">
                    <a href='#about' className="hover:underline">About</a>
                    <a href='#contact' className="hover:underline">Contact</a>
                </div>
                <img src="menuIcon.png" alt="menu" className="w-7 lg:hidden" onClick={handlePanel} />
            </div>

            {isPanelOpen && <NavPanel close={handlePanel} />}

            <div className="bg-[#141414] min-h-screen mt-8 p-10">
                {/* profile */}
                <div id="profile" >
                    <Profile />
                </div>

                {/* projects */}
                <div id="projects" >
                    <Projects />
                </div>

                {/* about */}
                <div id="about">
                    <About />
                </div>

                {/* contact */}
                <div id="contact">
                    <Contact />
                </div>
            </div>

            {/* Footer */}
            <div className="flex gap-5 bg-[#0D0D0D] p-10">
                <div className="flex flex-col w-full justify-center gap-3 md:tracking-wider text-white text-center font-gupter col-span-2">
                    <p className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl">BILAL HAMZA</p>
                    <p className="text-xs sm:text-lg md:text-xl lg:text-2xl">&copy; 2025 - All Rights Reserved</p>
                </div>
                <div className="flex flex-col w-fit justify-center text-gray-400 text-left space-y-3 md:space-y-5 font-gupter text-sm sm:text-lg md:text-xl lg:text-2xl">
                    <a className="hover:underline w-fit" href='#top'>Profile</a>
                    <a className="hover:underline w-fit" href='' rel="noreferrer">See My Resume</a>
                    <a className="hover:underline w-fit" href='https://github.com/BilalHamza7/BilsPortfolio' target="_blank" rel="noreferrer">See This Page in GitHub</a>
                </div>
            </div>
        </>
    )
};
