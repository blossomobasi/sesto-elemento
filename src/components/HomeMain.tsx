"use client";

import Button from "@/ui/Button";
import { useEffect, useState } from "react";

const data = [
    {
        title: "Empowering Success in Projects and Operations",
        description:
            "We are an indigenous oil and gas project and operational support servicing company, purposed to provide best-in-class services in markets across Africa and other regions.",
        image: "/images/home_first_image.png",
    },
    {
        title: "Global Technology, Local Inclusion",
        description:
            "Guaranteed by our global partnerships, products and services delivered are aligned with advanced technology, giving us the leverage to provide solutions while the required standards are maintained locally.",
        image: "/images/home_second_image.png",
    },
    {
        title: "Procurement and technical services for critical applications",
        description:
            "Pioneering procurement and technical solutions to drive efficiency, reliability and critical performance.",
        image: "/images/home_third_image.png",
    },
];

const HomeMain = () => {
    const [curContent, setCurContent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurContent((prev) => (prev === 2 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [curContent]);

    return (
        <section>
            {data.map(
                (item, i) =>
                    curContent === i && (
                        <div
                            key={i}
                            className="flex flex-col lg:items-start items-center justify-center gap-y-6 md:px-16 px-5 lg:h-[calc(100vh-7rem)] h-[calc(100vh-6rem)] text-center lg:text-left "
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="lg:w-1/2 flex flex-col gap-y-6">
                                <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold">
                                    {item.title.split(" ").map((word, i) => (
                                        <span
                                            key={i}
                                            className={
                                                i % 2 === 0 ? "text-primary" : "text-secondary"
                                            }
                                        >
                                            {word + " "}
                                        </span>
                                    ))}
                                </h1>
                                <p className="sm:text-2xl text-lg">{item.description}</p>
                            </div>
                            <Button url="contact" style={{ backgroundColor: "red" }}>
                                Work with us
                            </Button>
                        </div>
                    )
            )}
        </section>
    );
};

export default HomeMain;
