"use client";

import { sectorsData as sectorsDataApi } from "@/data/sectorsData";
import { useSectors } from "@/context/SectorsContext";
import DisplayNavContent from "./DisplayNavContent";

const Sectors = () => {
    const { activeSector, setActiveSector, sectorHashValue } = useSectors();
    const sectorsData = sectorsDataApi;

    return (
        <DisplayNavContent
            activeContent={activeSector}
            setActiveContent={setActiveSector}
            header="Our Sectors"
            hashValue={sectorHashValue}
            data={sectorsData}
        />
    );
};

export default Sectors;
