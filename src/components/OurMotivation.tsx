import Button from "@/ui/Button";
import Image from "next/image";

const OurMotivation = () => {
    return (
        <section className="flex items-center justify-between md:flex-row flex-col-reverse space-x-5 md:px-16 px-5 py-10">
            <div className="flex flex-col space-y-5 md:items-start items-center md:text-start text-center md:w-1/2">
                <h2 className="lg:text-6xl text-4xl text-secondary font-semibold">
                    Our Motivation
                </h2>
                <p>
                    We are motivated to achieve the elements needed to provide project success and
                    build structures and roadways that will leave a lasting impression for our
                    clients, our society and our communities
                </p>
                <Button url="contact">Work with us</Button>
            </div>

            <Image
                src="/images/our_motivation.png"
                alt="Our Motivation"
                width={1000}
                height={1000}
                className="md:w-1/2"
            />
        </section>
    );
};

export default OurMotivation;
