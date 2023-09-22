import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from '../../components/dashboard';
import { Home } from '../../pages/home';

export function AppRoutes() {
  const theme = useTheme();
  const screenSizeIsNotSupported = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  if (screenSizeIsNotSupported) {
    return <Typography>Tamanho de tela não suportado</Typography>;
  }

  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
}
