export default function About() {
    return (
        <>
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
                        <p><span className="text-gray-300 text-sm">Languages:</span><br></br> English,  Sinhalese, Tamil</p>
                    </div>
                    <p className="font-montserrat tracking-wider leading-5 font-light text-white text-[12px]">Aspiring Full Stack Developer with a focus on building robust web applications using the MERN stack. Currently pursuing a Software Engineering degree at NIBM Colombo, where I am developing a strong foundation in both front-end and back-end technologies. Through personal projects and coursework, I have gained hands-on experience in creating dynamic user interfaces, implementing RESTful APIs, and managing databases. I am eager to leverage my skills and knowledge to develop scalable and efficient solutions that address real-world challenges.</p>
                </div>

                <p className="font-gupter tracking-wider font-light text-white text-center text-3xl">What I Do</p>
                <div className="flex text-center font-extralight text-white font-montserrat text-xs">
                    <p>Frontend Development</p>
                    <p>Backend Development</p>
                    <p>User Interface Designing</p>
                </div>

                {/* Tech Stack */}
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

                {/* Milestones */}
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-3 sm:hidden mb-4 font-gupter text-white text-2xl">Milestones <span className="text-xs">Throughout The Years</span></div>

                    {/* Row 1 */}
                    <div className="flex flex-col w-52 sm:w-full gap-2 col-span-3 sm:col-span-1 text-center font-extralight text-white font-montserrat text-xs">
                        <img src="milestone1.1.jpg" alt="milestone" className="w-full h-40 sm:h-48 object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl font-semibold">2024 Dec</p>
                            <p className="">Currently enrolled for the Computer Science Degree program by Coventry University at NIBM Colombo</p>
                        </div>
                    </div>


                    <div className="flex justify-center  col-span-3 sm:col-span-1 sm:w-full">
                        <div className="w-6 h-48 sm:w-full sm:h-6 bg-gradient-to-t sm:bg-gradient-to-l from-slate-700 to-slate-900 rounded-xl"></div>
                    </div>


                    <div className="flex flex-col w-52 sm:w-full gap-2 col-span-3 sm:col-span-1 text-center font-extralight text-white font-montserrat text-xs">
                        <img src="milestone2.1.jpg" alt="milestone" className="w-full h-40 sm:h-48 object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl font-semibold">2023 Dec</p>
                            <p className="">Completed my HND in Software Engineering at NIBM with a broader idea of latest technologies</p>
                        </div>
                    </div>


                    <div className="col-span-2 max-sm:hidden ml-5 font-gupter text-white text-4xl">Milestones <span className="text-xs">Throughout The Years</span></div>

                    <div className="flex justify-center col-span-3 sm:col-span-1 sm:w-full">
                        <div className="w-6 h-48 bg-gradient-to-t from-slate-700 to-slate-900 rounded-xl"></div>
                    </div>


                    <div className="flex flex-col w-52 sm:w-full gap-2 col-span-3 sm:col-span-1 sm:col-start-3 text-center font-extralight text-white font-montserrat text-xs">
                        <img src="milestone3.1.jpg" alt="milestone" className="w-full h-40 sm:h-48 object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl font-semibold">2022 Aug</p>
                            <p className="">Graduated my diploma in software engineering with distinction at NIBM, with new friends and lessons</p>
                        </div>
                    </div>


                    <div className="flex justify-center  col-span-3 sm:col-span-1 sm:col-start-2 sm:row-start-3 sm:w-full">
                        <div className="w-6 h-48 sm:w-full sm:h-6 bg-gradient-to-t sm:bg-gradient-to-l from-slate-700 to-slate-900 rounded-xl"></div>
                    </div>


                    <div className="flex flex-col w-52 sm:w-full gap-2 col-span-3 sm:col-span-1 sm:col-start-1 sm:row-start-3 text-center font-extralight text-white font-montserrat text-xs">
                        <img src="milestone4.1.jpg" alt="milestone" className="w-full h-40 sm:h-48 object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl font-semibold">2021 Apr</p>
                            <p className="">Introduced to the world of software development by completing a certificate in software engineering at NIBM</p>
                        </div>
                    </div>


                    {/* <div className="flex flex-col gap-2 text-left font-extralight text-white font-montserrat text-xs">
                        <img src="milestone1.1.jpg" alt="milestone" className="w-full h-40 sm:object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl">2024 Dec</p>
                            <p className="">Currently enrolled for the Computer Science Degree program by Coventry University at NIBM Colombo</p>
                        </div>
                    </div>
                    <div className="h-6 bg-gradient-to-l from-slate-700 to-slate-900 rounded-xl"></div>
                    <div className="flex flex-col gap-2 text-left font-extralight text-white font-montserrat text-xs">
                        <img src="milestone2.1.jpg" alt="milestone" className="w-full h-40 sm:object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl">2023 Dec</p>
                            <p className="">Completed my HND in Software Engineering at NIBM with a broader idea of latest technologies</p>
                        </div>
                    </div> */}
                    {/* Row 2 */}
                    {/* <div className="h-6 col-span-2 font-gupter text-white text-2xl">Milestones <span className="text-xs">Throughout The Years</span></div>
                    <div className="flex justify-center">
                        <div className="w-6 h-48 bg-gradient-to-t from-slate-500 to-slate-700 rounded-xl"></div>
                    </div> */}
                    {/* Row 3 */}
                    {/* <div className="flex flex-col gap-2 text-left font-extralight text-white font-montserrat text-xs">
                        <img src="milestone4.1.jpg" alt="milestone" className="w-full h-40 sm:object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl">2021 Apr</p>
                            <p className="">Introduced to the world of software development by completing a certificate in software engineering at NIBM</p>
                        </div>
                    </div>
                    <div className="h-6 bg-gradient-to-r from-slate-100 to-slate-500 rounded-xl"></div>
                    <div className="flex flex-col gap-2 font-extralight text-white font-montserrat text-xs text-left">
                        <img src="milestone3.1.jpg" alt="milestone" className="w-full h-40 sm:object-cover rounded-lg" />
                        <div className="">
                            <p className="text-xl">2022 Aug</p>
                            <p className="">Graduated my diploma in software engineering with distinction at NIBM, with new friends and lessons</p>
                        </div>
                    </div> */}
                </div>

                {/* Interests */}
                <p className="font-gupter tracking-wider font-light text-white text-center text-3xl sm:text-5xl">What I Like</p>
                <div className="flex justify-between gap-5 sm:gap-10">
                    <div className="flex flex-col gap-2 text-center font-extralight text-white font-montserrat text-xs sm:text-lg md:text-xl">
                        <img src="football1.jpg" alt="football" className="w-28 sm:w-48 md:w-72 rounded-md" />
                        <p>Football</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center font-extralight text-white font-montserrat text-xs sm:text-lg md:text-xl">
                        <img src="touchTyping1.jpg" alt="football" className="w-28 sm:w-48 md:w-72 rounded-md" />
                        <p>Touch Typing</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center font-extralight text-white font-montserrat text-xs sm:text-lg md:text-xl">
                        <img src="gaming1.jpg" alt="football" className="w-28 sm:w-48 md:w-72 rounded-md" />
                        <p>Gaming</p>
                    </div>
                </div>
            </div>
        </>
    )
};
