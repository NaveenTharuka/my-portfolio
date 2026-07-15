// app/layout.js
import './globals.css';
import { Inter, Geist_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist-mono'
});

export const metadata = {
  title: 'SYS_ARCHITECT_v1.0 | Project Management',
  description: 'System architecture project management interface',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Load Google Material Symbols font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Load Space Mono font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
        />
        {/* Load Geist font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-body-md text-on-surface bg-surface-container-lowest selection:bg-primary selection:text-surface-container-lowest overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}