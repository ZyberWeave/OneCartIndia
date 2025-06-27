import { supabase } from "./supabase"

export const getOrCreateCart = async (userId: string) => {
  // Try to get existing cart
  let { data: cart, error } = await supabase.from("carts").select("id").eq("user_id", userId).single()

  if (error && error.code === "PGRST116") {
    // Cart doesn't exist, create one
    const { data: newCart, error: createError } = await supabase
      .from("carts")
      .insert({ user_id: userId })
      .select("id")
      .single()

    if (createError) throw createError
    cart = newCart
  } else if (error) {
    throw error
  }

  return cart
}

export const addToCart = async (userId: string, productId: string, quantity: number, price: number) => {
  const cart = await getOrCreateCart(userId)

  // Check if item already exists in cart
  const { data: existingItem } = await supabase
    .from("cart_items")
    .select("id, quantity")
    .eq("cart_id", cart.id)
    .eq("product_id", productId)
    .single()

  if (existingItem) {
    // Update quantity
    const { error } = await supabase
      .from("cart_items")
      .update({ quantity: existingItem.quantity + quantity })
      .eq("id", existingItem.id)

    if (error) throw error
  } else {
    // Add new item
    const { error } = await supabase.from("cart_items").insert({
      cart_id: cart.id,
      product_id: productId,
      quantity,
      price,
    })

    if (error) throw error
  }
}

export const removeFromCart = async (cartItemId: string) => {
  const { error } = await supabase.from("cart_items").delete().eq("id", cartItemId)

  if (error) throw error
}

export const updateCartItemQuantity = async (cartItemId: string, quantity: number) => {
  const { error } = await supabase.from("cart_items").update({ quantity }).eq("id", cartItemId)

  if (error) throw error
}

export const getCartItems = async (userId: string) => {
  const cart = await getOrCreateCart(userId)

  const { data, error } = await supabase
    .from("cart_items")
    .select(`
      id,
      quantity,
      price,
      products (
        id,
        name,
        slug,
        images,
        stock_quantity
      )
    `)
    .eq("cart_id", cart.id)

  if (error) throw error
  return data
}

export const addToWishlist = async (userId: string, productId: string) => {
  const { error } = await supabase.from("wishlists").insert({
    user_id: userId,
    product_id: productId,
  })

  if (error && error.code !== "23505") {
    // Ignore duplicate key error
    throw error
  }
}

export const removeFromWishlist = async (userId: string, productId: string) => {
  const { error } = await supabase.from("wishlists").delete().eq("user_id", userId).eq("product_id", productId)

  if (error) throw error
}
