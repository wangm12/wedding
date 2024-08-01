import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import MainImg from '/assets/images/home-page/main.png';
import CustomImage from '../../components/custom-image/custom-image';
import { transition } from "../../animation/transition";
import WeddingSchedule from "../../components/wedding-schedule";
import MorphingText from "../../components/morph-text";

export default function HomePage() {
  return (
    <motion.div variants={WrapperVariants} initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}>
      {/* welcome text */}
      <motion.div variants={TopEnterVariants}>
        <MorphingText texts={WelcomeTexts} />
      </motion.div>

      {/* main image */}
      <CustomImage imageSrc={MainImg} imageAlt="Main Background Image" style={{
        display: "block",
        maxWidth: "80vw",
        margin: "auto",
      }} />

      {/* divier */}
      <motion.div variants={DividerVariants} style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "muyao-chinese",
          }}
        >
          婚礼邀请函
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "AmericanHorrorStory",
          }}
        >
          welcome to our wedding
        </Typography>
      </motion.div>

      <WeddingSchedule />


    </motion.div >
  );
}

const WelcomeTexts = [
  "良辰已定，吉日待访",
  "吾有薄酒，以谢良友",
]

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

const DividerVariants = {
  hidden: {
    scale: 0.5,
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