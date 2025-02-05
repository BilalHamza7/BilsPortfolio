export default function NavPanel({ close }) {
    return (
        <>
            <div className="fixed z-50 right-0 top-0 min-h-screen w-72 bg-[#0D0D0D] opacity-95">
                <div className="grid grid-rows-2 p-5 h-screen font-montserrat tracking-wider font-light text-white text-center text-2xl">
                    <div className="place-content-end justify-self-end">
                        <img src="closeIcon.png" alt="close" className="w-12" onClick={close} />
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                        <a href="#top">Profile</a>
                        <a href="#projects">projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
};
