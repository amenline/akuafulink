module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          100: "#667e96",
          200: "#516b87",
          300: "#3b5978",
          400: "#254669",
          500: "#213f5f",
          600: "#1e3854",
          700: "#1a314a",
          800: "#162a3f",
          900: "#132335",
        },
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
