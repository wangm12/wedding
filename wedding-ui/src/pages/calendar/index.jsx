import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import CountDown from "../../components/count-down";
import Calendar from "../../components/calendar";
import XiImg from '/assets/images/xi.jpg';
import Map from "../../components/map";

export default function CalendarPage() {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ once: true }}
        >
            {/* title */}
            <motion.div variants={TitleVariants} style={{ marginTop: "40px" }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        fontFamily: "YeZiGongChangTangYingHei-chinese",
                    }}
                >
                    婚礼日期
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        fontFamily: "AmericanHorrorStory",
                    }}
                >
                    wedding date
                </Typography>
            </motion.div>

            {/* divider */}
            <motion.div variants={DividerVariants} style={{ marginTop: "25px", marginBottom: "25px" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    -----
                    <img src={XiImg} alt="xi" style={{ height: "30px" }} />
                    -----
                </div>
            </motion.div>

            {/* date */}
            <motion.div variants={LeftEnterVariants} style={{ marginBottom: "30px" }}>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        fontFamily: "AmericanHorrorStory",
                    }}
                >
                    2024/09/22 17:18
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        fontFamily: "YeZiGongChangTangYingHei-chinese",
                    }}
                >
                    农历：八月二十
                </Typography>

                {/* calendar */}
                <div style={{ marginTop: "25px" }}>
                    <Calendar />
                </div>
            </motion.div>

            {/* countdown */}
            <motion.div variants={BottomUpVariants}>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        fontFamily: "YeZiGongChangTangYingHei-chinese",
                    }}
                >
                    倒计时
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        fontFamily: "AmericanHorrorStory",
                    }}
                >
                    Count Down
                </Typography>

                <CountDown targetDate={SundayTargetDate} />
            </motion.div>

            <div style={{ height: "max(10vh, 150px)" }} />
        </motion.div>
    )
}

const SundayTargetDate = "September 22, 2024 17:18:00";


const TitleVariants = {
    hidden: {
        opacity: 0,
        y: "-100%",
    },
    show: {
        opacity: 1,
        y: 0,
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

const LeftEnterVariants = {
    hidden: {
        opacity: 0,
        x: "-100%",
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: [0.6, 0.01, 0, 0.95],
        },
    },
    exit: {
        opacity: 0,
    },
};

const BottomUpVariants = {
    hidden: {
        opacity: 0,
        y: "100%",
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.6, 0.01, 0, 0.95],
        },
    },
    exit: {
        opacity: 0,
    },
};