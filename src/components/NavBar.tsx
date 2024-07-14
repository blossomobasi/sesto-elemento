"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "@/ui/Logo";

import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { CgClose, CgMenuCheese } from "react-icons/cg";

import { navData as navDataApi } from "@/data/navData";
import { useServices } from "@/context/ServicesContext";
import { useSectors } from "@/context/SectorsContext";

const NavBar = () => {
    const { setActiveService, setServicesHashValue } = useServices();
    const { setActiveSector, setSectorsHashValue } = useSectors();

    const [showSubLink, setShowSubLink] = useState(0);
    const [showNav, setShowNav] = useState(false);

    const pathname = usePathname();

    const navData = navDataApi;

    return (
        <header className="flex items-center justify-between lg:px-16 px-5 py-6 bg-white sticky top-0 w-full shadow-sm z-[100]">
            <div>
                <Logo />
            </div>

            {/* ----------- LARGE SCREEN ---------- */}
            <nav className="hidden sm:flex">
                <ul className="flex items-center lg:gap-x-8 gap-x-4">
                    {navData.map((link, i) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${
                                    pathname === link.href && "text-secondary"
                                } flex items-center lg:gap-x-2 gap-1 lg:text-base text-sm`}
                                onMouseEnter={() => {
                                    link.subLink && setShowSubLink(i);
                                }}
                                onMouseLeave={() => setShowSubLink(0)}
                            >
                                {link.title}
                                {link.subLink && (
                                    <FaChevronDown
                                        className={`${
                                            link.subLink && showSubLink === i
                                                ? "rotate-180 transition duration-300 ease"
                                                : ""
                                        } md:text-sm text-xs`}
                                    />
                                )}
                            </Link>

                            {/* ----------- LARGE SCREEN DROPDOWN ----------- */}
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
                                                onClick={() => {
                                                    setActiveService(sub.title);
                                                    setServicesHashValue(sub.href);
                                                    setActiveSector(sub.title);
                                                    setSectorsHashValue(sub.href);
                                                }}
                                                className={`${
                                                    pathname === sub.href && "text-secondary"
                                                } py-2 px-4 flex items-center gap-x-2 w-auto hover:underline`}
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

            {/* ----------- SMALL SCREEN ----------- */}
            <nav
                className={`${
                    !showNav && "-top-[10rem] invisible opacity-0 -z-50"
                } z-50 absolute top-[7rem] bg-white w-full left-0 py-4 px-8 h-fit block sm:hidden transition-all duration-300 ease-in-out`}
            >
                <ul className="flex flex-col gap-y-4 pb-10">
                    {navData.map((link, i) => (
                        <li
                            key={link.href}
                            className={`${
                                showSubLink === i && showSubLink ? "items-start" : "items-center"
                            } flex justify-between w-80`}
                        >
                            <li className="flex flex-col gap-y-3">
                                <Link href={link.href}>{link.title}</Link>
                                {link.subLink && showSubLink === i && (
                                    <ul className="text-textColor/80 ml-5 border-l border-textColor/60 px-5 flex flex-col gap-y-3">
                                        {link.subLink.map((sub, i) => (
                                            <Link
                                                key={sub.title}
                                                className="hover:underline"
                                                href={sub.href}
                                                onClick={() => {
                                                    setActiveService(sub.title);
                                                    setServicesHashValue(sub.href);
                                                    setActiveSector(sub.title);
                                                    setSectorsHashValue(sub.href);
                                                }}
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                            </li>
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

                <Link href="/contact" className="text-secondary font-medium">
                    Contact Us
                </Link>
            </nav>

            {/* ----------- MENU ICON ----------- */}
            <span className="sm:hidden">
                {showNav ? (
                    <CgClose
                        size={30}
                        onClick={() => setShowNav(!showNav)}
                        className={`${
                            showNav && "rotate-180 animate-spin"
                        } sm:hidden cursor-pointer`}
                    />
                ) : (
                    <CgMenuCheese
                        size={30}
                        onClick={() => setShowNav(!showNav)}
                        className="sm:hidden cursor-pointer"
                    />
                )}
            </span>

            <Link href="/contact" className="text-secondary font-medium hidden md:flex">
                Contact Us
            </Link>
        </header>
    );
};

export default NavBar;
