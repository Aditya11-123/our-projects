// ============================================================
// OUR IMPACT — Animation: Fade Left
// ============================================================
import { UI_CONSTANTS } from '../config/constants';

export const fadeLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { 
    duration: UI_CONSTANTS.ANIMATION.DURATION,
    ease: UI_CONSTANTS.ANIMATION.EASE
  }
};
