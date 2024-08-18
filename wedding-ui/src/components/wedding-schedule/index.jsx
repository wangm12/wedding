import { motion } from "framer-motion";
import scheduleLineImg from "/assets/images/wedding-schedule/schedule_line.svg";
import musicImg from "/assets/images/wedding-schedule/music.svg";
import ringImg from "/assets/images/wedding-schedule/ring.png";
import photoImg from "/assets/images/wedding-schedule/photo.svg";
import dinnerImg from "/assets/images/wedding-schedule/dinner.svg";
import "./index.css";

export default function WeddingSchedule() {
    return (
        <motion.div className="timeline-container">
            <motion.div variants={WrapperVariants} className="line-container">
                <img src={scheduleLineImg} alt="timeline" className="line" />
            </motion.div>
            <motion.div variants={Event1TextVariants} className="event_1">
                <span className="time">15:28</span>
                <br />
                <span className="english-description">Fun Part</span>
                <br />
                <span className="description">户外仪式</span>
            </motion.div>
            <motion.div variants={Event1LogoVariants} className="event_1_img">
                <img src={musicImg} alt="Music" className="icon" />
            </motion.div>

            <motion.div variants={Event2TextVariants} className="event_2">
                <span className="time">16:28</span>
                <br />
                <span className="english-description">Photos & Ice Cream</span>
                <br />
                <span className="description">迎宾</span>
            </motion.div>
            <motion.div variants={Event2LogoVariants} className="event_2_img">
                <img src={photoImg} style={{ marginTop: "10%", width: "70%", maxHeight: "100%" }} alt="Chair" className="icon" />
            </motion.div>

            <motion.div variants={Event3TextVariants} className="event_3">
                <span className="time">17:58</span>
                <br />
                <span className="english-description">Wedding Reception</span>
                <br />
                <span className="description">晚宴</span>
            </motion.div>
            <motion.div variants={Evnet3LogoVariants} className="event_3_img">
                <img src={dinnerImg} alt="Dinner" className="icon" />
            </motion.div>

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
            duration: 1.5,
            ease: [0.6, 0.01, 0, 0.95],
        },
    },
    exit: {
        overflow: "visible",
        transition: {
            when: "afterChildren",
        },
    },
};

const Event1TextVariants = {
    hidden: {
        x: "-200%",
        opacity: 0,
    },
    show: {
        x: "-25%",
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: [0.6, 0.01, 0, 0.95],
        }
    },
    exit: {
        x: "200%",
    },
};
const Event1LogoVariants = {
    hidden: {
        x: "200%",
        opacity: 0,
    },
    show: {
        x: "85%",
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: [0.6, 0.01, 0, 0.95],
        }
    },
    exit: {
        x: "-200%",
    },
};

const Event2TextVariants = {
    hidden: {
        x: "200%",
        opacity: 0,
    },
    show: {
        x: "-20%",
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: [0.6, 0.01, 0, 0.95],
        }
    },
    exit: {
        x: "-200%",
    },
};
const Event2LogoVariants = {
    hidden: {
        x: "-200%",
        opacity: 0,
    },
    show: {
        x: "-110%",
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: [0.6, 0.01, 0, 0.95],
        }
    },
    exit: {
        x: "-200%",
    },
};

const Event3TextVariants = {
    hidden: {
        x: "-200%",
        opacity: 0,
    },
    show: {
        x: "-75%",
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: [0.6, 0.01, 0, 0.95],
        }
    },
    exit: {
        x: "200%",
    },
};
const Evnet3LogoVariants = {
    hidden: {
        x: "200%",
        opacity: 0,
    },
    show: {
        x: "90%",
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: [0.6, 0.01, 0, 0.95],
        }
    },
    exit: {
        x: "200%",
    },
};