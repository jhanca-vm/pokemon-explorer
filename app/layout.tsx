import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Header from './_components/header'
import Modal from './_components/modal'
import './style.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

export const metadata: Metadata = { title: 'Pokémon Explorer' }

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="px-6 bg-light text-dark *:max-w-6xl *:mx-auto md:px-12">
        <Header />
        {children}
        <Modal />
      </body>
    </html>
  )
}
