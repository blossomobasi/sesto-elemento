"use client";

import { useState } from "react";
import Image from "next/image";

import { servicesOffered as servicesOfferedApi } from "@/data/servicesOfferedData";

const ServiceOffer = () => {
    const [activeService, setActiveService] = useState("Procurement");
    const servicesOffered = servicesOfferedApi;

    return (
        <section className="py-20 md:px-10 px-5">
            <h1 className="text-5xl text-center font-semibold text-secondary">Services we Offer</h1>

            {/* Navigation */}
            <nav className="py-10">
                <ul className="flex lg:justify-center justify-between lg:space-x-12 border-b border-secondary pb-2 lg:text-base text-sm">
                    {servicesOffered.map((service, index) => (
                        <li
                            key={index}
                            className={`${
                                activeService === service.title &&
                                "relative text-secondary before:absolute before:w-[calc(100%+2rem)] before:h-1 before:bg-secondary before:-left-[1rem] before:-bottom-2.5 before:rounded-sm"
                            } capitalize hover:text-secondary cursor-pointer lg:font-medium`}
                            onClick={() => setActiveService(service.title)}
                        >
                            {service.title}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content Display */}
            <div className="flex md:flex-row flex-col items-center lg:px-28 lg:space-x-20 md:space-x-10 md:space-y-0 space-y-10">
                {servicesOffered.map(
                    (service, index) =>
                        activeService === service.title && (
                            <Image
                                src={service.image.src}
                                alt={service.image.alt}
                                key={index}
                                width={1000}
                                height={1000}
                                className="md:w-1/2 md:h-1/2 sm:w-[513px] sm:h-[497px] w-full"
                            />
                        )
                )}

                <div className="flex flex-col space-y-5 md:w-1/2">
                    {servicesOffered.map(
                        (service) =>
                            activeService === service.title && (
                                <>
                                    <h1 className="lg:text-4xl text-3xl text-secondary font-semibold capitalize">
                                        {service.title}
                                    </h1>
                                    <p className="lg:text-base text-sm">{service.firstParagraph}</p>

                                    <ul className="lg:text-base text-sm">
                                        <p
                                            className={`${
                                                service.title === "Technical Site Asst" &&
                                                "text-primary"
                                            } mb-2`}
                                        >
                                            {service?.secondParagraph}
                                        </p>
                                        {service?.listItem?.map((item, i) => (
                                            <li key={i} className="list-disc">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceOffer;
