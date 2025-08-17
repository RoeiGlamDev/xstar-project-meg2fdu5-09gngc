import { formatCurrency } from './formatters';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * @interface Product
 * Represents a cosmetic product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * @typedef {Object} CartItem
 * @property {Product} product - The cosmetic product in the cart.
 * @property {number} quantity - The quantity of the product in the cart.
 */

/
 * @function cn
 * A utility function to concatenate class names conditionally.
 * @param {...string} classes - Class names to join.
 * @returns {string} - A single string containing all class names.
 */
export function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

/
 * Formats a product price for display on the luxury LRP cosmetics website.
 * @param {number} price - The price of the product.
 * @returns {string} - The formatted price string.
 */
export function formatProductPrice(price: number): string {
    return formatCurrency(price, 'USD');
}

/
 * Generates product details for luxury LRP cosmetics.
 * @param {string} id - The unique identifier for the product.
 * @param {string} name - The name of the product.
 * @param {string} description - A detailed description of the product.
 * @param {number} price - The price of the product.
 * @param {string} category - The category of the product (e.g., skincare, makeup).
 * @param {string} imageUrl - The URL of the product image.
 * @returns {Product} - An object representing the cosmetic product.
 */
export function createProduct(
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    imageUrl: string
): Product {
    return {
        id,
        name,
        description,
        price,
        category,
        imageUrl,
    };
}

/
 * Formats a product description to enhance its luxury appeal.
 * @param {string} description - The original product description.
 * @returns {string} - The enhanced description highlighting luxury aspects.
 */
export function formatLuxuryDescription(description: string): string {
    return Indulge in the elegance of luxury LRP cosmetics. ${description};
}

/
 * Predefined luxury LRP cosmetics products.
 */
export const products: Product[] = [
    createProduct(
        '1',
        'Silk Touch Foundation',
        'A luxurious foundation that glides on smoothly for a flawless finish.',
        45.00,
        'Makeup',
        'https://example.com/images/silk-touch-foundation.png'
    ),
    createProduct(
        '2',
        'Radiant Glow Serum',
        'Infused with precious oils for a radiant and youthful complexion.',
        60.00,
        'Skincare',
        'https://example.com/images/radiant-glow-serum.png'
    ),
    createProduct(
        '3',
        'Velvet Lipstick',
        'A rich, velvety lipstick that offers intense color and hydration.',
        25.00,
        'Makeup',
        'https://example.com/images/velvet-lipstick.png'
    ),
];