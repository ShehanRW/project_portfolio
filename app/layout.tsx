import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Shehan Wijerathna',
    description: '',
};

import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body style={{ backgroundColor: 'black' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

