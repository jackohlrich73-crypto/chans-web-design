import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06111f",
        charcoal: "#101720",
        steel: "#182434",
        cyan: "#19d7ff",
        mint: "#39f5a8",
        line: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(25, 215, 255, 0.16)",
        card: "0 20px 55px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(25,215,255,0.16), transparent 30%), radial-gradient(circle at 80% 20%, rgba(57,245,168,0.12), transparent 24%), linear-gradient(135deg, #06111f 0%, #101720 52%, #071724 100%)"
      },
      opacity: {
        6: "0.06",
        7: "0.07",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        18: "0.18",
        22: "0.22",
        24: "0.24",
        32: "0.32",
        34: "0.34",
        35: "0.35",
        38: "0.38",
        42: "0.42",
        45: "0.45",
        48: "0.48",
        55: "0.55",
        58: "0.58",
        62: "0.62",
        65: "0.65",
        66: "0.66",
        72: "0.72",
        74: "0.74",
        76: "0.76",
        78: "0.78",
        82: "0.82",
        96: "0.96"
      }
    }
  },
  plugins: []
};

export default config;
