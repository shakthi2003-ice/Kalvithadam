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
        orangeColor: "#FF6320",
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Rochester: ["Rochester"],
        Roboto: ["Roboto"],
      },
      clipPath: {
        custom: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", // Creates a smooth curve
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwind-clip-path"), // Enable clip-path plugin
  ],
} satisfies Config;
