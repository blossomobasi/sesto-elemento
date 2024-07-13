import Button from "@/ui/Button";
import Image from "next/image";

const ServiceMain = () => {
    return (
        <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-x-8 gap-y-10 md:gap-y-0 py-5 bg-primaryVeryLight lg:-mt-20 ">
            <div className="md:pl-16 px-5 flex flex-col md:items-start items-center space-y-5 lg:w-1/2 md:text-start text-center">
                <h2 className="md:text-5xl text-3xl font-semibold">
                    <span className="text-primary">Maximizing </span>
                    <span className="text-secondary">Operational Efficiency for </span>
                    <span className="text-primary">Sustainable Growth</span>
                </h2>
                <p>
                    At Sesto Elemento ltd. We pride ourselves in helping clients save time, reduce
                    costs, enhance project efficiency, and mitigate risks.
                </p>

                <p>
                    Maximizing operational efficiency is crucial for sustainable growth. Our team of
                    experts analyzes your existing processes, identifies bottlenecks, and implements
                    tailored solutions to streamline operations.
                </p>

                <p>
                    Since our management and the entire team are coherent with the concept of
                    quality, we have defined some special quality services to offer our clients
                    based on the stages of supply management. It starts by offering advanced
                    technical consultancy and continues by offering full service technical &
                    after-sales support.
                </p>

                <Button>Work with us</Button>
            </div>

            <Image
                className="lg:w-1/2 w-[600px] ml-auto"
                src="/images/maximizing.png"
                alt="Maximizing Operational Efficiency"
                width={1000}
                height={1000}
            />
        </div>
    );
};

export default ServiceMain;
