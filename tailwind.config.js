/** @type {import('tailwindcss').Config} */
module.exports = {
  // it will look for any htnl files in the root and it will watch those and complie anything 
  content: ["./*.html"],
  theme: {
    // we want to add break points for media queries
    screens: {
      sm: "480px",
      md: "780px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "hsl(233,12%,96%)",
        veryPaleRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)"
      }
    },
  },
  plugins: [],
}

