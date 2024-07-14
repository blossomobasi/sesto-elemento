"use client";

import { createContext, useContext, useState } from "react";

interface SectorsContextType {
    activeSector: string;
    setActiveSector: (sector: string) => void;
    sectorHashValue: string;
    setSectorsHashValue: (hash: string) => void;
}

const SectorsContext = createContext<SectorsContextType | undefined>(undefined);

const SectorsProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSector, setActiveSector] = useState("Oil and Gas");
    const [sectorHashValue, setSectorsHashValue] = useState("");

    sectorHashValue.split("#")[1] && setSectorsHashValue(sectorHashValue.split("#")[1]);

    return (
        <SectorsContext.Provider
            value={{ activeSector, setActiveSector, sectorHashValue, setSectorsHashValue }}
        >
            {children}
        </SectorsContext.Provider>
    );
};

const useSectors = () => {
    const context = useContext(SectorsContext);

    if (!context) {
        throw new Error("useSectors must be used within a SectorsProvider");
    }

    return context;
};

export { SectorsProvider, useSectors };
