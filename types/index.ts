import { Product } from './product';

/
 * Represents a customer in the luxury LRP cosmetics application.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
}

/
 * Represents an order placed by a customer for luxury LRP cosmetics products.
 */
export interface Order {
    orderId: string;
    customerId: string;
    products: Product[];
    orderDate: Date;
    totalPrice: number;
    status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
}

/
 * Represents a review for a luxury LRP cosmetics product.
 */
export interface Review {
    productId: string;
    customerId: string;
    rating: number; // A number between 1 and 5
    comment: string;
    reviewDate: Date;
}

/
 * Represents a product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string; // e.g., "Luxury Lipstick"
    description: string; // e.g., "An exquisite lipstick that adds a touch of luxury."
    price: number; // e.g., 29.99
    category: 'Makeup' | 'Skincare' | 'Fragrance' | 'Accessories';
    imageUrl: string; // URL of the product image
    inStock: boolean; // Indicates if the product is in stock
    rating: number; // Average rating of the product
}

/
 * Represents the shopping cart for a customer in the luxury LRP cosmetics application.
 */
export interface ShoppingCart {
    customerId: string;
    items: CartItem[];
}

/
 * Represents an item in the shopping cart.
 */
export interface CartItem {
    productId: string;
    quantity: number; // Number of items of this product
}

/
 * Represents the response from an API call for luxury LRP cosmetics products.
 */
export interface ApiResponse<T> {
    success: boolean; // Indicates if the API call was successful
    data: T; // Data returned from the API
    message?: string; // Optional message providing additional information
}