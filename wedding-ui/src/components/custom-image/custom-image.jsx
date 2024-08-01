import { motion } from "framer-motion";
import { transition } from "../../animation/transition";

const baseImageVariants = {
    hidden: {
        scale: 1.5,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition,
    },
    exit: {
        opacity: 0,
    },
};

export default function CustomImage({
    imageSrc,
    imageAlt,
    imageVariants = baseImageVariants,
    style = {},
}) {
    return (
        <motion.img
            alt={imageAlt}
            src={imageSrc}
            variants={imageVariants}
            style={style}
        />
    )
}