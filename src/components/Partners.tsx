import Image from "next/image";
import { partnersLogo as partnersLogoApi } from "@/data/logos";

const Partners = () => {
    const partnersLogo = partnersLogoApi;

    return (
        <div className="bg-primaryVeryLight flex flex-col items-center justify-center space-y-10 py-10 text-center">
            <div className="flex flex-col space-y-3">
                <h1 className="text-secondary sm:text-5xl text-4xl font-semibold">Our Partners</h1>
                <p className="md:text-lg text-base">Working together, Ensuring Excellence.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-20 px-32">
                {partnersLogo.map((partner) => (
                    <Image
                        key={partner.alt}
                        src={`/images/${partner.src}`}
                        alt={partner.alt}
                        width={250}
                        height={250}
                    />
                ))}
            </div>
        </div>
    );
};

export default Partners;
