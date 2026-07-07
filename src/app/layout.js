import './globals.css'
import { Inter, Geist_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist-mono'
})

export const metadata = {
  title: 'NaveenTharuka - Backend Architect',
  description: 'Building the invisible infrastructure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} font-body-md text-on-surface bg-surface-container-lowest selection:bg-primary selection:text-surface-container-lowest overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}