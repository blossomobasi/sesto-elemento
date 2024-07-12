import Button from "@/ui/Button";
import Image from "next/image";

const WhyUsSecondSlice = () => {
    return (
        <div className="flex items-center justify-between flex-col md:flex-row gap-x-8 gap-y-10 md:gap-y-0 py-5 bg-primaryVeryLight">
            <Image
                className="md:w-1/2"
                src="/images/our_expertise.png"
                alt="Maximizing Operational Efficiency"
                width={1000}
                height={1000}
            />

            <div className="md:pr-16 px-5 flex flex-col md:items-start md:text-start text-center items-center space-y-5 md:w-1/2">
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
                    <span className="text-primary">Our Expertise</span>{" "}
                    <span className="text-secondary">Spans For Multiple </span>
                    <span className="text-primary">Industries</span>
                </h2>
                <p>
                    We offer comprehensive project and operations support across a diverse range of
                    sectors. Our expertise spans multiple industries, enabling us to cater to the
                    unique needs and requirements of each sector
                </p>
                <Button>Work with us</Button>
            </div>
        </div>
    );
};

export default WhyUsSecondSlice;
