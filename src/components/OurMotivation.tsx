import Button from "@/ui/Button";
import Image from "next/image";

const OurMotivation = () => {
    return (
        <section className="flex items-center justify-between md:px-16 px-5">
            <div className="flex flex-col space-y-5 md:items-start items-center md:text-start text-center">
                <h2 className="text-6xl text-secondary font-semibold">Our Motivation</h2>
                <p>
                    We are motivated to achieve the elements needed to provide project success and
                    build structures and roadways that will leave a lasting impression for our
                    clients, our society and our communities
                </p>
                <Button>Work with us</Button>
            </div>

            <Image
                src="/images/our_motivation.png"
                alt="Our Motivation"
                width={1000}
                height={1000}
            />
        </section>
    );
};

export default OurMotivation;
