import { NavData } from "@/types/nav";

export const navData: NavData[] = [
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
