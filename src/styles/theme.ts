'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1.15rem',
    },
    h6: {
      fontSize: '1.05rem',
    },
  },
  colorSchemes: {
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#c026d3',
        },
        secondary: {
          main: '#FF1CBED8',
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
    },
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#3b5169',
        },
        secondary: {
          main: '#ea3a72',
        },
      },
    },
  },
});

export default theme;
