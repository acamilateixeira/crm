import '@fontsource/asap';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';

import { useTheme } from '../hooks/useTheme';
import { AppRoutes } from './routes/app';

export function App() {
  const { type } = useTheme();

  const theme = createTheme({
    palette: {
      mode: type,
      primary: {
        main: '#00AE9D',
      },
      secondary: {
        main: '#C9D200',
      },
    },
    typography: {
      fontSize: 14,
      fontFamily: 'Asap',
    },
    shape: {
      borderRadius: 16,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Scrollbars
        autoHide
        style={{
          height: '100vh',
        }}
      >
        <AppRoutes />
      </Scrollbars>
    </ThemeProvider>
  );
}
