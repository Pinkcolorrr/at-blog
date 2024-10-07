'use client';

import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from '@theme/theme';
import { ReactNode } from 'react';

export function Providers({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
