// ============================================================
// OUR IMPACT — Animation: Stagger
// ============================================================
import { UI_CONSTANTS } from '../config/constants';

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
  viewport: { once: true, margin: "-50px" }
};

export const staggerItem = {
  initial: { opacity: 0, y: 15 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: UI_CONSTANTS.ANIMATION.DURATION,
      ease: UI_CONSTANTS.ANIMATION.EASE
    }
  },
  viewport: { once: true }
};
