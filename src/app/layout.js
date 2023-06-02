'use client'
import './globals.css'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '@/context/AuthContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContextProvider>
          <Navbar/>
          <div className="bg-white">{children}</div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
