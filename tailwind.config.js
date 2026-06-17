/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F9F6F0",
        ivory: "#FCFBF9",
        linen: "#EBE3D5",
        oat: "#D8CBB6",
        charcoal: "#1A1714",
        ink: "#2C2926",
        olive: "#4A533D",
        moss: "#646F54",
        terracotta: "#A35C3E",
        clay: "#C07B5E",
        gold: "#B89656",
        pewter: "#73716D",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Montserrat", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(32, 32, 29, 0.13)",
        card: "0 18px 44px rgba(53, 43, 32, 0.11)",
        lift: "0 28px 80px rgba(86, 98, 71, 0.18)",
        gold: "0 20px 70px rgba(200, 163, 93, 0.22)",
        insetLine: "inset 0 1px 0 rgba(255, 255, 255, 0.72)",
      },
      backgroundImage: {
        "atelier-warm":
          "radial-gradient(circle at 12% 10%, rgba(214, 154, 114, 0.2), transparent 28%), radial-gradient(circle at 82% 2%, rgba(200, 163, 93, 0.18), transparent 25%), linear-gradient(135deg, #fffdf8 0%, #fff8ed 52%, #f3e8d7 100%)",
        "charcoal-olive":
          "linear-gradient(135deg, #20201d 0%, #34332e 52%, #566247 100%)",
        "paper-grid":
          "linear-gradient(90deg, rgba(86, 98, 71, 0.07) 1px, transparent 1px), linear-gradient(180deg, rgba(86, 98, 71, 0.055) 1px, transparent 1px)",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slowPan: {
          "0%, 100%": { transform: "scale(1) translateX(0)" },
          "50%": { transform: "scale(1.06) translateX(-1.5%)" },
        },
      },
      animation: {
        rise: "riseIn 700ms ease both",
        floatSoft: "floatSoft 6s ease-in-out infinite",
        slowPan: "slowPan 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
