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
      <AppBar position={'relative'}>
        <Toolbar className={styles.toolbar}>
          <Navigation />
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
    </>
  );
}
