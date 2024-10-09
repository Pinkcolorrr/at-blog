import { Navigation } from '@features/navigation';
import { ThemeToggle } from '@features/theme-toggle';
import { AppBar, Container, Toolbar } from '@mui/material';
import { ReactNode } from 'react';

import styles from './layout.module.css';

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <AppBar color={'default'} sx={{opacity: '98%'}}>
        <Container>
          <Toolbar className={styles.toolbar}>
            <div>logo</div>
            <div className={styles.headerActions}>
              <Navigation />
              <ThemeToggle />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container sx={{ py: 10 }}>{children}</Container>
      </main>
    </>
  );
}
