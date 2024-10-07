'use client';
import { NAV_LINKS } from './navigation.models';
import styles from './navigation.module.css';
import { NavigationLink } from './navigation-link/navigation-link';

export function Navigation() {
  return (
    <nav>
      <ul className={styles.ul}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavigationLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
