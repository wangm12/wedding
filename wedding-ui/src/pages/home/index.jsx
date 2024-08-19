import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import MainImgRight from '/assets/images/home-page/wedding-right.jpg';
import MainImgLeft from '/assets/images/home-page/wedding-left.jpg';
import XiImg from '/assets/images/home-page/xi.png';
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
      <div className="main__image__container">
        <motion.img variants={LeftEngerVariants} src={MainImgLeft} alt="Main Background Left Image" />
        <motion.img variants={RightEngerVariants} src={MainImgRight} alt="Main Background Right Image" />
        <motion.img variants={XiEnterVariants} src={XiImg} alt="Xi" className="xi__image" />
      </div>

      {/* main paragraph */}
      <motion.div variants={MainParagraphVariants} className="main__paragraph__container" style={{ marginTop: "20px", textAlign: "center", }}>
        {/* name */}
        <span className="name__text">
          王鸣捷 & 高菡璐
        </span>
        <span className="english__name__text">
          Mingjie Wang & Hanlu Gao
        </span>
        {/* time */}
        <span className="time__text">
          2024/9/22 17:18
        </span>
        <span className="time__text">
          农历 八月二十
        </span>
        {/* location */}
        <span className="location__text">
          上海衡山路十二号华邑酒店
        </span>
      </motion.div>

      {/* divier */}
      <motion.div variants={DividerVariants} style={{ marginTop: "40px", textAlign: "center", }}>
        <Typography variant="h4" sx={{ fontFamily: "canger" }}>
          婚礼邀请函
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "AmericanHorrorStory", fontWeight: 600 }}>
          welcome to our wedding
        </Typography>
        <div className="welcome__text__container">
          <img src={quotationImg} alt="Dinner" className="quotation__icon quotation__icon__1" />
          <Typography variant="subtitle1" sx={{ fontFamily: "canger" }}>
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
        <Typography variant="h4" sx={{ fontFamily: "canger" }}>
          婚礼流程
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "AmericanHorrorStory", fontWeight: 600 }}>
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
  "良辰已定 吉日待访",
  "吾有薄酒 以谢良友",
  "Welcome to our wedding",
  "Grateful for your presence",
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

const LeftEngerVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, 0.01, 0, 0.95],
    }
  },
  exit: {
    x: "-150%",
  },
};

const RightEngerVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, 0.01, 0, 0.95],
    }
  },
  exit: {
    x: "150%",
  },
};

const XiEnterVariants = {
  hidden: {
    scale: 0.2,
    opacity: 0,
    x: "-50%",
    y: "-50%",
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, 0.01, 0, 0.95],
    }
  },
  exit: {
    scale: 0.2,
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