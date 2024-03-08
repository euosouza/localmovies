export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        brand: "#D6E900",
        "brand-hover": "#ACBB05",
        white: "#FFFFFF"
      },
      fontFamily: {
        inter: ["Inter, sans-serif"]
      },
      screens: {
        xs: "460px",
        sm: "568px",
        lg: "1024px"
      },
      minWidth: {
        md: "600px",
      }
    },
  },
  plugins: [],
};

