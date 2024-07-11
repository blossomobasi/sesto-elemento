import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

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
            <body className={`${lexend.className} bg-light overflow-x-hidden text-textColor`}>
                {children}
            </body>
        </html>
    );
}
