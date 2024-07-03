import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { parentVariants } from "../../animation/transition";
import { imageVariants, dividerVariants, textVariants } from "./style";
import TextMask from '../../components/text-mask/index';
import MainBackGroundImg from '/assets/images/main-background.jpg';

export default function HomePage() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
    >
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component={motion.img}
          alt="Main Background Image"
          variants={imageVariants}
          src={MainBackGroundImg}
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100vh",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundImage: ({ palette }) => {
              return `linear-gradient(to bottom, transparent, ${palette.background.default})`;
            },
          }}
        >
          <Container>
            <Typography
              variant="h2"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: {
                  md: 70,
                  xs: 45,
                },
                textShadow: "3px 3px rgba(60, 42, 33, 0.6)",
              }}
            >
              <TextMask variants={textVariants}>test1234</TextMask>
            </Typography>

            <Typography
              variant="h1"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: {
                  md: "10em",
                  xs: "6em",
                },
                textShadow: "5px 5px rgba(60, 42, 33, 0.6)",
              }}
            >
              test2345
            </Typography>

            <Box
              component={motion.div}
              variants={dividerVariants}
              sx={{ borderBottom: 3, borderColor: "divider" }}
            />

            <Typography
              variant="h3"
              component="p"
              sx={{
                mt: 2,
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: {
                  md: "3em",
                  xs: "2em",
                },
                textShadow: "3px 3px rgba(60, 42, 33, 0.6)",
              }}
            >
              test3456
            </Typography>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
}
