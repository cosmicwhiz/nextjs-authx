import '../styles/globals.css'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'


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
    <html lang="en">
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
