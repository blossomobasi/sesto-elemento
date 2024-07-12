import { clientLogo as clientLogoApi } from "@/data/logos";
import Image from "next/image";

const Clients = () => {
    const clientLogo = clientLogoApi;

    // const logos = clientLogo.map((client) => client.src);

    // const rows = [
    //     logos.slice(0, 4),
    //     logos.slice(4, 8),
    //     logos.slice(8, 11),
    //     logos.slice(11, 13),
    //     logos.slice(13, 14),
    // ];

    return (
        <div className="py-20">
            <h5 className="text-center font-medium text-secondary mb-10 text-2xl">
                Clients we&apos;ve worked with
            </h5>

            <div className="flex flex-wrap justify-center gap-20 px-32">
                {clientLogo.map((client) => (
                    <Image
                        key={client.alt}
                        src={`/images/${client.src}`}
                        alt={client.alt}
                        width={150}
                        height={150}
                    />
                ))}
            </div>

            {/* <div className="hidden lg:block px-12">
                {rows.map((row, index) => (
                    <div key={index} className={`flex justify-center gap-40`}>
                        {row.map((client) => (
                            <Image
                                key={client}
                                src={`/images/${client}`}
                                alt={client}
                                width={150}
                                height={150}
                            />
                        ))}
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Clients;
