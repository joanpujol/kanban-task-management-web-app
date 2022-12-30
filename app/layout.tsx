"use client"


import { useState } from "react"
import { Theme } from "../styles/theme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, ] = useState<"light" | "dark">("light")

  return (
    <html>
      <head />
      <body>
        <Theme theme={theme}>
          {children}
        </Theme>
      </body>
    </html>
  )
}
