export default function Profile() {
    return (
        <>
            <div className="mt-16 sm:mt-24 md:mt-28 lg:mt-36 xl:mt-44 flex flex-col items-center">
                <p className="font-montserrat tracking-wider font-light text-white text-center text-xs sm:text-base md:px-16">A full-stack software engineer from Colombo, Sri Lanka. I build performant web applications and thrive on solving complex problems through innovative solutions.</p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-extralight text-white font-montserrat text-xs sm:text-sm">
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

                <div className="flex gap-8 [&_img]:w-12 [&_img]:sm:w-16 mt-6">
                    <img src="linkedinLogo.png" alt="linkedin" />
                    <img src="githubLogo.png" alt="github" />
                    <img src="gmailLogo.png" alt="gmail" />
                </div>
            </div>
        </>
    )
};
