export default function Contact() {
    return (
        <>
            <div className="mt-6 sm:mt-10 flex flex-col gap-5 items-center">
                <p className="font-gupter tracking-wider font-light text-white text-center text-3xl sm:text-5xl">Reach Out</p>
                <p className="font-montserrat tracking-wider font-light text-white text-center text-xs sm:text-lg">To Collaborate, chat or a job opportunity, just send a quick message!</p>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel='noreferrer' className="hover:underline font-extralight text-white font-montserrat text-xs sm:text-lg">bilalhamzazuhry@gmail.com</a>
                <a href="https://wa.me/94773888721" target="_blank" rel='noreferrer' className="font-extralight text-white font-montserrat text-xs sm:text-lg hover:underline">+94 77 388 8721</a>
                <div className="flex gap-8 lg:gap-16 [&_img]:w-12 [&_img]:sm:w-16 [&_img]:lg:w-20 mt-6">
                    <a href="https://www.linkedin.com/in/bilalhamza7/" target="_blank" rel="noreferrer" className="hover:scale-95 transition duration-500">
                        <img src="linkedinLogo.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/BilalHamza7?tab=repositories" target="_blank" rel="noreferrer" className="hover:scale-95 transition duration-500">
                        <img src="githubLogo.png" alt="github" />
                    </a>
                    <a href="https://www.instagram.com/bilal_hamza_7/" target="_blank" rel="noreferrer" className="hover:scale-95 transition duration-500">
                        <img src="instagramIcon.png" alt="instagram" />
                    </a>
                </div>
            </div>
        </>
    )
};
