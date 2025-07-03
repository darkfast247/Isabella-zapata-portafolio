import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Isabella Zapata Portafolio",
  description:
    "Portafolio de diseño de moda de Isabella Zapata Londoño - Colecciones HARU, GDSC, Saranghae, Divinidad Femenina e Insumisión",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/crown-icon.png",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/crown-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/crown-icon.png" type="image/svg+xml" />
        <link rel="shortcut icon" href="/crown-icon.png" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
