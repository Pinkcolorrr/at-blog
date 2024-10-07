import { Header } from '@ui/header';
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
      <Header>
        <div className={styles.headerContent}>
          <div>logo</div>
          <Navigation />
        </div>
      </Header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
