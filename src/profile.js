export default function Profile() {
    return (
        <>
            <div className="mt-16 sm:mt-24 md:mt-28 lg:mt-36 xl:mt-44 flex flex-col items-center lg:gap-5">
                <p className="font-montserrat tracking-wider font-light text-white text-center text-xs sm:text-base md:px-16">A full-stack software engineer from Colombo, Sri Lanka. I build performant web applications and thrive on solving complex problems through innovative solutions.</p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-extralight text-white font-montserrat text-xs sm:text-sm">
                    <p>Problem Solver</p>
                    <p>Continuos Learner</p>
                    <p>Quick Learner</p>
                    <p>Adaptability</p>
                    <p>Team Player</p>
                    <p>Communicator</p>
                </div>

                <button className="button_style">
                    <a href="https://drive.google.com/file/d/1z8KhfycqcqjgvDsGHYPEu3vSS6iWqTQZ/view?usp=sharing" target="_blank" rel="noreferrer">See My Resume</a>
                </button>

                <div className="flex gap-8 lg:gap-16 [&_img]:w-12 [&_img]:sm:w-16 [&_img]:lg:w-20 mt-6">
                    <a href="https://www.linkedin.com/in/bilalhamza7/" target="_blank" rel="noreferrer" className="hover:scale-95 transition duration-500">
                        <img src="linkedinLogo.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/BilalHamza7?tab=repositories" target="_blank" rel="noreferrer" className="hover:scale-95 transition duration-500">
                        <img src="githubLogo.png" alt="github" />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer" className="hover:scale-95 transition duration-500">
                        <img src="gmailLogo.png" alt="gmail" />
                    </a>
                </div>
            </div>
        </>
    )
};
