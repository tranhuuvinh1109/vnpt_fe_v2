/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#16A34A",
        whiteSmoke40: "#f5f5f514",
        overlay: "rgba(71,85,105, 0.18)",
        overlay80: "rgba(0,0,0, 0.8)",
        overlay60: "rgba(0,0,0, 0.6)",
        borderPrimary: "#2C2B2C",
        elementBgMain: "#F5F7FB",
        elementBgSecondary: "#FFFFFF",
        elementPrimary: "#746FFF",
      },
      fontFamily: {
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      keyframes: {
        reflect: {
          "0%": { left: "-100px" },
          "100%": { left: "calc(100% + 100px)" },
        },
        slideIn: {
          "0%": { width: "0%" },
          "100%": { width: "25px" },
        },
        sheetShow: {
          "0%": { top: "100%", opacity: 0 },
          "100%": { top: "0", opacity: 1 },
        },
        sheetHidden: {
          "0%": { top: "0", opacity: 1 },
          "100%": { top: "100%", opacity: 0 },
        },
        slippy: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(45deg)" },
          "75%": { transform: "rotate(-45deg)" },
          "100%": { transform: "rotate(-0deg)" },
        },
        messageHidden: {
          "0%": {
            flex: 1,
            opacity: 1,
          },
          "100%": {
            width: 0,
            display: "none",
            opacity: 0,
          },
        },
        messageShow: {
          "0%": {
            flex: 0,
            opacity: 0,
          },
          "100%": {
            flex: 1,
            opacity: 1,
          },
        },
        wave: {
          "0%": {
            transform: "scale(1)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1.3)",
            opacity: 0,
          },
        },
        scan: {
          "0%": {
            top: 0,
            boxShadow:
              "0px 4px 4px 0px rgba(0, 203, 142, 0.25), 0px 148px 178px 0px rgba(0, 203, 142, 0.25), 0px 54.022px 64.973px 0px rgba(0, 203, 142, 0.22), 0px 26.227px 31.543px 0px rgba(0, 203, 142, 0.18), 0px 12.857px 15.463px 0px rgba(0, 203, 142, 0.14), 0px 5.084px 6.114px 0px rgba(0, 203, 142, 0.08)",
          },
          "50%": {
            top: "100%",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 203, 142, 0.25), 0px 148px 178px 0px rgba(0, 203, 142, 0.25), 0px 54.022px 64.973px 0px rgba(0, 203, 142, 0.22), 0px 26.227px 31.543px 0px rgba(0, 203, 142, 0.18), 0px 12.857px 15.463px 0px rgba(0, 203, 142, 0.14), 0px 5.084px 6.114px 0px rgba(0, 203, 142, 0.08)",
          },
          "100%": {
            top: 0,
            boxShadow:
              "0px 4px 4px 0px rgba(0, 203, 142, 0.25), 0px 148px 178px 0px rgba(0, 203, 142, 0.25), 0px 54.022px 64.973px 0px rgba(0, 203, 142, 0.22), 0px 26.227px 31.543px 0px rgba(0, 203, 142, 0.18), 0px 12.857px 15.463px 0px rgba(0, 203, 142, 0.14), 0px 5.084px 6.114px 0px rgba(0, 203, 142, 0.08)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-in-out",
        scan: "scan 5s ease-in-out infinite",
        sheetShow: "sheetShow 1s ease-in-out",
        sheetHidden: "sheetHidden 1s ease-in-out",
        slippy: "slippy 3s ease-in-out infinite",
        wave: "wave 1s ease-in-out infinite",
        messageShow: "messageShow 1s ease-in-out",
        messageHidden: "messageHidden 1s ease-in-out",
        reflect: "reflect 1500ms ease-out infinite",
      },
    },
  },
  plugins: [],
};
