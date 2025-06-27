"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface Product {
  id: string
  name: string
  price?: number
  originalPrice?: number
  image: string
  badge?: string
  href: string
}

interface ProductSectionProps {
  title: string
  products: Product[]
  viewAllHref?: string
}

export function ProductSection({ title, products, viewAllHref }: ProductSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
      <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <h2 className="text-xl font-bold" style={{ color: "#2E2E2E" }}>
          {title}
        </h2>
        {viewAllHref && (
          <Button variant="ghost" asChild>
            <Link href={viewAllHref} className="flex items-center space-x-1" style={{ color: "#1A73E8" }}>
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <Card className="border-0 shadow-none hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3">
                    <Image
                      src={product.image || "/placeholder.svg?height=120&width=120"}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="mx-auto object-contain group-hover:scale-105 transition-transform"
                    />
                    {product.badge && (
                      <Badge
                        className="absolute top-0 right-0 text-white text-xs"
                        style={{ backgroundColor: "#FF9933" }}
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-sm font-medium mb-2 line-clamp-2" style={{ color: "#2E2E2E" }}>
                    {product.name}
                  </h3>

                  {product.price ? (
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-bold" style={{ color: "#1A73E8" }}>
                          From ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Button size="sm" className="text-white" style={{ backgroundColor: "#FF9933" }}>
                      Grab Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
