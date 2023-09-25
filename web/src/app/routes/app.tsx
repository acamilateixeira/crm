import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from '../../components/dashboard';
import { ProcessosProvider } from '../../contexts/processos';
import { SteppersProvider } from '../../contexts/steppers';
import { Processos } from '../../pages/central/processos';
import { ProcessosNovo } from '../../pages/central/processosNovo';
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
        <SteppersProvider>
          <ProcessosProvider>
            <Routes>
              <Route path='/' element={<Home />} />

              {/* {CENTRAL} */}

              <Route path='/central/processos' element={<Processos />} />
              <Route path='/central/processos/novo' element={<ProcessosNovo />} />
            </Routes>
          </ProcessosProvider>
        </SteppersProvider>
      </Dashboard>
    </BrowserRouter>
  );
}
