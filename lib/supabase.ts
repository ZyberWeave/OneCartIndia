import { createClient } from "@supabase/supabase-js"

// Prefer browser-safe keys when they exist (client components / CSR),
// but fall back to the server-only variables that the Vercel ⇆ Supabase
// integration injects automatically.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase environment variables are missing. " +
      "Make sure SUPABASE_URL and SUPABASE_ANON_KEY (or the NEXT_PUBLIC_ variants) " +
      "are set in your Vercel project.",
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          role: "customer" | "admin" | "vendor"
          avatar_url: string | null
          wallet_balance: number
          created_at: string
          updated_at: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image_url: string | null
          parent_id: string | null
          is_active: boolean
          sort_order: number
          created_at: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          short_description: string | null
          sku: string | null
          price: number
          compare_price: number | null
          cost_price: number | null
          stock_quantity: number
          low_stock_threshold: number
          weight: number | null
          dimensions: any
          images: string[]
          is_active: boolean
          is_featured: boolean
          meta_title: string | null
          meta_description: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
      }
      carts: {
        Row: {
          id: string
          user_id: string
          created_at: string
          updated_at: string
        }
      }
      cart_items: {
        Row: {
          id: string
          cart_id: string
          product_id: string
          quantity: number
          price: number
          created_at: string
        }
      }
      orders: {
        Row: {
          id: string
          order_number: string
          user_id: string
          status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled"
          subtotal: number
          tax_amount: number
          shipping_amount: number
          discount_amount: number
          total_amount: number
          payment_method: "cod" | "stripe" | "wallet"
          payment_status: "pending" | "completed" | "failed" | "refunded"
          payment_id: string | null
          shipping_address: any
          billing_address: any | null
          notes: string | null
          created_at: string
          updated_at: string
        }
      }
    }
  }
}
