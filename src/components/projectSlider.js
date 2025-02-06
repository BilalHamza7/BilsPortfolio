import { motion } from "framer-motion"

export default function ProjectSlider({ src }) {
    return (
        <>
            <motion.img
                key={src}
                src={src}
                alt="projects"
                className="w-full h-32 md:h-48 object-fill rounded-lg"
                variants={{
                    enter: { opacity: 1 }, // Fade in
                    exit: { opacity: 0 }, // Fade out
                }}
                initial="exit"
                animate="enter"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }} // Smooth fade
            />
        </>
    )
};
