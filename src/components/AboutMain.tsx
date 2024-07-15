import React from "react";

const AboutMain = () => {
    return (
        <section className="bg-primaryVeryLight sm:h-[calc(100vh-7rem)] h-[calc(100vh-10rem)] flex flex-col items-center md:justify-center md:pt-0 pt-32 text-center space-y-5 md:px-16 px-5">
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-extrabold font-lato">
                <span className="text-secondary">SESTO </span>
                <span className="text-primary">ELEMENTO </span> <br />
                <span className="text-primary">SERVICES </span>
                <span className="text-secondary">LIMITED</span>
            </h1>

            <div className="h-5 w-5 rounded-full bg-secondary absolute top-32 left-20 hidden md:block" />
            <div className="h-5 w-5 rounded-full bg-secondary absolute top-48 left-[26rem] hidden md:block" />
            <div className="h-5 w-5 rounded-full bg-secondary absolute top-56 right-56 hidden md:block" />

            <div className="h-5 w-5 rounded-full bg-primary absolute left-32 top-[22rem] hidden md:block" />
            <div className="h-5 w-5 rounded-full bg-primary absolute left-[45rem] bottom-20 hidden md:block" />
            <div className="h-5 w-5 rounded-full bg-primary absolute right-20 bottom-32 hidden md:block" />

            <div>
                <p>
                    Sesto elemento services Limited was established in 2013, a leading, Procurement,
                    Integration, Installation and Maintenance provider.
                </p>
                <br />
                <p>
                    Sesto elemento is headquartered in Lagos Nigeria and has a satellite office in
                    Port Harcourt and Abuja. Our primary focus is on Project Procurement services,
                    Technical site assistance services innovative solutions enhancing Production
                    (Oil, Gas, Minerals), Mining, Pipeline Infrastructure, while its scope extends
                    to various environmentally responsible technologies enhance clean and renewable
                    energy.
                </p>
            </div>
        </section>
    );
};

export default AboutMain;
