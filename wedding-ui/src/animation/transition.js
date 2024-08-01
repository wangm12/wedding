export const transition = {
  duration: 2,
  ease: [0.6, 0.01, 0, 0.95],
};

export const parentVariants = {
  hidden: true,
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
    },
  },
};

export default {
  transition,
  parentVariants,
};
