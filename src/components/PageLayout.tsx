import NavBar from "./NavBar";
import Contact from "./Contact";
import { ServicesProvider } from "@/context/ServicesContext";
import { SectorsProvider } from "@/context/SectorsContext";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SectorsProvider>
            <ServicesProvider>
                <NavBar />
                {children}
                <Contact />
            </ServicesProvider>
        </SectorsProvider>
    );
};

export default PageLayout;
