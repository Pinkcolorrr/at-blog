export interface NavLink {
  href: string;
  title: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    title: 'home',
    href: '/home',
  },
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'contacts',
    href: '/contacts',
  },
];
