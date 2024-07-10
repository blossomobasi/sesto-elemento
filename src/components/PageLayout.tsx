import NavBar from "./NavBar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default PageLayout;
