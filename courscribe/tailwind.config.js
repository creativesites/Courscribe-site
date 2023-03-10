/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#74787c",
          "200": "#2c2b2d",
          "300": "#282828",
          "400": "#282526",
          "500": "#231f20",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(255, 255, 255, 0.2)",
        },
        darkslategray: {
          "100": "#3f3936",
          "200": "#3f3935",
          "300": "#333332",
          "400": "#2f2e30",
          "500": "rgba(58, 57, 60, 0.5)",
        },
        black: "#000",
        darkgray: {
          "100": "#a8adbb",
          "200": "#a0a0a0",
          "300": "#a09fa0",
          "400": "#989898",
          "500": "#979697",
        },
        coral: { "100": "#f5783a", "200": "#f5753a" },
        silver: { "100": "#c6c6c6", "200": "#c4c4c4" },
        tomato: {
          "100": "#f25838",
          "200": "#f15538",
          "300": "#ef4339",
          "400": "#ef4136",
        },
        lightgray: { "100": "#d0d4df", "200": "#cdcdcd" },
        burlywood: { "100": "#ebb771", "200": "#e9b56f", "300": "#e4b26f" },
        dimgray: {
          "100": "#826c4e",
          "200": "#846847",
          "300": "#796751",
          "400": "#665442",
          "500": "#625242",
          "600": "#5d4f42",
          "700": "#504842",
        },
        peachpuff: { "100": "#e7cba7", "200": "#e5c9a6", "300": "#e5c9a5" },
        moccasin: "#ffdfb5",
        sandybrown: "#fbc275",
        mistyrose: "#fce2e1",
        cornflowerblue: "#51abff",
        tan: "#a7875e",
      },
      fontFamily: { "open-sans": "'Open Sans'", manrope: "Manrope" },
      borderRadius: {
        "10xxs": "1px",
        "9xxs": "3px",
        "8xxs": "3.5px",
        "7xxs": "5px",
        "6xxs": "5.5px",
        "5xxs": "7px",
        "4xxs": "9.5px",
        "3xxs": "10px",
        "2xxs": "14px",
        xxs: "15px",
        small: "18px",
        base: "20px",
        large: "21px",
        xxl: "22px",
        "2xxl": "25.5px",
        "3xxl": "25px",
        "4xxl": "26px",
        "5xxl": "34.5px",
        "6xxl": "37.5px",
        "7xxl": "60px",
        "8xxl": "116.5px",
        "9xxl": "127.5px",
        "10xxl": "177px",
      },
    },
    fontSize: {
      "4xs": "9px",
      "3xs": "10px",
      "2xs": "11px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "17px",
      xl: "18px",
      "2xl": "19px",
      "3xl": "20px",
      "4xl": "24px",
      "5xl": "25px",
      "6xl": "26px",
      "7xl": "32px",
      "8xl": "45px",
      "9xl": "47px",
      "10xl": "60px",
    },
  },
  corePlugins: { preflight: false },
  plugins: [],
}