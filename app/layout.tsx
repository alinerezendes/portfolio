import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { inter, montserrat, spaceGrotesk } from "./fonts"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "UX Portfolio",
  description: "A showcase of UX/UI design projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'