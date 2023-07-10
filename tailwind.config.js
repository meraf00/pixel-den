/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadein: "fadeIn 500ms ease-in-out",
        fadeout: "fadeIn 500ms ease-in-out reverse",
      },

      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      }),

      colors: {
        "primary-0": "#8095a0",
        "primary-100": "#557181",
        "primary-200": "#2b4e61",
        "primary-300": "#223e4e",
        "primary-400": "#1a2f3a",
        "primary-500": "#111f27",

        "on-primary-0": "#000000",
        "on-primary-100": "#000000",
        "on-primary-200": "#ffffff",
        "on-primary-300": "#ffffff",
        "on-primary-400": "#ffffff",
        "on-primary-500": "#ffffff",

        "secondary-0": "#feb87d",
        "secondary-100": "#fea151",
        "secondary-200": "#fe953c",
        "secondary-300": "#fe8926",
        "secondary-400": "#cb6e1e",
        "secondary-500": "#985217",
        "secondary-600": "#66370f",

        "on-secondary-0": "#000000",
        "on-secondary-100": "#000000",
        "on-secondary-200": "#ffffff",
        "on-secondary-300": "#ffffff",
        "on-secondary-400": "#ffffff",
        "on-secondary-500": "#ffffff",
        "on-secondary-600": "#ffffff",
      },
    },
  },
  plugins: [],
};
