import { AppBar, Toolbar } from '@mui/material';
import { Navigation } from '@ui/navigation';
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
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>
      <main className={styles.main}>{children}</main>
    </>
  );
}
