import Button from "@/ui/Button";
import Image from "next/image";

const WhyUsFirstSlice = () => {
    return (
        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-x-8 gap-y-10 md:gap-y-0 py-5">
            <div className="md:pl-16 px-5 flex flex-col md:items-start items-center space-y-5 md:w-1/2 md:text-start text-center">
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
                    <span className="text-primary">Maximizing </span>
                    <span className="text-secondary">Operational Efficiency for </span>
                    <span className="text-primary">Sustainable Growth</span>
                </h2>
                <p>
                    At Sesto Elemento ltd. We pride ourselves in helping clients save time, reduce
                    costs, enhance project efficiency, and mitigate risks.
                </p>
                <Button url="about">Read More</Button>
            </div>

            <Image
                className="md:w-1/2"
                src="/images/maximizing.png"
                alt="Maximizing Operational Efficiency"
                width={1000}
                height={1000}
            />
        </div>
    );
};

export default WhyUsFirstSlice;
