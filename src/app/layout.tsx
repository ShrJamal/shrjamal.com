import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'lib/clsx'

import '~/global.css'
import Script from 'next/script'

type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <Script
          data-website-id="b59b48d7-8a5e-44ce-9fc5-d3966fb0dbff"
          src="https://analytics.shrjamal.com/umami.js"
        ></Script>
      </head>
      <body className={clsx('h-screen flex text-primary-content')}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'ShrJamal',
  description: 'Jamal Asahraoui Personal portfolio',
  openGraph: {
    title: 'ShrJamal',
    description: 'Jamal Asahraoui Personal portfolio',
    type: 'website',
    url: 'https://shrjamal.com/',
  },
  twitter: {
    title: '@shrjamal',
    card: 'summary_large_image',
    site: 'https://shrjamal.com/',
    creator: '@shrjamal',
    description: 'Jamal Asahraoui Personal portfolio',
  },
}
