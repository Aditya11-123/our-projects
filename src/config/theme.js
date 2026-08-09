// ============================================================
// DIGITAL SOLUTIONS — Theme Configuration
// ============================================================

export const theme = {
  colors: {
    background: {
      primary: '#F8FAFC', // Slate 50
      secondary: '#FFFFFF', // White
      navy: '#0A192F', // Deep Navy for dark sections
    },
    card: {
      base: '#FFFFFF',
      hover: '#F1F5F9', // Slate 100
      dark: '#112240',
    },
    border: {
      default: '#E2E8F0', // Slate 200
      hover: '#CBD5E1', // Slate 300
      active: '#2563EB', // Professional Blue
      dark: '#233554',
    },
    text: {
      primary: '#0F172A', // Slate 900
      secondary: '#475569', // Slate 600
      muted: '#94A3B8', // Slate 400
      inverse: '#FFFFFF',
    },
    brand: {
      primary: '#2563EB', // Professional Blue
      primaryHover: '#1D4ED8',
      accent: '#06B6D4', // Bright Cyan
      navy: '#0A192F',
    }
  },
  spacing: {
    sectionPadding: 'py-24',
    sectionMinHeight: 'min-h-[420px]',
  },
  radius: {
    card: 'rounded-2xl',
    button: 'rounded-xl',
    badge: 'rounded-full',
  },
  shadow: {
    card: 'shadow-md',
    cardHover: 'hover:shadow-xl',
  }
};
