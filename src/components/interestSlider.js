import { motion } from "framer-motion"

export default function InterestSlider({ src }) {
    return (
        <>
            <motion.img
                key={src}
                src={src}
                alt="interests"
                className="w-56 h-28 md:w-72 md:h-44 rounded-md"
                variants={{
                    enter: { opacity: 1 },
                    exit: { opacity: 0 }, // Slightly scale down on exit
                }}
                initial="exit"
                animate="enter"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }} // Fast and smooth
            />
        </>
    )
};
