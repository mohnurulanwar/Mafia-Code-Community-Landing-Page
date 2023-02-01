/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#201F22",
        "base-300": "#39383A",
        "base-500": "#070609",
        "base-700": "#060507",
        "base-900": "#050406",
        "primary-100": "#FF60D2",
        "primary-300": "#FF71D7",
        "primary-500": "#FF4ECD",
        "primary-700": "#CC3EA4",
        "primary-900": "#B33790",
        "secondary-100": "#3E55B0",
        "secondary-300": "#5368B9",
        "secondary-500": "#2842A7",
        "secondary-700": "#203586",
        "secondary-900": "#1C2E75",
        "tertiary-100": "#34A4D9",
        "tertiary-300": "#4AAEDD",
        "tertiary-500": "#1D9AD5",
        "tertiary-700": "#177BAA",
        "tertiary-900": "#146C95",
        "neutral-100": "#CACACA",
        "neutral-300": "#D0D0D0",
        "neutral-500": "#C4C4C4",
        "neutral-700": "#9D9D9D",
        "neutral-900": "#898989",
        "success-100": "#5AEA94",
        "success-300": "#6DEDA0",
        "success-500": "#48E888",
        "success-700": "#3ABA6D",
        "success-900": "#32A25F",
        "warning-100": "#F3A25A",
        "warning-300": "#F5AD6D",
        "warning-500": "#F29848",
        "warning-700": "#C27A3A",
        "warning-900": "#A96A32",
        "error-100": "#FF6262",
        "error-300": "#FF7474",
        "error-500": "#FF5151",
        "error-700": "#CC4141",
        "error-900": "#B33939",
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {}
    ]
  },

};
