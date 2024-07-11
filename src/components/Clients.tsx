import Image from "next/image";

const Clients = () => {
    const clientLogo = [
        { alt: "Client 1", src: "client_1.png" },
        { alt: "Client 2", src: "client_2.png" },
        { alt: "Client 3", src: "client_3.png" },
        { alt: "Client 4", src: "client_4.png" },
        { alt: "Client 5", src: "client_5.png" },
        { alt: "Client 6", src: "client_6.png" },
        { alt: "Client 7", src: "client_7.png" },
        { alt: "Client 8", src: "client_8.png" },
        { alt: "Client 9", src: "client_9.png" },
        { alt: "Client 10", src: "client_10.png" },
        { alt: "Client 11", src: "client_11.png" },
        { alt: "Client 12", src: "client_12.png" },
        { alt: "Client 13", src: "client_13.png" },
    ];

    // const logos = clientLogo.map((client) => client.src);

    // const rows = [
    //     logos.slice(0, 4),
    //     logos.slice(4, 8),
    //     logos.slice(8, 11),
    //     logos.slice(11, 13),
    //     logos.slice(13, 14),
    // ];

    return (
        <div>
            <h5 className="text-center font-medium text-secondary py-20 text-2xl">
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
