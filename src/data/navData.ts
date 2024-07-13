import { NavData } from "@/types/nav";

export const navData: NavData[] = [
    { title: "Home", href: "/" },
    {
        title: "About Us",
        href: "/about",
        subLink: [
            { title: "Mission", href: "/about/#mission" },
            { title: "Vision", href: "/about/#vision" },
        ],
    },
    {
        title: "Services",
        href: "/services",
        subLink: [
            { title: "Procurement", href: "/services/#procurement" },
            { title: "Contracting", href: "/services/#contracting" },
            { title: "Marine", href: "/services/#marine" },
            { title: "Man Power Supply", href: "/services/#man-power-supply" },
            { title: "Technical Site Asst", href: "/services/#technical-site-asst" },
            { title: "Equipment Lease", href: "/services/#equipment-lease" },
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
