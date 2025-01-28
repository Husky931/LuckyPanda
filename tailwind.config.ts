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
        primary: {
          one: '#F13E3A',
          two: '#F3B036'
        },
        background: {
          white: '#FFFFFF',
          grey1: '#F9F9F9',
          grey2: '#F5F5F5',
          grey3: '#F1F1F1',
          lightGreen: '#FFF8E9',
        },
        text: {
          dark: '#000000',
          dark1: '#191919',
          dark2: '#333333',
          dark3: '#525252',
          dark4: '#666666',
          dark5: '#8E8E8E',
        },
        borders: {
          border1: '#C8C8C8',
          border2: '#EAEAEA',
        },
        accent: {
          red: '#B73D09',
          grey: '#828282',
        }
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
} satisfies Config;
