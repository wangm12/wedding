import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import MainImg from '/assets/images/home-page/main.png';
import CustomImage from '../../components/custom-image/custom-image';
import WeddingSchedule from "../../components/wedding-schedule";
import MorphingText from "../../components/morph-text";
import quotationImg from '/assets/images/home-page/quotation.svg';
import "./index.css";

export default function HomePage() {
  return (
    <motion.div variants={WrapperVariants} initial="hidden" whileInView="show" exit="exit" viewport={{ once: true }}>

      {/* welcome text */}
      <motion.div variants={TopEnterVariants} style={{ marginTop: "10px" }}>
        <MorphingText texts={WelcomeTexts} />
      </motion.div>

      {/* main image */}
      <CustomImage imageSrc={MainImg} imageAlt="Main Background Image" style={{
        display: "block",
        maxWidth: "80%",
        margin: "auto",
        borderRadius: "10px",
      }} />

      {/* main paragraph */}
      <motion.div variants={MainParagraphVariants} className="main__paragraph__container" style={{ marginTop: "20px", textAlign: "center", }}>
        {/* name */}
        <Typography variant="h4" sx={{ fontFamily: "muyao-chinese" }}>
          王鸣捷 & 高菡璐
        </Typography>
        {/* time */}
        <Typography variant="h5" sx={{ fontFamily: "muyao-chinese" }}>
          2024/9/22 17:18
          <br />
          农历 八月二十(星期日)
        </Typography>
        {/* location */}
        <Typography variant="h6" sx={{ marginTop: "10px", fontFamily: "muyao-chinese" }}>
          上海衡山路十二号华邑酒店
        </Typography>
      </motion.div>

      {/* divier */}
      <motion.div variants={DividerVariants} style={{ marginTop: "40px", textAlign: "center", }}>
        <Typography variant="h4" sx={{ fontFamily: "muyao-chinese" }}>
          婚礼邀请函
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "AmericanHorrorStory" }}>
          welcome to our wedding
        </Typography>
        <div className="welcome__text__container">
          <img src={quotationImg} alt="Dinner" className="quotation__icon quotation__icon__1" />
          <Typography variant="subtitle1" sx={{ fontFamily: "muyao-chinese" }}>
            当你看到这份邀请函的时候
            <br />
            说明我们的婚礼已经进入了倒计时
            <br />
            期待着与你们相见
            <br />
            一起来见证我们的幸福
          </Typography>
          <img src={quotationImg} alt="Dinner" className="quotation__icon quotation__icon__2" />
        </div>
      </motion.div>

      {/* wedding schedule */}
      <motion.div variants={DividerVariants} style={{ marginTop: "40px", textAlign: "center", }}>
        <Typography variant="h4" sx={{ fontFamily: "muyao-chinese" }}>
          婚礼流程
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "AmericanHorrorStory" }}>
          Timeline
        </Typography>
        <div style={{ marginTop: "15px" }}>
          <WeddingSchedule />
        </div>
      </motion.div>

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

const MainParagraphVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, 0.01, 0, 0.95],
    },
  },
  exit: {
    opacity: 0,
  },
};

const DividerVariants = {
  hidden: {
    opacity: 0,
    y: "200%",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.75,
      ease: [0.6, 0.01, 0, 0.95],
    },
  },
  exit: {
    opacity: 0,
  },
}; 