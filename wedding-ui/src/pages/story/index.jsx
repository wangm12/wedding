import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function StoryPage() {
    return (
        <motion.div variants={WrapperVariants} initial="hidden" whileInView="show" exit="exit" viewport={{ once: true }}>

            {/* title */}
            <motion.div variants={TopEnterVariants} style={{ marginTop: "40px", textAlign: "center", }}>
                <Typography variant="h4" sx={{ fontFamily: "muyao-chinese" }}>
                    我们的故事
                </Typography>
                <Typography variant="h4" sx={{ fontFamily: "AmericanHorrorStory" }}>
                    OUR STORY
                </Typography>
            </motion.div>

            {/*  */}
        </motion.div>
    );
}

const WrapperVariants = {
    hidden: {
        opacity: 0,
        overflow: "hidden",
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
    exit: {
        overflow: "visible",
        transition: {
            when: "afterChildren",
        },
    },
};

const TopEnterVariants = {
    hidden: {
        y: "-100%",
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: [0.6, 0.01, 0, 0.95],
        }
    },
    exit: {
        y: "-150%",
    },
};