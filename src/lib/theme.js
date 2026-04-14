/**
 * theme.js — Centralized design tokens for the Portfolio app.
 * Import these values in components for programmatic use.
 * The CSS custom properties in globals.css are the source of truth;
 * this file mirrors them for use in JS/JSX logic.
 */

export const colors = {
  // Primary (Burgundy)
  primary: '#570013',
  primaryContainer: '#800020',
  primaryFixed: '#ffdada',
  primaryFixedDim: '#ffb3b5',
  onPrimary: '#ffffff',
  onPrimaryFixed: '#40000b',
  onPrimaryContainer: '#ff828a',
  inversePrimary: '#ffb3b5',

  // Secondary (Blue)
  secondary: '#335e9f',
  secondaryContainer: '#8fb7fe',
  secondaryFixed: '#d6e3ff',
  secondaryFixedDim: '#aac7ff',
  onSecondary: '#ffffff',
  onSecondaryFixed: '#001b3e',
  onSecondaryContainer: '#154686',

  // Tertiary (Teal)
  tertiary: '#002c36',
  tertiaryContainer: '#004451',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#7cb0c0',

  // Surface
  surface: '#fcf9f3',
  surfaceBright: '#fcf9f3',
  surfaceDim: '#dcdad4',
  surfaceVariant: '#e5e2dc',
  surfaceContainer: '#f0eee8',
  surfaceContainerLow: '#f6f3ed',
  surfaceContainerHigh: '#ebe8e2',
  surfaceContainerHighest: '#e5e2dc',
  surfaceContainerLowest: '#ffffff',
  onSurface: '#1c1c18',
  onSurfaceVariant: '#584141',
  inverseSurface: '#31312d',
  inverseOnSurface: '#f3f0ea',

  // Background
  background: '#fcf9f3',
  onBackground: '#1c1c18',

  // Error
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',

  // Outline
  outline: '#8c7071',
  outlineVariant: '#e0bfbf',
};

export const fonts = {
  headline: "'Newsreader', Georgia, serif",
  body: "'Inter', system-ui, sans-serif",
  label: "'Inter', system-ui, sans-serif",
};

export const radius = {
  DEFAULT: '0.125rem',
  lg: '0.25rem',
  xl: '0.5rem',
  full: '0.75rem',
};

export const shadows = {
  paper: '0 20px 80px rgba(88,65,65,0.08)',
  card: '0 4px 24px rgba(88,65,65,0.06)',
};

export default { colors, fonts, radius, shadows };
