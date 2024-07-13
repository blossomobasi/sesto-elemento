"use client";

import { useState } from "react";
import Image from "next/image";

import { servicesOffered as servicesOfferedApi } from "@/data/servicesOfferedData";

const ServiceOffer = () => {
    const [activeService, setActiveService] = useState("Procurement");
    const servicesOffered = servicesOfferedApi;

    return (
        <section className="py-20 md:px-16 px-5">
            <h1 className="text-5xl text-center font-semibold text-secondary">Services we Offer</h1>

            {/* Navigation */}
            <nav className="py-10">
                <ul className="flex justify-center space-x-14 border-b border-secondary pb-2">
                    {servicesOffered.map((service, index) => (
                        <li
                            key={index}
                            className={`${
                                activeService === service.title &&
                                "relative text-secondary before:absolute before:w-[calc(100%+2rem)] before:h-0.5 before:bg-secondary before:-left-[1rem] before:-bottom-2 before:rounded-sm"
                            } capitalize hover:text-secondary cursor-pointer font-medium`}
                            onClick={() => setActiveService(service.title)}
                        >
                            {service.title}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content Display */}
            <div className="flex items-center px-28 space-x-20">
                {servicesOffered.map(
                    (service, index) =>
                        activeService === service.title && (
                            <Image
                                src={service.image.src}
                                alt={service.image.alt}
                                key={index}
                                width={1000}
                                height={1000}
                                className="w-[496.5px] h-[513px]"
                            />
                        )
                )}

                <div className="flex flex-col space-y-5">
                    {servicesOffered.map(
                        (service) =>
                            activeService === service.title && (
                                <>
                                    <h1 className="text-4xl text-secondary font-semibold uppercase">
                                        {service.title}
                                    </h1>
                                    <p>{service.firstParagraph}</p>

                                    <ul>
                                        <p
                                            className={`${
                                                service.title === "Technical Site Asst" &&
                                                "text-primary"
                                            } mb-2 -ml-4`}
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
