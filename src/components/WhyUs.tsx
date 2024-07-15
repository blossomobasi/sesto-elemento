import Button from "@/ui/Button";
// import FlexRow from "@/ui/FlexRow";
import Image from "next/image";

const WhyUs = () => {
    return (
        <section className="bg-primaryVeryLight py-5">
            <div className="gap-x-8 flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-y-0">
                <Image
                    src="/images/why_us.png"
                    alt="Why Us"
                    className="md:w-1/2"
                    width={1000}
                    height={1000}
                />
                <div className="flex flex-col md:items-start gap-y-5 md:mr-12 mr-5 md:w-1/2 px-5 md:text-start text-center">
                    <h2 className="lg:text-6xl text-4xl font-semibold text-secondary">Why Us?</h2>
                    <p className="lg:text-2xl text-lg">
                        Our track record speaks for itself. We have a long history of successfully
                        executing projects of all sizes and complexities. Our satisfied clients have
                        consistently praised our ability to deliver projects on time, within budget,
                        and to the highest quality standards.
                    </p>
                    <span>
                        <Button url="contact">Work with us</Button>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
