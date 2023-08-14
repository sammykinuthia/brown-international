import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import MyFooter from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Master brown International Institute',
  description: "We are Kenya's flagship Vocational College. We hope you will be inspired by the many fascinating facets that make MBII a leading global College centered in Africa.At MBII we pride ourselves as being at the forefront of educational innovation and we have implemented a range of initiatives to prepare our students for the future. Come discover our exciting and vibrant campus and find out why #MBIILife is invigorating and fulfilling."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <MyFooter />
        <Analytics />
      </body>
    </html>
  )
}
