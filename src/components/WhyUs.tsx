import Button from "@/ui/Button";
// import FlexRow from "@/ui/FlexRow";
import Image from "next/image";

const WhyUs = () => {
    return (
        <section className="bg-primaryVeryLight">
            <div className="gap-x-8 flex flex-col md:flex-row items-center justify-between">
                <Image src="/images/why_us.png" alt="Why Us" width={700} height={700} />
                <div className="flex flex-col items-start gap-y-5 mr-12">
                    <h2 className="text-6xl font-semibold text-secondary">Why Us?</h2>
                    <p className="text-2xl">
                        Our track record speaks for itself. We have a long history of successfully
                        executing projects of all sizes and complexities. Our satisfied clients have
                        consistently praised our ability to deliver projects on time, within budget,
                        and to the highest quality standards.
                    </p>
                    <Button>Work with us</Button>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
