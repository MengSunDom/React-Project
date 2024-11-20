import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
        'rotate-x-180': 'rotateX(180deg)',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
} satisfies Config;
