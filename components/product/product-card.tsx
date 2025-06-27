"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import type { Database } from "@/lib/supabase"
import { useState } from "react"
import { addToCart, addToWishlist } from "@/lib/cart"
import { toast } from "@/hooks/use-toast"

type Product = Database["public"]["Tables"]["products"]["Row"]

interface ProductCardProps {
  product: Product
  userId?: string
}

export function ProductCard({ product, userId }: ProductCardProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  const discountPercentage = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0

  const handleAddToCart = async () => {
    if (!userId) {
      toast({
        title: "Please sign in",
        description: "You need to sign in to add items to cart",
        variant: "destructive",
      })
      return
    }

    setIsAddingToCart(true)
    try {
      await addToCart(userId, product.id, 1, product.price)
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsAddingToCart(false)
    }
  }

  const handleAddToWishlist = async () => {
    if (!userId) {
      toast({
        title: "Please sign in",
        description: "You need to sign in to add items to wishlist",
        variant: "destructive",
      })
      return
    }

    setIsAddingToWishlist(true)
    try {
      await addToWishlist(userId, product.id)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`,
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsAddingToWishlist(false)
    }
  }

  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images?.[0] || "/placeholder.svg?height=300&width=300"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>

        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-primary text-white">{discountPercentage}% OFF</Badge>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleAddToWishlist}
          disabled={isAddingToWishlist}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary">{product.name}</h3>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-lg text-secondary">₹{product.price.toLocaleString()}</span>
          {product.compare_price && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.compare_price.toLocaleString()}
            </span>
          )}
        </div>

        {product.stock_quantity <= product.low_stock_threshold && (
          <Badge variant="destructive" className="text-xs">
            Low Stock
          </Badge>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white"
          onClick={handleAddToCart}
          disabled={isAddingToCart || product.stock_quantity === 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.stock_quantity === 0 ? "Out of Stock" : isAddingToCart ? "Adding..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
