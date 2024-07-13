import NavBar from "./NavBar";
import Contact from "./Contact";
import { ServicesProvider } from "@/context/ServicesContext";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ServicesProvider>
            <NavBar />
            {children}
            <Contact />
        </ServicesProvider>
    );
};

export default PageLayout;
