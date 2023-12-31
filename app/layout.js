import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { Inter } from 'next/font/google'
import NextAuthSessionProvider from './providers/sessionProvider'
// import { UserProvider } from '@auth0/nextjs-auth0/client';
import ThemeProvider from './theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className} style={{
        background:
          "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",
        height: "100%",


      }}>    <NextAuthSessionProvider>
          <ThemeProvider>

            {children}

          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
