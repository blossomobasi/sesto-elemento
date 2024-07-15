import { DisplayNavContentType } from "@/data/servicesOfferedData";
import Image from "next/image";

interface IDisplayNavContent {
    data: DisplayNavContentType[];
    header: string;
    activeContent: string;
    setActiveContent: (value: string) => void;
    hashValue: string;
}

const DisplayNavContent = ({
    data,
    header,
    activeContent,
    setActiveContent,
    hashValue,
}: IDisplayNavContent) => {
    return (
        <section className="py-20 md:px-10 px-5" id={hashValue}>
            <h1 className="md:text-5xl text-4xl pb-10 text-center font-semibold text-secondary">
                {header}
            </h1>

            {/* Large Screen */}
            {/* ------------- Navigation ------------ */}
            <nav className="py-10 hidden md:block">
                <ul className="flex lg:justify-center justify-between lg:space-x-12 border-b border-secondary pb-2 lg:text-base text-sm">
                    {data.map((el, index) => (
                        <li
                            key={index}
                            className={`${
                                activeContent === el.title &&
                                "relative text-secondary before:absolute before:w-[calc(100%+2rem)] before:h-1 before:bg-secondary before:-left-[1rem] before:-bottom-2.5 before:rounded-sm"
                            } capitalize hover:text-secondary cursor-pointer lg:font-medium`}
                            onClick={() => {
                                setActiveContent(el.title);
                            }}
                        >
                            {el.title}
                        </li>
                    ))}
                </ul>
            </nav>
            {/* ------------ Content Display ------------ */}
            <div
                className="hidden md:flex items-center lg:px-28 lg:space-x-20 space-x-10"
                id={activeContent}
            >
                {data.map(
                    (el, index) =>
                        activeContent === el.title && (
                            <Image
                                src={el.image.src}
                                alt={el.image.alt}
                                key={index}
                                width={1000}
                                height={1000}
                                className="w-1/2 h-1/2"
                            />
                        )
                )}

                <div className="flex flex-col space-y-5 w-1/2">
                    {data.map(
                        (el) =>
                            activeContent === el.title && (
                                <>
                                    <h1 className="lg:text-4xl text-3xl text-secondary font-semibold capitalize">
                                        {el.title}
                                    </h1>
                                    <p className="lg:text-base text-sm">{el.firstParagraph}</p>

                                    <ul className="lg:text-base text-sm">
                                        <p
                                            className={`${
                                                el.title === "Technical Site Asst" && "text-primary"
                                            } mb-2`}
                                        >
                                            {el?.secondParagraph}
                                        </p>
                                        {el?.listItem?.map((item, i) => (
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
            {/* Small Screen */}
            <nav className="md:hidden px-5 pt-10">
                <ul>
                    {data.map((el, index) => (
                        <>
                            <li
                                className={`${
                                    activeContent === el.title && "text-secondary border-b-2"
                                } capitalize hover:text-secondary cursor-pointer text-center border-b border-secondary py-2 font-medium`}
                                onClick={() => setActiveContent(el.title)}
                            >
                                {el.title}
                            </li>

                            {activeContent === el.title && (
                                <div className="pt-8">
                                    <Image
                                        src={el.image.src}
                                        alt={el.image.alt}
                                        key={index}
                                        width={1000}
                                        height={1000}
                                        className="sm:w-[513px] sm:h-[497px] w-full mx-auto"
                                    />
                                    <div className="flex flex-col space-y-5 pt-5">
                                        <h1 className="text-3xl text-secondary font-medium">
                                            {el.title}
                                        </h1>
                                        <p className="text-sm">{el.firstParagraph}</p>

                                        <div className="text-sm">
                                            <p
                                                className={`${
                                                    el.title === "Technical Site Asst" &&
                                                    "text-primary"
                                                } mb-2`}
                                            >
                                                {el?.secondParagraph}
                                            </p>
                                            {el?.listItem?.map((item, i) => (
                                                <li key={i} className="list-disc">
                                                    {item}
                                                </li>
                                            ))}
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

export default DisplayNavContent;
