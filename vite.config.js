/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define custom colors based on your theme
      colors: {
        'black-primary': '#000000',
        'white-primary': '#FFFFFF',
      },
      // Define a custom Tailwind utility for the glass effect
      // This will let you use a class like 'bg-glass'
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.05)', // Very subtle white for the glass base
      },
      // Define a custom class for the border/separator
      borderColor: {
        'glass-border': 'rgba(255, 255, 255, 0.15)',
      },
      // Define custom utility for subtle shadows
      boxShadow: {
        'glass-sm': '0 1px 2px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
      },
      // Custom text shadow utility (optional, for subtle glow on white text)
      textShadow: {
        'glow': '0 0 5px rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [
    // This plugin allows you to define custom utilities like text-shadow.
    // We are adding it here for the subtle white text glow.
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        },
        // Combine the main glass properties for easy reuse
        '.liquid-glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}