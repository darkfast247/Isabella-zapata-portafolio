import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Isabella Zapata Portafolio",
  description:
    "Portafolio de diseño de moda de Isabella Zapata Londoño - Colecciones HARU, GDSC, Saranghae, Divinidad Femenina e Insumisión",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
