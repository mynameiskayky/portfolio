import { Variants } from 'framer-motion';

/**
 * Custom easing curve for smooth animations
 * Based on common Awwwards animations
 */
export const customEase = [0.6, -0.05, 0.01, 0.99] as const;

/**
 * Fade in from bottom animation
 * Use for hero elements, section headers, etc.
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    }
  },
};

/**
 * Fade in from top animation
 */
export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    }
  },
};

/**
 * Fade in from left animation
 */
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    }
  },
};

/**
 * Fade in from right animation
 */
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    }
  },
};

/**
 * Scale in animation
 * Great for cards, images, modals
 */
export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: customEase,
    }
  },
};

/**
 * Stagger container for child animations
 * Use as parent container for staggered animations
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

/**
 * Stagger container with faster timing
 */
export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

/**
 * Reveal from bottom with clip path
 * Good for text reveals
 */
export const revealUp: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: customEase,
    }
  }
};

/**
 * Slide in from bottom (no opacity)
 */
export const slideInUp: Variants = {
  initial: {
    y: 100
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    }
  },
};

/**
 * Slide in from right (no opacity)
 */
export const slideInRight: Variants = {
  initial: {
    x: 100
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    }
  },
};

/**
 * Page transition variants
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: customEase,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: customEase,
    }
  }
};
