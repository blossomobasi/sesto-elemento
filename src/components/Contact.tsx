import Image from "next/image";
import Footer from "./Footer";

const Contact = () => {
    return (
        <section className="bg-primaryVeryLight text-[#333] font-light">
            <div className="md:w-4/5 w-full px-10 sm:px-0 mx-auto flex items-center justify-between flex-col-reverse space-x-5 sm:flex-row md:py-28 py-10">
                <div className="sm:w-1/2 flex flex-col gap-y-5">
                    <h2 className="sm:text-5xl text-3xl font-medium text-secondary">
                        Reach Out to Us
                    </h2>
                    <div className="flex flex-col">
                        <p className="flex space-x-5">
                            <span>
                                <Image
                                    src="/assets/marker.png"
                                    alt="Location"
                                    width={30}
                                    height={30}
                                />
                            </span>

                            <div className="flex flex-col space-y-5">
                                <div className="flex flex-col">
                                    <label className="font-medium">Corporate Headquaters:</label>
                                    <span>
                                        3rd floor, 39 Adeola Odeku Street, Victoria island Lagos
                                        Nigeria
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <label className="font-medium">
                                        Branch office/ Operational yard:
                                    </label>
                                    <span>
                                        Plot 28 High street off ordinance road Trans-Amadi
                                        Industrial layout , Port harcourt Rivers state Nigeria.
                                    </span>
                                </div>
                            </div>
                        </p>
                    </div>

                    <div className="flex items-start space-x-5">
                        <Image src="/assets/phone_call.png" alt="Phone" width={20} height={20} />

                        <div className="flex flex-col font-semibold">
                            <code>+234 8023535353</code>
                            <code>+234 8136611200</code>
                        </div>
                    </div>

                    <div className="flex space-x-5 items-center">
                        <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} />
                        <span>sesl_ng</span>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <Image src="/assets/envelope.png" alt="Email" width={20} height={20} />
                        <span>info@sesl-ng.com</span>
                    </div>
                </div>

                <Image
                    src="/images/reach_us.png"
                    alt="Reach out to us"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="sm:w-1/2 mb-10 sm:mb-0"
                />
            </div>

            <Footer />
        </section>
    );
};

export default Contact;
