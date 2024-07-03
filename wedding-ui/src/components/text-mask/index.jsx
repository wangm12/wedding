import { Box } from "@mui/material";
import { motion } from "framer-motion";

const TextMask = ({ children, ...rest }) => {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        overflow: "hidden",
        padding: "0.2em 0.2em 0.2em 0",
        verticalAlign: "top",
        span: {
          display: "inline-block",
        },
      }}
    >
      <motion.span {...rest}>{children}</motion.span>
    </Box>
  );
};

export default TextMask;
