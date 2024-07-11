import HomeMain from "@/components/HomeMain";
import PageLayout from "@/components/PageLayout";
import CoreValues from "@/components/CoreValues";
import WhyUs from "@/components/WhyUs";
import WhyUsFirstSlice from "@/components/WhyUsFirstSlice";
import WhyUsSecondSlice from "@/components/WhyUsSecondSlice";
import Clients from "@/components/Clients";

export default function HomePage() {
    return (
        <PageLayout>
            <HomeMain />
            <CoreValues />
            <WhyUs />
            <WhyUsFirstSlice />
            <WhyUsSecondSlice />
            <Clients />
        </PageLayout>
    );
}
