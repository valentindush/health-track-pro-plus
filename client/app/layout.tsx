import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HealthTrack Pro Plus',
  description: 'Track ya health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        {children}

        <footer className='bg-pink-400 p-8 text-white absolute w-screen bottom-0'>

          <p className='text-center'>Copyright &copy; {new Date().getFullYear()} by Dush All right reserved </p>

        </footer>
      </body>
    </html>
  )
}
