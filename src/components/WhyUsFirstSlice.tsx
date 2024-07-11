import Button from "@/ui/Button";
import Image from "next/image";

const WhyUsFirstSlice = () => {
    return (
        <div className="flex items-center justify-between gap-x-8 py-5">
            <div className="pl-12 flex flex-col items-start space-y-5 w-1/2">
                <h2 className="text-5xl font-semibold">
                    <span className="text-primary">Maximizing</span>{" "}
                    <span className="text-secondary">Operational Efficiency for </span>
                    <span className="text-primary">Sustainable Growth</span>
                </h2>
                <p>
                    At Sesto Elemento ltd. We pride ourselves in helping clients save time, reduce
                    costs, enhance project efficiency, and mitigate risks.
                </p>
                <Button>Read More</Button>
            </div>

            <Image
                className="w-1/2"
                src="/images/maximizing.png"
                alt="Maximizing Operational Efficiency"
                width={1000}
                height={1000}
            />
        </div>
    );
};

export default WhyUsFirstSlice;
