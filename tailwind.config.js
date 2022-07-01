module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xl-2": "1536px"
    },
    maxWidth: {
      "0": "0rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
      "prose": "65ch",
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-xl-2": "1536px"
    },
    fontFamily: {
      "poppins": "poppins, sans-serif",
      "sans-serif": "sans-serif"
    },
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "xl-2": "1.5rem",
      "xl-3": "2rem",
      "xl-4": "2.25rem",
      "xl-5": "3rem",
      "xl-6": "3.75rem",
      "xl-7": "4.5rem",
      "xl-8": "6rem",
      "xl-9": "6.75rem",
      "xl-10": "7.5rem",
      "xl-11": "8.25rem",
      "xl-12": "9rem",
      "xl-13": "9.75rem",
      "xl-14": "10.5rem",
      "xl-15": "11.25rem",
      "xl-16": "12rem"
    },
    fontWeight: {
      "thin": 100,
      "extra-light": 200,
      "light": 300,
      "normal": 400,
      "medium": 500,
      "semi-bold": 600,
      "bold": 700,
      "extra-bold": 800,
      "black": 900
    },
    borderRadius: {
      "none": "0rem",
      "sm": "0.125rem",
      "base": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "xl-2": "1rem",
      "xl-3": "1.5rem",
      "full": "100rem"
    },
    columns: {},
    boxShadow: {},
    dropShadow: {},
    blur: {}
  },
  plugins: []
}
