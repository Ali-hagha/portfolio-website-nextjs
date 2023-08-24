import { Variants } from 'framer-motion';

export const fadeInFromBottomVariant: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      type: 'spring',
      bounce: 0,
      duration: 0.4,
    },
  },
};

export const fadeInFromBottomDelayVariant: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      type: 'spring',
      bounce: 0,
      duration: 0.8,
    },
  },
};

export const fadeAnimationVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
