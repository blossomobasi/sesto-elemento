import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                light: "#F4FCFF",
                primary: "#42C6EC",
                primaryLight: "#B0EDFF",
                primaryVeryLight: "#E8FAFF",
                secondary: "#004865",
                textColor: "#232323",
            },
        },
    },
    plugins: [],
};
export default config;
