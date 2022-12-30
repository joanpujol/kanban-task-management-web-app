"use client"


import { useState } from "react"
import { Theme } from "../styles/theme"
import { Plus_Jakarta_Sans } from "@next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, ] = useState<"light" | "dark">("light")

  return (
    <html>
      <head />
      <body className={plusJakartaSans.className}>
        <Theme theme={theme}>
          {children}
        </Theme>
      </body>
    </html>
  )
}
