import { Metadata } from 'next'
import clsx from 'lib/clsx'

import '~/global.css'

type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head></head>
      <body className={clsx('h-screen flex text-primary-content')}>
        {children}
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
