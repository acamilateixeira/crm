import { Scrollbars } from 'react-custom-scrollbars';

import {
  SidebarOptionsCentral,
  SidebarOptionsCooperativas,
  SidebarOptionsCRM,
} from './sidebarOptions';

// import { useAuth } from '../hooks/useAuth';

export function Menu() {
  // const { usuario } = useAuth();

  return (
    <>
      <Scrollbars autoHide>
        <SidebarOptionsCRM />
        {
          // usuario?.contaDominio.includes('2003_00') &&
          <>
            <SidebarOptionsCentral />
            <SidebarOptionsCooperativas />
          </>
        }
      </Scrollbars>
    </>
  );
}
