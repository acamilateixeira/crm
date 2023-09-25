import { List, Typography } from '@mui/material';
import { BsBarChartSteps } from 'react-icons/bs';
import { CgListTree } from 'react-icons/cg';
import { FaUnlockAlt } from 'react-icons/fa';
import { FaBuilding, FaBuildingUser, FaUserLock } from 'react-icons/fa6';
import { HiDocumentReport } from 'react-icons/hi';
import { HiFunnel } from 'react-icons/hi2';
import { MdHome } from 'react-icons/md';

import { MenuOptionOneLevel } from './menuOptionOneLevel';

export function SidebarOptionsCRM() {
  return (
    <List>
      <Typography variant='caption' style={{ marginLeft: 20, marginBottom: 5 }}>
        CRM
      </Typography>

      <MenuOptionOneLevel to='/' title='Home' icon={MdHome} />
    </List>
  );
}

export function SidebarOptionsCentral() {
  return (
    <List>
      <Typography
        variant='caption'
        color='textSecondary'
        style={{ marginLeft: 20, marginBottom: 5 }}
      >
        CENTRAL
      </Typography>

      <MenuOptionOneLevel to='/central/cooperativas' title='Cooperativas' icon={FaBuilding} />
      <MenuOptionOneLevel to='/central/permissoes' title='Permissões' icon={FaUserLock} />
      <MenuOptionOneLevel
        to='/central/produtosServicos'
        title='Produtos | Serviços'
        icon={CgListTree}
      />
      <MenuOptionOneLevel to='/central/processos' title='Processos' icon={BsBarChartSteps} />
      <MenuOptionOneLevel to='/central/relatorios' title='Relatórios' icon={HiDocumentReport} />
      <MenuOptionOneLevel to='/central/TiposPermissao' title='Tipos Permissão' icon={FaUnlockAlt} />
    </List>
  );
}

export function SidebarOptionsCooperativas() {
  return (
    <List style={{ marginBottom: 40 }}>
      <Typography
        variant='caption'
        color='textSecondary'
        style={{ marginLeft: 20, marginBottom: 5 }}
      >
        COOPERATIVAS
      </Typography>

      <MenuOptionOneLevel to='/cooperativa' title='Minha Cooperativa' icon={FaBuildingUser} />

      <MenuOptionOneLevel to='/cooperativa/leads' title='Leads' icon={HiFunnel} />
      <MenuOptionOneLevel to='/cooperativa/relatorios' title='Relatórios' icon={HiDocumentReport} />
    </List>
  );
}
