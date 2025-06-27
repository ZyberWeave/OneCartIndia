"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface DealProduct {
  id: string
  name: string
  discount: string
  image: string
  href: string
  badge?: string
}

interface DealSectionProps {
  title: string
  products: DealProduct[]
  viewAllHref?: string
}

export function DealSection({ title, products, viewAllHref }: DealSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
      <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <h2 className="text-xl font-bold" style={{ color: "#2E2E2E" }}>
          {title}
        </h2>
        {viewAllHref && (
          <Button variant="ghost" asChild>
            <Link href={viewAllHref} className="flex items-center space-x-1" style={{ color: "#1A73E8" }}>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>

      <div className="p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Link key={product.id} href={product.href} className="group">
              <div
                className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <div className="p-4 bg-white">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0 bg-white">
                      <Image
                        src={product.image || "/placeholder.svg?height=120&width=120"}
                        alt={product.name}
                        width={120}
                        height={120}
                        className="object-contain group-hover:scale-105 transition-transform bg-white"
                      />
                      {product.badge && (
                        <Badge
                          className="absolute top-0 right-0 text-white text-xs"
                          style={{ backgroundColor: "#22C55E" }}
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1 bg-white">
                      <h3 className="font-medium mb-2" style={{ color: "#2E2E2E" }}>
                        {product.name}
                      </h3>
                      <p className="font-semibold" style={{ color: "#1A73E8" }}>
                        {product.discount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
