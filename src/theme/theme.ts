'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-geist-sans)',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#c026d3',
    },
    secondary: {
      main: 'rgba(255,28,190,0.85)',
    },
    background: {
      default: '#1A0024',
      paper: '#1A0024',
    },
    success: {
      main: '#14b8a6',
    },
    error: {
      main: '#f43f5e',
    },
  },
});

export default theme;
