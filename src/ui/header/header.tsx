'use client';
import { ReactNode } from 'react';

import styles from './header.module.css';

export function Header({ children }: { children: ReactNode }) {
  return <header className={styles.header}>{children}</header>;
}
