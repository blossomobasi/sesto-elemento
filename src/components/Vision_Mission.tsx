import Image from "next/image";

const Vision_Mission = () => {
    return (
        <section className="py-14 md:px-16 px-5">
            <div className="text-center">
                <h2 className="text-5xl font-semibold text-secondary">Who we are</h2>
                <p className="text-lg mt-5 md:px-20 px-5">
                    We are a projects and operations support services firm poised towards the
                    provision of solutions in the Oil, Energy, Marine, Building and Civil
                    Infrastructure Industry where we develop unrivaled trailblazing solutions in
                    building sustainable infrastructures that comply with global best practice.
                </p>
            </div>
            <div className="flex items-center ">
                <Image
                    src="/images/who_we_are.png"
                    alt="Who we are"
                    width={1000}
                    height={1000}
                    className="w-1/2"
                />

                <div className="w-1/2 flex flex-col space-y-5">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-secondary text-3xl font-semibold">Our vision</h3>
                        <p className="text-lg">
                            Our vision is to provide our clients with cost effective value adding
                            solutions to achieve success in projects and operations with high
                            standards and positive economic position.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h3 className="text-secondary text-3xl font-semibold">Our Mission</h3>
                        <p className="text-lg">
                            To improve customer operation efficiency by reducing products and
                            service turnaround time through partnership with global manufacturers
                            and engineers. We also keep stock on selected items which enables us
                            offer short delivery time. Our quality control system aims to enhance
                            customer satisfaction through effective procedures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision_Mission;
