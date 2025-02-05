export default function Contact() {
    return (
        <>
            <div className="mt-6 sm:mt-10 flex flex-col gap-5 items-center">
                <p className="font-gupter tracking-wider font-light text-white text-center text-3xl sm:text-5xl">Reach Out</p>
                <p className="font-montserrat tracking-wider font-light text-white text-center text-xs sm:text-lg">To Collaborate, chat or a job opportunity, just send a quick message!</p>
                <p className="font-extralight text-white font-montserrat text-xs sm:text-lg">bilalhamzazuhry@gmail.com</p>
                <p className="font-extralight text-white font-montserrat text-xs sm:text-lg">+94 77 388 8721</p>
                <div className="flex gap-10">
                    <img src="linkedinLogo.png" alt="linkedin" className="w-14 sm:w-16" />
                    <img src="githubLogo.png" alt="github" className="w-14 sm:w-16" />
                    <img src="instagramIcon.png" alt="instagram" className="w-14 sm:w-16" />
                </div>
            </div>
        </>
    )
};
