
import { transition } from "../../animation/transition";

export const parentVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    x: "-50%",
  },
  open: {
    opacity: 1,
    y: 1,
    x: "-50%",
    transition: {
      ...transition,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const iconVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  open: {
    opacity: 1,
    y: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};
