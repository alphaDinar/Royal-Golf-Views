import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Royal Golf Views',
  description: 'World-class luxury apartments and flats with quality workmanship with attention to detail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        id="google-tag-head"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-YC7WEMGQXB`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YC7WEMGQXB', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
