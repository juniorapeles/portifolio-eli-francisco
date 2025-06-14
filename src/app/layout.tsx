import './globals.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Eli Francisco',
  description: 'Eli Francisco is a software engineer...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}