import type { Config } from "tailwindcss"
import scrollbarHide from "tailwind-scrollbar-hide"

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    red: "#F13E3A",
                    gold: "#F3B036"
                },
                background: {
                    white: "#FFFFFF",
                    grey1: "#F9F9F9",
                    grey2: "#F5F5F5",
                    grey3: "#F1F1F1",
                    lightGreen: "#FFF8E9",
                    sectionBg: "#F6F4F1",
                    footer: "#333333"
                },
                text: {
                    redPrimary: "#F13E3A",
                    dark: "#000000",
                    dark1: "#191919",
                    dark2: "#333333",
                    dark3: "#525252",
                    dark4: "#666666",
                    dark5: "#8E8E8E"
                },
                borders: {
                    border1: "#C8C8C8",
                    border2: "#EAEAEA"
                },
                accent: {
                    red: "#B73D09",
                    grey: "#828282"
                }
            },
            fontFamily: {
                sans: ["Fira Sans", "sans-serif"],
                parkinsans: ["Parkinsans", "sans-serif"],
                nunito: ["Nunito Sans", "sans-serif"]
            },
            fontSize: {
                h1: "48px",
                h2: "40px",
                h3: "32px",
                h4: "24px",
                h5: "20px",
                h6: "16px",
                body0: "20px",
                body1: "16px",
                body2: "14px",
                body3: "12px",
                subtitle: "14px"
            }
        }
    },
    plugins: [scrollbarHide]
} satisfies Config
