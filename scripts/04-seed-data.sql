-- Insert sample categories
INSERT INTO categories (name, slug, description, is_active) VALUES
('Electronics', 'electronics', 'Electronic devices and gadgets', true),
('Clothing', 'clothing', 'Fashion and apparel', true),
('Home & Garden', 'home-garden', 'Home improvement and garden supplies', true),
('Books', 'books', 'Books and literature', true),
('Sports', 'sports', 'Sports and fitness equipment', true);

-- Insert sample products
INSERT INTO products (name, slug, description, short_description, sku, price, compare_price, stock_quantity, images, is_active, is_featured) VALUES
('Wireless Bluetooth Headphones', 'wireless-bluetooth-headphones', 'High-quality wireless headphones with noise cancellation and long battery life.', 'Premium wireless headphones', 'WBH-001', 2999.00, 3999.00, 50, '["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"]', true, true),
('Cotton T-Shirt', 'cotton-t-shirt', 'Comfortable 100% cotton t-shirt available in multiple colors.', 'Soft cotton t-shirt', 'CTS-001', 599.00, 799.00, 100, '["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"]', true, false),
('Smart Watch', 'smart-watch', 'Feature-rich smartwatch with health monitoring and GPS.', 'Advanced smartwatch', 'SW-001', 8999.00, 12999.00, 25, '["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"]', true, true),
('Coffee Maker', 'coffee-maker', 'Automatic drip coffee maker with programmable timer.', 'Programmable coffee maker', 'CM-001', 4999.00, 6999.00, 30, '["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"]', true, false),
('Running Shoes', 'running-shoes', 'Lightweight running shoes with excellent cushioning.', 'Professional running shoes', 'RS-001', 3499.00, 4999.00, 75, '["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"]', true, true);

-- Link products to categories
INSERT INTO product_categories (product_id, category_id) 
SELECT p.id, c.id FROM products p, categories c 
WHERE (p.slug = 'wireless-bluetooth-headphones' AND c.slug = 'electronics')
   OR (p.slug = 'cotton-t-shirt' AND c.slug = 'clothing')
   OR (p.slug = 'smart-watch' AND c.slug = 'electronics')
   OR (p.slug = 'coffee-maker' AND c.slug = 'home-garden')
   OR (p.slug = 'running-shoes' AND c.slug = 'sports');

-- Insert sample coupons
INSERT INTO coupons (code, description, discount_type, discount_value, minimum_amount, usage_limit, valid_until, is_active) VALUES
('WELCOME10', '10% off for new customers', 'percentage', 10.00, 1000.00, 100, NOW() + INTERVAL '30 days', true),
('SAVE500', 'Flat ₹500 off on orders above ₹2000', 'fixed', 500.00, 2000.00, 50, NOW() + INTERVAL '15 days', true),
('ELECTRONICS20', '20% off on electronics', 'percentage', 20.00, 1500.00, 25, NOW() + INTERVAL '7 days', true);
