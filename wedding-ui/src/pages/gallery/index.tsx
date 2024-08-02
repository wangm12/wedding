import React from "react";
import { motion } from "framer-motion";
import Parallax from "../../components/parallax";

export default function GalleryPage() {
  return (
    <motion.div variants={WrapperVariants} initial="hidden" whileInView="show" exit="exit" viewport={{ once: true }}>
      <Parallax />
    </motion.div>
  );
}

const WrapperVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.75,
      ease: [0.6, 0.01, 0, 0.95],
    },
  },
  exit: {
    opacity: 0,
  },
}; 