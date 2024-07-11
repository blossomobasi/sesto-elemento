import NavBar from "./NavBar";
import Contact from "./Contact";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Contact />
        </div>
    );
};

export default PageLayout;
