import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FlipkartHeader } from "@/components/layout/flipkart-header"
import { FlipkartFooter } from "@/components/layout/flipkart-footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopEase - Your Ultimate Shopping Destination",
  description: "Discover amazing products at unbeatable prices with fast shipping and excellent customer service.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlipkartHeader />
        <main>{children}</main>
        <FlipkartFooter />
        <Toaster />
      </body>
    </html>
  )
}
