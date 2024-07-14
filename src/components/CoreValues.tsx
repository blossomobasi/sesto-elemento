import Image from "next/image";

const CoreValues = () => {
    const coreValues = [
        {
            title: "Integrity",
            image: {
                src: "/images/integrity_design.png",
                alt: "Integrity",
            },
        },
        {
            title: "Team Work",
            image: {
                src: "/images/teamwork_design.png",
                alt: "Team Work",
            },
        },
        {
            title: "Customer Satisfaction",
            image: {
                src: "/images/customer_satisfaction_design.png",
                alt: "Customer Satisfaction",
            },
        },
        {
            title: "Accountability",
            image: {
                src: "/images/accountability_design.png",
                alt: "Accountability",
            },
        },
        {
            title: "Reliability",
            image: {
                src: "/images/reliability_design.png",
                alt: "Reliability",
            },
        },
    ];

    return (
        <div className="px-12 md:py-28 py-14">
            <h2 className="text-center md:text-5xl text-4xl font-semibold text-secondary md:pb-28 pb-14">
                Our Core Values
            </h2>

            <div className="flex flex-wrap justify-center gap-5">
                {coreValues.map((value, index) => (
                    <div
                        key={index}
                        className="bg-primaryLight rounded-md shadow-md py-5 px-4 flex flex-col gap-y-3 items-center justify-center sm:w-52 sm:h-52 w-full"
                    >
                        <Image
                            src={value.image.src}
                            alt={value.image.alt}
                            width={1000}
                            height={1000}
                            className="w-[46px] h-[50px]"
                        />
                        <p className="lg:text-2xl md:text-xl text-base text-center">
                            {value.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValues;
