import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

const lato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: ["900"],
});

export const metadata: Metadata = {
    title: "Sesto Elemento",
    description: "Empowering Success in Projects and Operations",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${lato.variable} ${lexend.className} bg-light overflow-x-hidden text-textColor`}
            >
                {children}
            </body>
        </html>
    );
}
