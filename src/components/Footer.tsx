import Logo from "@/ui/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const companyData = [
        { title: "About Us", href: "/about" },
        { title: "our Partners", href: "/partners" },
        { title: "Faq", href: "/" },
    ];

    const services = [
        { title: "Procurement", href: "/sevices/#procurement" },
        { title: "Contracting", href: "/sevices/#contraction" },
        { title: "Man Power Supply", href: "/sevices/#man-power-supply" },
        { title: "Technical Site Asst", href: "/sevices/#technical-site-asst" },
        { title: "Equipment Lease", href: "/sevices/#equipment-lease" },
    ];

    const sectors = [
        { title: "Oil and Gas", href: "/sector/#oil-and-gas" },
        { title: "Defence", href: "/sector/#defence" },
        { title: "Power Generation", href: "/sector/#power-generation" },
        { title: "Infrastructure", href: "/sector/#infrastructure" },
        { title: "Renewable", href: "/sector/#renewable" },
    ];

    return (
        <footer className="px-12 flex flex-col space-y-10 py-10">
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:gap-20 md:gap-14 gap-10">
                <div className="col-span-2">
                    <Logo />
                    <p className="mt-5 text-lg">
                        Delivering maximum value by leveraging on our global sourcing networks
                    </p>
                </div>

                <ul className="flex-[1.5] flex flex-col space-y-2">
                    <h2 className="text-lg font-medium">Company</h2>
                    {companyData.map((company) => (
                        <li key={company.title}>
                            <Link href={company.href}>{company.title}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex-[1.5] flex flex-col space-y-2">
                    <h2 className="text-lg font-medium">Our Service</h2>
                    {services.map((service) => (
                        <li key={service.title}>
                            <Link href={service.href}>{service.title}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex-[1.5] flex flex-col space-y-2">
                    <h2 className="text-lg font-medium">Our Sector</h2>
                    {sectors.map((sector) => (
                        <li key={sector.title}>
                            <Link href={sector.href}>{sector.title}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex-[1.5] flex flex-col space-y-2">
                    <h2 className="text-lg font-medium">Contact Us</h2>

                    <Link href="/">Customer Support</Link>
                    <Link href="/">Help</Link>
                </ul>
            </div>
            <div className="flex items-center justify-between">
                <p>Follow us in all our social media platforms</p>
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} />
                    </Link>
                    <Link href="/">
                        <Image src="/assets/facebook.png" alt="Instagram" width={20} height={20} />
                    </Link>
                    <Link href="/">
                        <Image src="/assets/twitter.png" alt="Instagram" width={20} height={20} />
                    </Link>
                    <Link href="/">
                        <Image src="/assets/linkedin.png" alt="Instagram" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
