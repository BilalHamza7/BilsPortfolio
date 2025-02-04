import { useEffect, useState } from "react";

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
                <div className="mt-16 flex flex-col items-center">
                    <p className="font-montserrat tracking-wider font-light text-white text-center text-[12px]">A full-stack software engineer from Colombo, Sri Lanka. I build performant web applications and thrive on solving complex problems through innovative solutions.</p>
                    <div className="mt-6 grid grid-cols-3 gap-y-2 text-center font-extralight text-white font-montserrat text-xs">
                        <p>Problem Solver</p>
                        <p>Continuos Learner</p>
                        <p>Quick Learner</p>
                        <p>Adaptability</p>
                        <p>Team Player</p>
                        <p>Communicator</p>
                    </div>

                    <button className="font-montserrat text-sm font-light text-white mt-6 border border-white px-10 py-2 rounded-lg">
                        See My Resume
                    </button>

                    <div className="flex gap-8 [&_img]:w-12 mt-6">
                        <img src="linkedinLogo.png" alt="linkedin" />
                        <img src="githubLogo.png" alt="github" />
                        <img src="gmailLogo.png" alt="gmail" />
                    </div>
                </div>

                {/* projects */}
                <div className="mt-6 flex flex-col gap-10 items-center">
                    <p className="font-gupter tracking-wider font-light text-white text-center text-3xl">What I've Built</p>
                    <div className="grid grid-cols-2 gap-5 justify-between font-montserrat">
                        <div className="flex flex-col gap-2">
                            <img src="promptopia1.png" alt="promptopia" className="h-28 object-cover rounded-lg" />
                            <p className="font-montserrat text-xs font-light text-white">An AI-prompt sharing website developed using Next.js and tailwindcss</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src="coc1.png" alt="crafts of ceylon" className="h-28 object-cover rounded-lg" />
                            <p className="font-montserrat text-xs font-light text-white">An E-commerce platform to buy and sell handcrafted Sri Lankan Products</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src="pearlisland1.png" alt="" className="h-28 object-cover rounded-lg" />
                            <p className="font-montserrat text-xs font-light text-white ">A platform to buy all kinds of precious gemstones built using the MERN stack</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p className=" font-montserrat tracking-wider text-white text-center text-[12px]">Want to see more of my projects?</p>
                        <button className="font-montserrat text-sm font-light text-white mt-3 border border-white px-10 py-2 rounded-lg">
                            GitHub Profile
                        </button>
                    </div>


                    <p className=" font-gupter tracking-wider font-light text-white text-center text-3xl">Design Concepts</p>
                    <div className="grid grid-cols-2 gap-5 justify-between font-montserrat">
                        <div className="flex flex-col gap-2">
                            <img src="gemsofceylon1.png" alt="gemsofceylon" className="h-28 object-cover rounded-lg" />
                            <p className="font-montserrat text-xs font-light text-white">A gemstone inventory management system including features to track purchases and sales</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src="flavourist1.png" alt="flavourist1" className="h-28 object-cover rounded-lg" />
                            <p className="font-montserrat text-xs font-light text-white">A recipe sharing website allowing users to share their recipes among the world</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src="mirage1.png" alt="mirage1" className="h-28 object-cover rounded-lg" />
                            <p className="font-montserrat text-xs font-light text-white ">An E-commerce platform to buy gemstones</p>
                        </div>
                    </div>
                </div>

                {/* about */}
                <div className="mt-6 flex flex-col gap-10 items-center">
                    <p className="font-gupter tracking-wider font-light text-white text-center text-3xl">About Me</p>
                    <div className="flex flex-col items-center gap-5 w-full">
                        <img src="headshot.jpg" alt="headshot" className="w-56 rounded-lg" />
                        <div className="grid grid-rows-3 grid-cols-2 gap-3 text-white font-montserrat text-sm font-light">
                            <p><span className="text-gray-300 text-sm">Name:</span><br></br> Bilal Hamza Zuhry</p>
                            <p><span className="text-gray-300 text-sm">Strengths:</span><br></br> Quick Learner, Problem Solver, Attention to Detail...</p>
                            <p><span className="text-gray-300 text-sm">Age:</span><br></br> 21</p>
                            <p><span className="text-gray-300 text-sm">Weakness:</span><br></br> Public Speaking, Perfectionism...</p>
                            <p><span className="text-gray-300 text-sm">From:</span><br></br> Beruwala/Colombo, Sri Lanka</p>
                        </div>
                        <p className="font-montserrat tracking-wider leading-5 font-light text-white text-[12px]">Aspiring Full Stack Developer with a focus on building robust web applications using the MERN stack. Currently pursuing a Software Engineering degree at NIBM Colombo, where I am developing a strong foundation in both front-end and back-end technologies. Through personal projects and coursework, I have gained hands-on experience in creating dynamic user interfaces, implementing RESTful APIs, and managing databases. I am eager to leverage my skills and knowledge to develop scalable and efficient solutions that address real-world challenges.</p>
                    </div>

                    <p className="font-gupter tracking-wider font-light text-white text-center text-3xl">What I Do</p>
                    <div className="flex text-center font-extralight text-white font-montserrat text-xs">
                        <p>Frontend Development</p>
                        <p>Backend Development</p>
                        <p>User Interface Designing</p>
                    </div>

                    <p className="font-gupter tracking-wider font-light text-white text-center text-3xl">What I Use</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 w-full text-center font-extralight text-white font-montserrat text-xs">
                        <div className="flex flex-col gap-2 items-center ">
                            <img src="reactIcon.png" alt="react" className="w-9" />
                            React
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="javascriptIcon.png" alt="JavaScript" className="w-9" />
                            JavaScript
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="nodejsIcon.png" alt="NodeJs" className="w-9" />
                            NodeJs
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="mongodbIcon.png" alt="MongoDB" className="w-9" />
                            MongoDB
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="expressIcon.png" alt="ExpressJs" className="w-9" />
                            ExpressJs
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="htmlIcon.png" alt="HTML" className="w-9" />
                            HTML
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="cssIcon.png" alt="CSS" className="w-9" />
                            CSS
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="tailwindcssIcon.png" alt="TailwindCSS" className="w-9" />
                            TailwindCSS
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="figmaIcon.png" alt="Figma" className="w-9" />
                            Figma
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="githubLogo.png" alt="Git" className="w-9" />
                            Git
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="vscodeIcon.png" alt="VS Code" className="w-9" />
                            VS Code
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="vercelIcon.png" alt="Vercel" className="w-9 -rotate-90" />
                            Vercel
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src="restapiIcon.png" alt="RESTful APIs" className="w-9" />
                            RESTful APIs
                        </div>
                        <p>This list reflects my current expertise, but I’m always excited to explore and adapt to new technologies.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-1 items-center">
                        {/* Row 1 */}
                        <div className="flex flex-col gap-2 text-center font-extralight text-white font-montserrat text-xs">
                            <img src="milestone1.1.jpg" alt="milestone" className="2- rounded-lg" />
                            <div className="">
                                <p className="text-xl">2024 Dec</p>
                                <p className="text-left text-xs">Currently enrolled for the Computer Science Degree program by Coventry University at NIBM Colombo</p>
                            </div>
                        </div>
                        <div className="h-6 bg-gradient-to-l from-slate-700 to-slate-900"></div>
                        <div className="flex flex-col gap-2 text-center font-extralight text-white font-montserrat text-xs">
                            <img src="milestone2.1.jpg" alt="milestone" className="2- rounded-lg" />
                            <div className="">
                                <p className="text-xl">2023 Dec</p>
                                <p className="text-left text-xs">Completed my HND in Software Engineering at NIBM with a broader idea of latest technologies</p>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="h-6 col-span-2 font-gupter text-white text-2xl">Milestones <span className="text-xs">Throughout The Years</span></div>
                        <div className="flex justify-center">
                            <div className="w-6 h-48 bg-gradient-to-t from-slate-700 to-slate-900"></div>
                        </div>
                        {/* Row 3 */}
                        <div className="flex flex-col gap-2 text-center font-extralight text-white font-montserrat text-xs">
                            <img src="milestone4.1.jpg" alt="milestone" className="2- rounded-lg" />
                            <div className="">
                                <p className="text-xl">2021 Apr</p>
                                <p className="text-left text-xs">Introduced to the world of software development by completing a certificate in software engineering at NIBM</p>
                            </div>
                        </div>
                        <div className="h-6 bg-gradient-to-l from-slate-700 to-slate-900"></div>
                        <div className="flex flex-col gap-2 text-center font-extralight text-white font-montserrat text-xs">
                            <img src="milestone3.1.jpg" alt="milestone" className="2- rounded-lg" />
                            <div className="">
                                <p className="text-xl">2022 Aug</p>
                                <p className="text-left text-xs">Graduated my diploma in software engineering with distinction at NIBM, with new friends and lessons</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact */}
                {/* Footer */}
            </div>
        </>
    )
};
