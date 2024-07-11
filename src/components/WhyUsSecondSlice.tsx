import Button from "@/ui/Button";
import Image from "next/image";

const WhyUsSecondSlice = () => {
    return (
        <div className="flex items-center justify-between gap-x-8 py-5 bg-primaryVeryLight">
            <Image
                className="w-1/2"
                src="/images/our_expertise.png"
                alt="Maximizing Operational Efficiency"
                width={1000}
                height={1000}
            />

            <div className="pr-12 flex flex-col items-start space-y-5 w-1/2">
                <h2 className="text-5xl font-semibold">
                    <span className="text-primary">Our Expertise</span>{" "}
                    <span className="text-secondary">Spans For Multiple</span>
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
