export default function Projects() {
    return (
        <>
            <div className="mt-6 flex flex-col gap-10 items-center">
                <p className="font-gupter tracking-wider font-light text-white text-center text-3xl sm:text-5xl">What I've Built</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-montserrat">
                    <div className="flex flex-col items-center gap-2 w-64 md:w-72">
                        <img src="promptopia1.png" alt="promptopia" className="w-full h-32 md:h-48 object-cover rounded-lg" />
                        <p className="font-montserrat text-xs md:text-sm text-center font-light text-white">An AI-prompt sharing website developed using Next.js and tailwindcss</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-64 md:w-72">
                        <img src="coc1.png" alt="crafts of ceylon" className="w-full h-32 md:h-48 object-cover rounded-lg" />
                        <p className="font-montserrat text-xs md:text-sm text-center font-light text-white">An E-commerce platform to buy and sell handcrafted Sri Lankan Products</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-64 md:w-72">
                        <img src="pearlisland1.png" alt="Pearl Island" className="w-full h-32 md:h-48 object-cover rounded-lg" />
                        <p className="font-montserrat text-xs md:text-sm text-center font-light text-white ">A platform to buy all kinds of precious gemstones built using the MERN stack</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className=" font-montserrat tracking-wider text-white text-center text-sm">Want to see more of my projects?</p>
                    <button className="font-montserrat text-sm font-light text-white mt-3 border border-white px-10 py-2 rounded-lg" onClick={() => window.location.href = "https://github.com/BilalHamza7?tab=repositories"}>
                        GitHub Profile
                    </button>
                </div>

                <p className=" font-gupter tracking-wider font-light text-white text-center text-3xl sm:text-5xl">Design Concepts</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-montserrat">
                    <div className="flex flex-col items-center gap-2 w-64 md:w-72">
                        <img src="gemsofceylon1.png" alt="gemsofceylon" className="w-full h-32 md:h-48 object-cover rounded-lg" />
                        <p className="font-montserrat text-xs md:text-sm text-center font-light text-white">A gemstone inventory management system including features to track purchases and sales</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-64 md:w-72">
                        <img src="flavourist1.png" alt="flavourist1" className="w-full h-32 md:h-48 object-cover rounded-lg" />
                        <p className="font-montserrat text-xs md:text-sm text-center font-light text-white">A recipe sharing website allowing users to share their recipes among the world</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-64 md:w-72">
                        <img src="mirage1.png" alt="mirage1" className="w-full h-32 md:h-48 object-cover rounded-lg" />
                        <p className="font-montserrat text-xs md:text-sm text-center font-light text-white">An E-commerce platform to buy gemstones</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-64 md:w-72">
                        <img src="kidsstore1.png" alt="kidsstore" className="w-full h-32 md:h-48 object-cover rounded-lg" />
                        <p className="font-montserrat text-xs md:text-sm text-center font-light text-white">A platform to explore and buy kids products</p>
                    </div>
                </div>
            </div>
        </>
    )
};
