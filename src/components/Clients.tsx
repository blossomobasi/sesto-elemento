import { clientLogo as clientLogoApi } from "@/data/logos";
import Image from "next/image";

const Clients = () => {
    const clientLogo = clientLogoApi;

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
        </div>
    );
};

export default Clients;
