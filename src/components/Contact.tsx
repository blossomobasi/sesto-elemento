import Image from "next/image";

import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

import Footer from "./Footer";

const Contact = () => {
    return (
        <section className="bg-primaryVeryLight text-[#333] font-light">
            <div className="lg:w-4/5 w-full lg:px-0 sm:px-10 px-5 mx-auto flex items-center justify-between flex-col-reverse space-x-5 md:flex-row md:py-28 py-10">
                <div className="md:w-1/2 flex flex-col gap-y-5 mt-10 md:mt-0">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-secondary">
                        Reach Out to Us
                    </h2>
                    <div className="flex flex-col">
                        <div className="flex space-x-5">
                            <span>
                                <IoLocationOutline size={25} />
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
                        </div>
                    </div>

                    <div className="flex items-start space-x-5">
                        <span>
                            <LiaPhoneVolumeSolid size={25} />
                        </span>

                        <div className="flex flex-col font-semibold">
                            <code>+234 8023535353</code>
                            <code>+234 8136611200</code>
                        </div>
                    </div>

                    <div className="flex space-x-5 items-center">
                        <FiInstagram size={25} />
                        <span>sesl_ng</span>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <HiOutlineEnvelope size={25} />
                        <span>info@sesl-ng.com</span>
                    </div>
                </div>

                <Image
                    src="/images/reach_us.png"
                    alt="Reach out to us"
                    width={1000}
                    height={1000}
                    className="md:w-1/2 sm:w-[500px] mb-10 sm:mb-0"
                />
            </div>

            <Footer />
        </section>
    );
};

export default Contact;
