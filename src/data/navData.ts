import { NavData } from "@/types/nav";

export const navData: NavData[] = [
    { title: "Home", href: "/" },
    {
        title: "About Us",
        href: "/about",
        subLink: [
            { title: "Mission", href: "/about/#mission_vision" },
            { title: "Vision", href: "/about/#mission_vision" },
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
        title: "Sectors",
        href: "/sectors",
        subLink: [
            { title: "Oil and Gas", href: "/sectors/#oil-and-gas" },
            {
                title: "Construction and Engineering",
                href: "/sectors/#construction-and-engineering",
            },
            { title: "Defence", href: "/sectors/#defence" },
            { title: "Infrastructure", href: "/sectors/#infrastructure" },
            { title: "Renewable", href: "/sectors/#renewable" },
        ],
    },
    { title: "Our Partners", href: "/partners" },
];
