import type { Variants } from 'framer-motion';

// --- 1. Hero Section Variants (Staggered Fade-In on Load) ---

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Delay before the first child starts
      staggerChildren: 0.2, // Time gap between each child's animation start
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- 2. Feature Card Variants (Animate on Scroll) ---

export const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};