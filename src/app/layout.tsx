import '@styles/index.css';

import InitColorSchemeScript from '@mui/system/InitColorSchemeScript';
import { geistMono, geistSans } from '@styles/fonts';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'AT-Blog',
  description: 'personal blog of React dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <InitColorSchemeScript attribute='class' />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
