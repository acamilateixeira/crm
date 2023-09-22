import { AppBar, Avatar, Grid, IconButton, Menu, Theme, Toolbar, Tooltip } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { MdDarkMode, MdLogout, MdMenu, MdSunny } from 'react-icons/md';

import { useTheme } from '../hooks/useTheme';
import { MenuOptionOneLevel } from './menuOptionOneLevel';

interface NavbarProps {
  toggleHiddenSidebar: () => void;
}

export function Navbar({ toggleHiddenSidebar }: NavbarProps) {
  const { type, changeTheme } = useTheme();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const css = makeStyles((muiTheme: Theme) =>
    createStyles({
      appBar: {
        backgroundColor: type === 'dark' ? 'rgba(250, 250, 250, 0.05)' : 'rgba(48,48,48,0.05)',
        borderRadius: '0 0 16px 16px',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      },
    })
  )();

  // const { signOut } = useAuth();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color='inherit' position='fixed' className={css.appBar}>
      <Toolbar variant='dense'>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <IconButton onClick={toggleHiddenSidebar}>
              <MdMenu />
            </IconButton>
          </Grid>

          <Grid item>
            <Tooltip placement='bottom' title='Mudar Tema' sx={{ mr: 2 }}>
              <IconButton onClick={changeTheme}>
                {type === 'dark' ? <MdSunny /> : <MdDarkMode />}
              </IconButton>
            </Tooltip>

            <Tooltip title='Abrir Configurações'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Perfil' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuOptionOneLevel to='/perfil' title='Perfil' icon={HiUserCircle} />
              <MenuOptionOneLevel to='/logout' title='Sair' icon={MdLogout} />
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
