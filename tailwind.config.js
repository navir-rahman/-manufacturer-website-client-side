module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#DC7038",

        "secondary": "#495154",

        "accent": "#37CDBE",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      }
    },
  },


  plugins: [require("daisyui")],
}
