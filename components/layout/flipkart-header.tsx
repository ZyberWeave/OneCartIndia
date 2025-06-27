"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Store,
  Package,
  Smartphone,
  Shirt,
  Monitor,
  Home,
  Zap,
  Plane,
  Gift,
  Bike,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { supabase } from "@/lib/supabase"
import { signOut } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

const categories = [
  { name: "Grocery", icon: Package, href: "/categories/grocery" },
  { name: "Mobiles", icon: Smartphone, href: "/categories/mobiles" },
  { name: "Fashion", icon: Shirt, href: "/categories/fashion", hasDropdown: true },
  { name: "Electronics", icon: Monitor, href: "/categories/electronics", hasDropdown: true },
  { name: "Home & Furniture", icon: Home, href: "/categories/home-furniture", hasDropdown: true },
  { name: "Appliances", icon: Zap, href: "/categories/appliances" },
  { name: "Flight Bookings", icon: Plane, href: "/flights" },
  { name: "Beauty, Toys & More", icon: Gift, href: "/categories/beauty-toys", hasDropdown: true },
  { name: "Two Wheelers", icon: Bike, href: "/categories/two-wheelers", hasDropdown: true },
]

export function FlipkartHeader() {
  const [user, setUser] = useState<any>(null)
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      if (user) {
        fetchCartItemsCount(user.id)
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchCartItemsCount(session.user.id)
      } else {
        setCartItemsCount(0)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchCartItemsCount = async (userId: string) => {
    try {
      const { data: cart } = await supabase.from("carts").select("id").eq("user_id", userId).single()

      if (cart) {
        const { data: items } = await supabase.from("cart_items").select("quantity").eq("cart_id", cart.id)
        const totalItems = items?.reduce((sum, item) => sum + item.quantity, 0) || 0
        setCartItemsCount(totalItems)
      }
    } catch (error) {
      console.error("Error fetching cart items:", error)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      toast({
        title: "Success",
        description: "Signed out successfully!",
      })
      router.push("/")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="bg-white border-b" style={{ borderColor: "#E5E7EB" }}>
      {/* Top Header */}
      <div style={{ backgroundColor: "#1A73E8" }} className="text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">ShopEase</div>
              <div className="text-xs">
                Explore <span style={{ color: "#FF9933" }}>Plus</span> ⚡
              </div>
            </Link>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Input
                placeholder="Search for Products, Brands and More"
                className="bg-white text-gray-900 pl-4 pr-12 py-2 rounded-sm border-0"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full px-4 rounded-l-none text-white"
                style={{ backgroundColor: "#FF9933" }}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Login</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wishlist">Wishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <Link href="/auth">Login</Link>
              </Button>
            )}

            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 flex items-center space-x-1 relative"
              asChild
            >
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                {cartItemsCount > 0 && (
                  <Badge
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs text-white"
                    style={{ backgroundColor: "#FF9933" }}
                  >
                    {cartItemsCount}
                  </Badge>
                )}
              </Link>
            </Button>

            <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center space-x-1" asChild>
              <Link href="/seller">
                <Store className="h-4 w-4" />
                <span>Become a Seller</span>
              </Link>
            </Button>

            <Button variant="ghost" className="text-white hover:bg-white/10">
              <span>⋮</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-2 overflow-x-auto">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex flex-col items-center space-y-1 min-w-fit group transition-colors"
                  style={{ color: "#2E2E2E" }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-center">{category.name}</span>
                    {category.hasDropdown && <ChevronDown className="h-3 w-3" />}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
