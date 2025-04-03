export const slideInLeft = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: delay,
      ease: "easeOut",
    },
  },
});