import AboutMain from "@/components/AboutMain";
import Clients from "@/components/Clients";
import CoreValues from "@/components/CoreValues";
import OurMotivation from "@/components/OurMotivation";
import PageLayout from "@/components/PageLayout";
import Vision_Mission from "@/components/Vision_Mission";
import WhyUs from "@/components/WhyUs";

const AboutPage = () => {
    return (
        <PageLayout>
            <AboutMain />
            <Vision_Mission />
            <CoreValues />
            <OurMotivation />
            <WhyUs />
            <Clients />
        </PageLayout>
    );
};

export default AboutPage;
