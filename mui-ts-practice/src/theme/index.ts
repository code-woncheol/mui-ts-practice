// src/theme/index.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // 파란색
    },
    secondary: {
      main: '#9c27b0', // 보라색
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // 밝은 파란색
    },
    secondary: {
      main: '#ce93d8', // 밝은 보라색
    },
  },
});
