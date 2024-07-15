"use client";

import { servicesOffered as servicesOfferedApi } from "@/data/servicesOfferedData";
import { useServices } from "@/context/ServicesContext";
import DisplayNavContent from "./DisplayNavContent";

const ServiceOffer = () => {
    const { activeService, setActiveService, serviceHashValue } = useServices();
    const servicesOffered = servicesOfferedApi;

    return (
        <DisplayNavContent
            activeContent={activeService}
            setActiveContent={setActiveService}
            header="Services we Offer"
            hashValue={serviceHashValue}
            data={servicesOffered}
        />
    );
};

export default ServiceOffer;
