"use client";

import Image from "next/image";

import { sectorsData as sectorsDataApi } from "@/data/sectorsData";
import { useSectors } from "@/context/SectorsContext";

const Sectors = () => {
    const { activeSector, setActiveSector, hashValue } = useSectors();
    const sectorsData = sectorsDataApi;

    return (
        <section className="py-20 md:px-10 px-5" id={hashValue}>
            <h1 className="md:text-5xl text-4xl pb-10 text-center font-semibold text-secondary">
                Services we Offer
            </h1>

            {/* Large Screen */}

            {/* ------------- Navigation ------------ */}
            <nav className="py-10 hidden md:block">
                <ul className="flex lg:justify-center justify-between lg:space-x-12 border-b border-secondary pb-2 lg:text-base text-sm">
                    {sectorsData.map((sector, index) => (
                        <li
                            key={index}
                            className={`${
                                activeSector === sector.title &&
                                "relative text-secondary before:absolute before:w-[calc(100%+2rem)] before:h-1 before:bg-secondary before:-left-[1rem] before:-bottom-2.5 before:rounded-sm"
                            } capitalize hover:text-secondary cursor-pointer lg:font-medium`}
                            onClick={() => {
                                setActiveSector(sector.title);
                            }}
                        >
                            {sector.title}
                        </li>
                    ))}
                </ul>
            </nav>
            {/* ------------ Content Display ------------ */}
            <div
                className="hidden md:flex items-center lg:px-28 lg:space-x-20 space-x-10"
                id={activeSector}
            >
                {sectorsData.map(
                    (sector, index) =>
                        activeSector === sector.title && (
                            <Image
                                src={sector.image.src}
                                alt={sector.image.alt}
                                key={index}
                                width={1000}
                                height={1000}
                                className="w-1/2 h-1/2"
                            />
                        )
                )}

                <div className="flex flex-col space-y-5 w-1/2">
                    {sectorsData.map(
                        (sector) =>
                            activeSector === sector.title && (
                                <>
                                    <h1 className="lg:text-4xl text-3xl text-secondary font-semibold capitalize">
                                        {sector.title}
                                    </h1>
                                    <p className="lg:text-base text-sm">{sector.firstParagraph}</p>

                                    <ul className="lg:text-base text-sm">
                                        <p
                                            className={`${
                                                sector.title === "Technical Site Asst" &&
                                                "text-primary"
                                            } mb-2`}
                                        >
                                            {sector?.secondParagraph}
                                        </p>
                                    </ul>
                                </>
                            )
                    )}
                </div>
            </div>
            {/* Small Screen */}
            <nav className="md:hidden px-5 pt-10">
                <ul>
                    {sectorsData.map((service, index) => (
                        <>
                            <li
                                className={`${
                                    activeSector === service.title && "text-secondary border-b-2"
                                } capitalize hover:text-secondary cursor-pointer text-center border-b border-secondary py-2 font-medium`}
                                onClick={() => setActiveSector(service.title)}
                            >
                                {service.title}
                            </li>

                            {activeSector === service.title && (
                                <div className="pt-8">
                                    <Image
                                        src={service.image.src}
                                        alt={service.image.alt}
                                        key={index}
                                        width={1000}
                                        height={1000}
                                        className="sm:w-[513px] sm:h-[497px] w-full mx-auto"
                                    />
                                    <div className="flex flex-col space-y-5 pt-5">
                                        <h1 className="text-3xl text-secondary font-medium">
                                            {service.title}
                                        </h1>
                                        <p className="text-sm">{service.firstParagraph}</p>

                                        <div className="text-sm">
                                            <p
                                                className={`${
                                                    service.title === "Technical Site Asst" &&
                                                    "text-primary"
                                                } mb-2`}
                                            >
                                                {service?.secondParagraph}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default Sectors;
