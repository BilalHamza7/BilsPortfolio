import { motion } from "framer-motion"

export default function MilestoneSlider({ src }) {
    return (
        <>
            <motion.img
                key={src}
                src={src}
                alt="milestones"
                className="w-full h-40 sm:h-48 object-cover rounded-lg"
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
