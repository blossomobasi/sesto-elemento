import Button from "@/ui/Button";
import Image from "next/image";

const WhyUsFirstSlice = () => {
    return (
        <div className="flex items-center justify-between gap-x-8">
            <div className="pl-12 flex flex-col space-y-5">
                <h2 className="text-4xl font-semibold">
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
                src="/images/maximizing.png"
                alt="Maximizing Operational Efficiency"
                width={700}
                height={700}
            />
        </div>
    );
};

export default WhyUsFirstSlice;
