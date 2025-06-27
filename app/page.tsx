import { supabase } from "@/lib/supabase"
import { HeroBanner } from "@/components/home/hero-banner"
import { ProductSection } from "@/components/home/product-section"
import { DealSection } from "@/components/home/deal-sections"

export default async function HomePage() {
  // Fetch featured products
  const { data: featuredProducts } = await supabase
    .from("products")
    .select("*")
    .eq("is_featured", true)
    .eq("is_active", true)
    .limit(6)

  // Mock data for different sections (you can replace with real data)
  const electronicsProducts = [
    {
      id: "1",
      name: "Best Truewireless Headphones",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/headphones",
      badge: "Grab Now",
    },
    {
      id: "2",
      name: "Best Selling Mobile Speakers",
      price: 499,
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/speakers",
    },
    {
      id: "3",
      name: "Fastrack Smartwatches",
      price: 1399,
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/smartwatch",
    },
    {
      id: "4",
      name: "Projector",
      price: 6990,
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/projector",
    },
    {
      id: "5",
      name: "Best of Shavers",
      price: 1649,
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/shavers",
    },
    {
      id: "6",
      name: "Monitors",
      price: 7949,
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/monitors",
    },
  ]

  const beautyToysProducts = [
    {
      id: "1",
      name: "Coffee Powder",
      discount: "Upto 80% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/coffee",
    },
    {
      id: "2",
      name: "Electric Cycle",
      discount: "Up to 40% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/cycle",
    },
    {
      id: "3",
      name: "Top Selling Stationery",
      discount: "From ₹49",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/stationery",
    },
    {
      id: "4",
      name: "Geared Cycles",
      discount: "Up to 70% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/geared-cycles",
    },
    {
      id: "5",
      name: "Remote Control Toys",
      discount: "Up to 80% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/rc-toys",
    },
    {
      id: "6",
      name: "Best of Action Toys",
      discount: "Up to 70% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/action-toys",
    },
  ]

  const sportsHealthcareProducts = [
    {
      id: "1",
      name: "Puzzles & Cubes",
      discount: "From ₹79",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/puzzles",
    },
    {
      id: "2",
      name: "Non-Geared Cycles",
      discount: "Up to 40% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/non-geared-cycles",
    },
    {
      id: "3",
      name: "Dry Fruits",
      discount: "Upto 75% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/dry-fruits",
    },
    {
      id: "4",
      name: "Treadmill, Exercise Bikes",
      discount: "Up to 70% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/exercise-equipment",
    },
    {
      id: "5",
      name: "Food Spreads",
      discount: "Upto 75% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/food-spreads",
    },
    {
      id: "6",
      name: "Honey",
      discount: "Upto 75% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/honey",
    },
  ]

  const fashionDeals = [
    {
      id: "1",
      name: "Men's Casual Shoes",
      discount: "Min. 70% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/mens-shoes",
    },
    {
      id: "2",
      name: "Men's Boxers",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/mens-boxers",
    },
    {
      id: "3",
      name: "Backpacks",
      discount: "Min. 70% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/backpacks",
    },
    {
      id: "4",
      name: "Watches",
      discount: "Top Collection",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/watches",
    },
  ]

  const seasonTopPicks = [
    {
      id: "1",
      name: "Dry Fruit, Nut & Seed",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/dry-fruits-nuts",
    },
    {
      id: "2",
      name: "Women's Sarees",
      discount: "Special offer",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/womens-sarees",
    },
    {
      id: "3",
      name: "Casual Shirts",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/casual-shirts",
    },
    {
      id: "4",
      name: "Fans",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/fans",
    },
  ]

  const homeStylishDeals = [
    {
      id: "1",
      name: "Home Temple",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/home-temple",
    },
    {
      id: "2",
      name: "Mosquito Nets",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/mosquito-nets",
    },
    {
      id: "3",
      name: "Shoe Rack",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/shoe-rack",
    },
    {
      id: "4",
      name: "Collapsible Wardrobes",
      discount: "Min. 50% Off",
      image: "/placeholder.svg?height=120&width=120",
      href: "/products/wardrobes",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Product Sections */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Best of Electronics */}
        <ProductSection
          title="Best of Electronics"
          products={electronicsProducts}
          viewAllHref="/categories/electronics"
        />

        {/* Beauty, Food, Toys & more */}
        <ProductSection
          title="Beauty, Food, Toys & more"
          products={beautyToysProducts}
          viewAllHref="/categories/beauty-toys"
        />

        {/* Sports, Healthcare & more */}
        <ProductSection
          title="Sports, Healthcare & more"
          products={sportsHealthcareProducts}
          viewAllHref="/categories/sports-healthcare"
        />

        {/* Deal Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DealSection title="Hot Deals on Fashion" products={fashionDeals} viewAllHref="/categories/fashion" />

          <DealSection title="Season's Top Picks" products={seasonTopPicks} viewAllHref="/categories/seasonal" />

          <DealSection
            title="Make Your Home Stylish"
            products={homeStylishDeals}
            viewAllHref="/categories/home-decor"
          />
        </div>
      </div>
    </div>
  )
}
