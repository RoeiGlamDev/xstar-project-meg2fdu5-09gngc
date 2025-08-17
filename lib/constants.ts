const BRAND_NAME = "luxury LRP cosmetics";
const PRIMARY_COLOR = "#FFA500"; // orange
const SECONDARY_COLOR = "#FFFFFF"; // white

/
 * Constants and configuration for luxury LRP cosmetics application
 * This file contains essential brand constants and configuration settings
 * tailored specifically for the luxury LRP cosmetics brand, ensuring
 * a cohesive and elegant design language throughout the application.
 */

// Define the structure of product information
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    inStock: boolean;
}

// Define the structure of a user review
export interface Review {
    productId: string;
    userId: string;
    rating: number; // Rating out of 5
    comment: string;
    createdAt: Date;
}

// Configuration settings specific to the luxury LRP cosmetics brand
export const CONFIG = {
    brandName: BRAND_NAME,
    colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
    },
    luxuryDesign: {
        use3DEffects: true,
        typography: {
            fontFamily: "'Playfair Display', serif", // Elegant font for luxury feel
            fontSize: '16px',
        },
    },
};

// Sample product data for the luxury LRP cosmetics collection
export const SAMPLE_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Radiant Luxury Foundation",
        description: "Achieve a flawless complexion with our Radiant Luxury Foundation, designed for a natural glow.",
        price: 55.00,
        imageUrl: "/images/radiant-luxury-foundation.jpg",
        category: "Foundation",
        inStock: true,
    },
    {
        id: "2",
        name: "Silk Touch Lipstick",
        description: "Experience the smooth, rich color of our Silk Touch Lipstick that lasts all day.",
        price: 30.00,
        imageUrl: "/images/silk-touch-lipstick.jpg",
        category: "Lipstick",
        inStock: true,
    },
    {
        id: "3",
        name: "Velvet Eye Shadow Palette",
        description: "Unleash your creativity with our Velvet Eye Shadow Palette, featuring luxurious hues.",
        price: 45.00,
        imageUrl: "/images/velvet-eye-shadow-palette.jpg",
        category: "Eyes",
        inStock: true,
    },
];

// Sample reviews for products
export const SAMPLE_REVIEWS: Review[] = [
    {
        productId: "1",
        userId: "user123",
        rating: 5,
        comment: "This foundation is a game changer! It gives such a beautiful glow.",
        createdAt: new Date("2023-09-15"),
    },
    {
        productId: "2",
        userId: "user456",
        rating: 4,
        comment: "I love the color, but I wish it lasted longer.",
        createdAt: new Date("2023-09-16"),
    },
];