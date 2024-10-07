'use client';
import { Button } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavLink } from '../navigation.models';
import styles from './navigation-link.module.css';

export function NavigationLink({ href, title }: NavLink) {
  const path = usePathname();
  const isActive = path.includes(href);

  return (
    <Button
      fullWidth
      variant={'text'}
      className={isActive ? styles.active : ''}
      component={Link}
      href={href}
    >
      {title}
    </Button>
  );
}
