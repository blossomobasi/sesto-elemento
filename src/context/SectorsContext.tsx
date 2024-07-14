"use client";

import { createContext, useContext, useState } from "react";

interface SectorsContextType {
    activeSector: string;
    setActiveSector: (sector: string) => void;
    hashValue: string;
    setHashValue: (hash: string) => void;
}

const SectorsContext = createContext<SectorsContextType | undefined>(undefined);

const SectorsProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSector, setActiveSector] = useState("Oil, Gas And Energy");
    const [hashValue, setHashValue] = useState("");

    hashValue.split("#")[1] && setHashValue(hashValue.split("#")[1]);

    return (
        <SectorsContext.Provider value={{ activeSector, setActiveSector, hashValue, setHashValue }}>
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
