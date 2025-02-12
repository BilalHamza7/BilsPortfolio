import { useEffect, useState } from "react";
import ProjectSlider from "./components/projectSlider"

export default function Projects() {

    const [rowIndex, setRowIndex] = useState(0);

    const projects = [
        ['promptopia1.png', 'promptopia2.png'],
        ['coc1.png', 'coc2.png'],
        ['pearlisland1.png', 'pearlisland2.png'],
        ['gemsofceylon1.png', 'gemsofceylon2.png'],
        ['flavourist1.png', 'flavourist2.png'],
        ['kidsstore1.png', 'kidsstore2.png'],
    ]

    const ProjectImages = ({ src, desc }) => {
        return (
            <>
                <div className="flex flex-col items-center gap-2 w-64 md:w-72 hover:scale-105 transition duration-500" >
                    <ProjectSlider src={src} />
                    <p className="description_text font-light ">{desc}</p>
                </div>
            </>
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setRowIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className=" mt-6 lg:mt-12 flex flex-col gap-10 items-center">
                <p className="title_text">What I've Built</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-montserrat">
                    <a href="https://project-promptopia-bilalhamza7s-projects.vercel.app/" target="_blank" rel="noreferrer" >
                        <ProjectImages src={projects[0][rowIndex]} desc='An AI-prompt sharing website developed using Next.js and tailwindcss' />
                    </a>
                    <a href="https://crafts-of-ceylon.vercel.app/" target="_blank" rel="noreferrer" >
                        <ProjectImages src={projects[1][rowIndex]} desc='An E-commerce platform to buy and sell handcrafted Sri Lankan Products' />
                    </a>
                    <a href="https://pearl-island.vercel.app/" target="_blank" rel="noreferrer" >
                        <ProjectImages src={projects[2][rowIndex]} desc='A platform to buy all kinds of precious gemstones built using the MERN stack' />
                    </a>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="description_text">Want to see more of my projects?</p>
                    <button className="button_style">
                        <a href="https://github.com/BilalHamza7?tab=repositories" target="_blank" rel="noreferrer">
                            GitHub Profile
                        </a>
                    </button>
                </div>

                <p className=" title_text">Design Concepts</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-montserrat">
                    <a href="https://www.figma.com/proto/Fk924sx721kYF91AEqoSfK/GemsOfCeylon?node-id=114-148&t=RXi656d17JOrUElq-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6&hide-ui=1" target="_blank" rel="noreferrer" >
                        <ProjectImages src={projects[3][rowIndex]} desc='A gemstone inventory management system including features to track purchases and sales' />
                    </a>
                    <a href="https://www.figma.com/proto/p4h3LN2KzONpEtWkoZF6HG/Flavourist?node-id=210-389&t=mj2h4L4UW3PACQFa-0&scaling=scale-down-width&content-scaling=fixed&page-id=210%3A388&hide-ui=1" target="_blank" rel="noreferrer" >
                        <ProjectImages src={projects[4][rowIndex]} desc='A recipe sharing website allowing users to share their recipes among the world' />
                    </a>
                    <a href="https://www.figma.com/proto/PtSjjeJkqr70w2ClG0Oaev/KidsStore?node-id=57-697&t=LOp2c4szN9JgGZG9-0&scaling=scale-down-width&content-scaling=fixed&page-id=57%3A554&starting-point-node-id=57%3A772&hide-ui=1" target="_blank" rel="noreferrer" >
                        <ProjectImages src={projects[5][rowIndex]} desc='A platform to explore and buy kids products' />
                    </a>
                </div>
            </div>
        </>
    )
};
