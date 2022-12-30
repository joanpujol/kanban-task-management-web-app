"use client"


import { Theme } from "../providers/ThemeProvider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}
