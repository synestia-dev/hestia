/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dun: '#D3C9B2',
      },
      fontFamily: {
        playfairDisplay: "var(--font-playfair-display)",
        poppins: "var(--font-poppins)",
        doppelganger: "var(--font-doppelganger)",
      }
    },
  },
  plugins: [],
};
