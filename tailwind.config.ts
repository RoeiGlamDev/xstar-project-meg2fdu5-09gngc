import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFA500', // Light Orange
          DEFAULT: '#FF8C00', // Dark Orange
          dark: '#FF4500', // Red Orange
        },
        white: '#FFFFFF',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'scale-up': 'scaleUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});

/
 * Tailwind CSS configuration file for luxury LRP cosmetics.
 * 
 * This configuration sets up a color palette specifically tailored 
 * for the luxury cosmetics brand, incorporating shades of orange 
 * and white to create a high-end aesthetic. Additionally, it includes 
 * custom animations to enhance user experience, resonating with 
 * the luxury feel of the brand.
 * 
 * The animation effects such as fade-in, fade-out, and scale-up 
 * are designed to create an engaging and elegant interface that 
 * aligns with the luxury LRP cosmetics branding.
 */