/**
 * Design Tokens and Constants
 * Centralizes all design-related values for consistency
 */

// COLORS
export const COLORS = {
  // Base
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F9FA',
    accent: '#000000',
  },

  // Text
  text: {
    primary: '#0A0A0A',
    secondary: '#6B7280',
    accent: '#3B82F6',
  },

  // Accent & Gradient
  accent: {
    blue: '#3B82F6',
    purple: '#9333EA',
  },

  // Borders
  border: '#E5E7EB',
} as const;

// SPACING (8px grid system)
export const SPACING = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
  '3xl': '96px',
  '4xl': '128px',
} as const;

// BREAKPOINTS
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// TYPOGRAPHY
export const TYPOGRAPHY = {
  fontFamily: {
    sans: 'var(--font-inter)',
    display: 'var(--font-cabinet)',
    mono: 'var(--font-jetbrains-mono)',
  },

  fontSize: {
    displayLg: 'clamp(3rem, 8vw, 7rem)', // 48-112px
    displayMd: 'clamp(2rem, 5vw, 4rem)', // 32-64px
    displaySm: 'clamp(1.5rem, 3vw, 2.5rem)', // 24-40px
    h1: 'clamp(2rem, 4vw, 3rem)', // 32-48px
    h2: 'clamp(1.5rem, 3vw, 2rem)', // 24-32px
    h3: 'clamp(1.25rem, 2vw, 1.5rem)', // 20-24px
    bodyLg: '1.125rem', // 18px
    body: '1rem', // 16px
    bodySm: '0.875rem', // 14px
  },

  lineHeight: {
    display: '1.1',
    heading: '1.3',
    body: '1.6',
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
  },

  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// CONTAINER
export const CONTAINER = {
  maxWidth: '1440px', // 7xl
  padding: {
    mobile: '24px',
    desktop: '48px',
  },
} as const;

// ANIMATION DURATIONS (in seconds)
export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  },

  easing: {
    default: [0.6, -0.05, 0.01, 0.99],
    smooth: [0.21, 0.45, 0.27, 0.9],
  },
} as const;

// Z-INDEX LAYERS
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  navbar: 30,
  modal: 40,
  tooltip: 50,
} as const;

// SOCIAL LINKS (to be updated with real links)
export const SOCIAL_LINKS = {
  github: 'https://github.com/kayky',
  linkedin: 'https://linkedin.com/in/kayky',
  twitter: 'https://twitter.com/kayky',
  email: 'kayky@email.com',
} as const;

// SITE METADATA
export const SITE = {
  name: 'Kayky Vieira',
  title: 'Kayky Vieira - Tech Lead & Front-end Architect',
  description: 'Tech Lead & Front-end Architect. Lidero times, desenho arquitetura e trago clareza para sistemas que não podem falhar.',
  url: 'https://kaykyvieira.com', // to be updated
  location: 'São Paulo, Brasil',
} as const;
