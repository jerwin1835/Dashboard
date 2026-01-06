import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Orbitron } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "Lexar Bypasser",
  description: "Lexar Bypasser - Access your tools in one place",
  icons: {
    icon: [
      {
        url: "",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${orbitron.variable}`}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
