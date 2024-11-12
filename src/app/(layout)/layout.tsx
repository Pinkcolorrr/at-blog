import { AuthWidget } from '@auth/ui';
import { Navigation } from '@features/navigation';
import { PostEditLink } from '@features/posts';
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
      <AppBar color={'default'} className={styles.appBar}>
        <Container>
          <Toolbar className={styles.toolbar}>
            <div>logo</div>
            <div className={styles.headerActions}>
              <Navigation />
              <PostEditLink />
              <HeaderActions>
                <ThemeToggle />
                <Divider className={styles.divider} />
                <AuthWidget />
              </HeaderActions>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <main className={styles.main}>
        <Container className={styles.appContainer}>{children}</Container>
      </main>
    </>
  );
}
