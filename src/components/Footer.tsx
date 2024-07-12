import Logo from "@/ui/Logo";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import {
    companyData as companyDataApi,
    services as servicesApi,
    sectors as sectorsApi,
} from "@/data/footerData";

const Footer = () => {
    const companyData = companyDataApi;
    const services = servicesApi;
    const sectors = sectorsApi;

    return (
        <footer className="md:px-16 px-5 flex flex-col space-y-10 py-10">
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
                            <Link href={company.href} className="hover:underline">
                                {company.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex-[1.5] flex flex-col space-y-2">
                    <h2 className="text-lg font-medium">Our Service</h2>
                    {services.map((service) => (
                        <li key={service.title}>
                            <Link href={service.href} className="hover:underline">
                                {service.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex-[1.5] flex flex-col space-y-2">
                    <h2 className="text-lg font-medium">Our Sector</h2>
                    {sectors.map((sector) => (
                        <li key={sector.title}>
                            <Link href={sector.href} className="hover:underline">
                                {sector.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex-[1.5] flex flex-col space-y-2">
                    <h2 className="text-lg font-medium">Contact Us</h2>

                    <Link href="/contact" className="hover:underline">
                        Customer Support
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Help
                    </Link>
                </ul>
            </div>
            <div className="flex items-center justify-between">
                <p>Follow us in all our social media platforms</p>

                <SocialIcons />
            </div>
        </footer>
    );
};

export default Footer;
