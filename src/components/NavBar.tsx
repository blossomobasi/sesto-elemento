"use client";

import { useState } from "react";

import Logo from "@/ui/Logo";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { navData as navDataApi } from "@/data/navData";

const NavBar = () => {
    const [showSubLink, setShowSubLink] = useState(0);

    const navData = navDataApi;

    return (
        <header className="flex items-center justify-between px-16 py-6 bg-white sticky top-0 w-full shadow-sm">
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
                                    className="absolute py-2 px-3 bg-white rounded-md w-52 shadow-md text-sm"
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
