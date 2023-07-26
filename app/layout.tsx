import '../styles/globals.css'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
import { Inter, Poppins, Montserrat, Orbitron } from 'next/font/google'


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-orbitron",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'AuthX',
  description: 'App to manage user authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${poppins.variable} ${montserrat.variable}`}>
      <link rel='icon' href='/favicon.ico'/>
      <body>
        <Provider>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
