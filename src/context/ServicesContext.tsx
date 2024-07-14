"use client";

import { createContext, useContext, useState } from "react";

interface ServicesContextType {
    activeService: string;
    setActiveService: (service: string) => void;
    serviceHashValue: string;
    setServicesHashValue: (hash: string) => void;
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

const ServicesProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeService, setActiveService] = useState("Procurement");
    const [serviceHashValue, setServicesHashValue] = useState("");

    serviceHashValue.split("#")[1] && setServicesHashValue(serviceHashValue.split("#")[1]);

    return (
        <ServicesContext.Provider
            value={{ activeService, setActiveService, serviceHashValue, setServicesHashValue }}
        >
            {children}
        </ServicesContext.Provider>
    );
};

const useServices = () => {
    const context = useContext(ServicesContext);

    if (!context) {
        throw new Error("useServices must be used within a ServicesProvider");
    }

    return context;
};

export { ServicesProvider, useServices };
