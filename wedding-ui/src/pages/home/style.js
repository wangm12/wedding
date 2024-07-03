import { transition } from "../../animation/transition";

export const imageVariants = {
  hidden: {
    scale: 1.5,
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

export const textVariants = {
  hidden: {
    opacity: 0,
    y: "80%",
    skewY: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

export const dividerVariants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  show: {
    scaleX: 1,
    originX: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};
