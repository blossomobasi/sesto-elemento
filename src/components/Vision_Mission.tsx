"use client";

import { useSectors } from "@/context/SectorsContext";
import Image from "next/image";

const Vision_Mission = () => {
    const { sectorHashValue } = useSectors();

    return (
        <section
            className="pt-10 md:px-16 px-5"
            id={sectorHashValue === "mission_vision" ? "mission_vision" : ""}
        >
            <div className="text-center pb-10">
                <h2 className="md:text-5xl text-4xl font-semibold text-secondary">Who we are</h2>
                <p className="md:text-lg mt-5 md:px-20 px-5">
                    We are a projects and operations support services firm poised towards the
                    provision of solutions in the Oil, Energy, Marine, Building and Civil
                    Infrastructure Industry where we develop unrivaled trailblazing solutions in
                    building sustainable infrastructures that comply with global best practice.
                </p>
            </div>
            <div className="flex items-center lg:flex-row flex-col">
                <Image
                    src="/images/who_we_are.png"
                    alt="Who we are"
                    width={1000}
                    height={1000}
                    className="lg:w-1/2"
                />

                <div className="lg:w-1/2 flex flex-col space-y-5 md:text-left text-center">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-secondary text-3xl font-semibold">Our vision</h3>
                        <p className="text-lg">
                            Our vision is to provide our clients with cost effective value adding
                            solutions to achieve success in projects and operations with high
                            standards and positive economic position.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h3 className="text-secondary text-3xl font-semibold">Our Mission</h3>
                        <p className="text-lg">
                            To improve customer operation efficiency by reducing products and
                            service turnaround time through partnership with global manufacturers
                            and engineers. We also keep stock on selected items which enables us
                            offer short delivery time. Our quality control system aims to enhance
                            customer satisfaction through effective procedures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision_Mission;
