import type { TypographyOptions } from '@mui/material/styles/createTypography';

const fontFamily = [
  '"Noto Sans JP"',
  '"Hiragino Kaku Gothic ProN"',
  '"Hiragino Sans"',
  'Meiryo',
  'sans-serif',
].join(',');

const headingFamily = [
  '"Cormorant Garamond"',
  '"Noto Serif JP"',
  'Georgia',
  'serif',
].join(',');

export const typography: TypographyOptions = {
  fontFamily,
  h1: {
    fontFamily: headingFamily,
    fontSize: '2.75rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.04em',
  },
  h2: {
    fontFamily: headingFamily,
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.03em',
  },
  h3: {
    fontFamily: headingFamily,
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.02em',
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  h5: {
    fontSize: '1.1rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.9,
    letterSpacing: '0.02em',
  },
  body2: {
    fontSize: '0.9rem',
    lineHeight: 1.8,
    letterSpacing: '0.02em',
  },
  button: {
    fontWeight: 500,
    letterSpacing: '0.08em',
  },
};
