import { Container, CssBaseline, Grid, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { ReactNode, useState } from 'react';

import { MARGIN_BOTTOM } from '../constants/marginBottom';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  const css = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        minHeight: '100vh',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      toolbar: theme.mixins.toolbar,
      container: {
        marginBottom: MARGIN_BOTTOM,
      },
    })
  )();

  const [hiddenSidebarIsVisible, setHiddenSidebarIsVisible] = useState(false);

  function toggleHiddenSidebar() {
    setHiddenSidebarIsVisible(!hiddenSidebarIsVisible);
  }

  return (
    <>
      <div className={css.root}>
        <CssBaseline />

        <Navbar toggleHiddenSidebar={toggleHiddenSidebar} />

        <Sidebar
          hiddenSidebarIsVisible={hiddenSidebarIsVisible}
          toggleHiddenSidebar={toggleHiddenSidebar}
        />

        <main className={css.content}>
          <div className={css.toolbar} />
          <Container maxWidth={false}>
            <Grid container className={css.container}>
              <Grid item xl={12} lg={12} md={12}>
                {children}
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
}
