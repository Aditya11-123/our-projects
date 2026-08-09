// ============================================================
// OUR IMPACT — Animation: Fade Up
// ============================================================
import { UI_CONSTANTS } from '../config/constants';

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { 
    duration: UI_CONSTANTS.ANIMATION.DURATION,
    ease: UI_CONSTANTS.ANIMATION.EASE
  }
};
