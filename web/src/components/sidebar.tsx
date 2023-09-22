import { Drawer, Hidden, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

import { useTheme } from '../hooks/useTheme';
import { Menu } from './menu';

interface SidebarProps {
  hiddenSidebarIsVisible: boolean;
  toggleHiddenSidebar: () => void;
  window?: () => Window;
}

export function Sidebar({ hiddenSidebarIsVisible, toggleHiddenSidebar, window }: SidebarProps) {
  const { type } = useTheme();
  const container = window !== undefined ? () => window().document.body : undefined;

  const css = makeStyles((theme: Theme) =>
    createStyles({
      drawerPaper: {
        marginTop: '4%',
        height: '94%',
        width: 300,
        border: 0,
        margin: 5,
        borderRadius: '16px',
        boxShadow: 'none',
        backgroundColor: type === 'dark' ? 'rgba(30, 30, 30, 1)' : 'rgba(0, 160, 145, 1)',
      },
    })
  )();

  return (
    <nav>
      <Hidden xsDown>
        <Drawer
          container={container}
          open={hiddenSidebarIsVisible}
          onClose={toggleHiddenSidebar}
          ModalProps={{ keepMounted: true }}
          classes={{ paper: css.drawerPaper }}
        >
          <Menu />
        </Drawer>
      </Hidden>
    </nav>
  );
}
