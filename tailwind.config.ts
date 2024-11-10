import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "18px": "75px",
        "333px": "333px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headingBrown: "#434343",
        mainBlue: "#0D2A57",
        careerBg: "#F9E5E5",
        yellowCard: "#F5D365",
        redCard: "#EF523C",
        purpleCard: "#ECC2F6",
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Rochester: ["Rochester"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
} satisfies Config;
