import { AuthWidget } from '@auth/ui';
import { Navigation } from '@features/navigation';
import { ThemeToggle } from '@features/theme-toggle';
import { AppBar, Container, Divider, Toolbar } from '@mui/material';
import { HeaderActions } from '@ui/header-actions';
import { ReactNode } from 'react';

import styles from './layout.module.css';

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <AppBar color={'default'} sx={{ opacity: '98%' }}>
        <Container>
          <Toolbar className={styles.toolbar}>
            <div>logo</div>
            <div className={styles.headerActions}>
              <Navigation />
              <HeaderActions>
                <ThemeToggle />
                <Divider sx={{ marginY: 2 }} />
                <AuthWidget />
              </HeaderActions>
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
