"use client";

import { useState } from "react";

import Logo from "@/ui/Logo";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { CgMenuCheese } from "react-icons/cg";

import { navData as navDataApi } from "@/data/navData";

const NavBar = () => {
    const [showSubLink, setShowSubLink] = useState(0);
    const [showNav, setShowNav] = useState(false);

    const navData = navDataApi;

    return (
        <header className="flex items-center justify-between md:px-16 px-5 py-6 bg-white sticky top-0 w-full shadow-sm z-50">
            <Logo />

            {/* Large Screen */}
            <nav className="hidden sm:flex">
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
                                {link.subLink && (
                                    <FaChevronDown
                                        size={14}
                                        className={`${
                                            link.subLink && showSubLink === i
                                                ? "rotate-180 transition duration-300 ease"
                                                : ""
                                        }`}
                                    />
                                )}
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

            {/* Small Screen */}
            <nav
                className={`${
                    showNav ? "z-50" : "-top-96 -z-50"
                } absolute top-[7rem] bg-white w-full left-0 py-4 h-fit block sm:hidden transition-all duration-300 ease-in-out`}
            >
                <ul className="flex flex-col gap-y-4 px-8 pb-10">
                    {navData.map((link, i) => (
                        <li
                            key={link.href}
                            className={`${
                                showSubLink === i && showSubLink ? "items-start" : "items-center"
                            } flex justify-between w-80`}
                        >
                            <Link href={link.href} className="flex flex-col gap-y-3">
                                {link.title}
                                {link.subLink && showSubLink === i && (
                                    <ul className="text-textColor/80 ml-5 border-l border-textColor/60 px-5 flex flex-col gap-y-3">
                                        {link.subLink.map((sub, i) => (
                                            <li key={sub.title}>
                                                <Link href={sub.href} className="hover:underline">
                                                    {sub.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Link>
                            {link.subLink && (
                                <FaChevronRight
                                    onClick={() => setShowSubLink((prev) => (prev === i ? 0 : i))}
                                    size={14}
                                    className={`${
                                        link.subLink && showSubLink === i
                                            ? "rotate-90 transition duration-300 ease mt-1"
                                            : ""
                                    } `}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                <Link href="/contact" className="text-secondary font-medium ml-8">
                    Contact Us
                </Link>
            </nav>

            <span>
                <CgMenuCheese
                    size={30}
                    onClick={() => setShowNav(!showNav)}
                    className="sm:hidden cursor-pointer"
                />
            </span>

            <Link href="/contact" className="text-secondary font-medium hidden md:flex">
                Contact Us
            </Link>
        </header>
    );
};

export default NavBar;
