"use client";

import { useState } from "react";

import Logo from "@/ui/Logo";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

interface NavData {
    title: string;
    href: string;
    subLink?: { title: string; href?: string }[];
}

const NavBar = () => {
    // const [showSubLink, setShowSubLink] = useState<number | null>(null);
    const [showSubLink, setShowSubLink] = useState(0);

    const navData: NavData[] = [
        { title: "Home", href: "/" },
        {
            title: "About Us",
            href: "/about-us",
            subLink: [
                { title: "Mission", href: "/about-us/#mission" },
                { title: "Vision", href: "/about-us/#vision" },
            ],
        },
        {
            title: "Services",
            href: "/services",
            subLink: [
                { title: "Procurement", href: "/sevices/#procurement" },
                { title: "Contraction", href: "/sevices/#contraction" },
                { title: "Man Power Supply", href: "/sevices/#man-power-supply" },
                { title: "Technical Site Asst", href: "/sevices/#technical-site-asst" },
                { title: "Equipment Lease", href: "/sevices/#equipment-lease" },
            ],
        },
        {
            title: "Sector",
            href: "/sector",
            subLink: [
                { title: "Oil and Gas", href: "/sector/#oil-and-gas" },
                { title: "Defence", href: "/sector/#defence" },
                { title: "Power Generation", href: "/sector/#power-generation" },
                { title: "Infrastructure", href: "/sector/#infrastructure" },
                { title: "Renewable", href: "/sector/#renewable" },
            ],
        },
        { title: "Our Partners", href: "/partners" },
    ];

    return (
        <header className="flex items-center justify-between px-16 py-6 bg-white">
            <Logo />

            <nav>
                <ul className="flex items-center gap-x-8">
                    {navData.map((link, i) => (
                        <li key={link.href} className="relative">
                            <Link
                                href={link.href}
                                className="flex items-center gap-x-2"
                                onMouseEnter={() => {
                                    link.subLink && setShowSubLink(i);
                                }}
                                onMouseLeave={() => setShowSubLink(0)}
                            >
                                {link.title}
                                {link.subLink && <FaChevronDown size={14} />}
                            </Link>

                            {/* DropDown */}
                            {link.subLink && showSubLink === i && (
                                <ul
                                    className="absolute  py-2 px-3 bg-white rounded-md bottom--0 left-0 shadow-md text-sm"
                                    onMouseEnter={() => setShowSubLink(i)}
                                    onMouseLeave={() => setShowSubLink(0)}
                                >
                                    {link.subLink?.map((sub, i) => (
                                        <li key={sub.title}>
                                            <Link
                                                href={sub.href || ""}
                                                className="py-2 px-4 flex items-center gap-x-2 w-auto hover:underline"
                                            >
                                                <div className="h-2 w-2 rounded-full bg-secondary" />
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <Link href="/contact" className="text-secondary font-medium">
                Contact Us
            </Link>
        </header>
    );
};

export default NavBar;
