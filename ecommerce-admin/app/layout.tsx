import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/providers/modal-provider'

import './globals.css'

// Define la fuente de los caracteres.
const inter = Inter({ subsets: ['latin'] })

// Define los metadatos de la pagina.
export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for the ecommerce',
}

// Define el componente funcional RootLayout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Envuelve el contenido de la aplicacion en el provedor ClerkProvider de Clerk (Gestion de usuarios)
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
