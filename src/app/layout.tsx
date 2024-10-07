import '@theme/index.css';

import { Box } from '@mui/material';
import { geistMono, geistSans } from '@theme/fonts';
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
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Box
            sx={{
              height: '100%',
              bgcolor: 'background.default',
            }}
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
