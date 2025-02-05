import { useEffect, useState } from "react";
import Profile from "./profile";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

export default function Homepage(params) {
    // function handleMenuClick() {

    //     return (
    //         <>

    //         </>
    //     )
    // };


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
            <div className="grid grid-cols-3 gap-5 bg-[#0D0D0D] p-10">
                <div className="flex flex-col justify-center gap-2 text-white text-center font-gupter col-span-2">
                    <p className="text-4xl">BILAL HAMZA</p>
                    <p className="">&copy; 2025 - All Rights Reserved</p>
                </div>
                <div className="text-gray-400 text-left space-y-3 font-gupter text-xs">
                    <p className="">Profile</p>
                    <p className="">See My Resume</p>
                    <p className="">See This Page in GitHub</p>
                </div>
            </div>
        </>
    )
};
