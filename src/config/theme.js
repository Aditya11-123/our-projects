// ============================================================
// OUR IMPACT — Theme Configuration
// ============================================================

export const theme = {
  colors: {
    background: {
      primary: '#050507',
      secondary: '#09090B',
    },
    card: {
      base: '#0D0D12',
      hover: '#121218',
    },
    border: {
      default: '#1F1F28',
      hover: '#333340',
      active: '#FF2B06', // Primary accent on active
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9CA3AF',
      muted: '#6B7280',
    },
    brand: {
      primary: '#FF2B06', // High-energy Orange/Red
      primaryHover: '#E52605',
    }
  },
  spacing: {
    sectionPadding: 'py-24',
    sectionMinHeight: 'min-h-[420px]',
  },
  radius: {
    card: 'rounded-2xl',
    button: 'rounded-xl',
    badge: 'rounded-md',
  },
  shadow: {
    card: 'shadow-[0_8px_30px_rgba(0,0,0,0.4)]',
    cardHover: 'hover:shadow-[0_8px_30px_rgba(255,43,6,0.15)]',
  }
};
