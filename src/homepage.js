import { useEffect, useState } from "react";
import Profile from "./profile";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

export default function Homepage(params) {

    const [isAtTop, setIsAtTop] = useState(true);

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
            <div className="flex justify-between items-center px-10 py-8 h-10 bg-[#141414] w-full fixed z-50 top-0 left-0">
                <p className={`text-white font-gupter transition-all duration-700 ${isAtTop ? 'translate-x-7 translate-y-16 text-[60px]' : 'text-3xl'}`}>Bilal Hamza</p>
                <img src="menuIcon.png" alt="menu" className="w-7" />
            </div>

            <div className="bg-[#141414] min-h-screen mt-8 p-10">
                {/* profile */}
                <Profile />

                {/* projects */}
                <Projects />

                {/* about */}
                <About />

                {/* contact */}
                <Contact />
            </div>

            {/* Footer */}
            <div className="flex gap-5 bg-[#0D0D0D] p-10">
                <div className="flex flex-col w-full justify-center gap-3 md:tracking-wider text-white text-center font-gupter col-span-2">
                    <p className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl">BILAL HAMZA</p>
                    <p className="text-xs sm:text-lg md:text-xl lg:text-2xl">&copy; 2025 - All Rights Reserved</p>
                </div>
                <div className="flex flex-col w-fit justify-center text-gray-400 text-left space-y-3 md:space-y-5 font-gupter text-sm sm:text-lg md:text-xl lg:text-2xl">
                    <p className="hover:underline w-fit cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Profile</p>
                    <p className="hover:underline w-fit cursor-pointer" onClick={() => window.open('', '_blank')}>See My Resume</p>
                    <p className="hover:underline w-fit cursor-pointer" onClick={() => window.open('https://github.com/BilalHamza7/BilsPortfolio', '_blank')}>See This Page in GitHub</p>
                </div>
            </div>
        </>
    )
};
