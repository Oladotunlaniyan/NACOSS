import AboutTitle from "./title"
import HeaderTitle from "@/components/HeaderTitle"
import Title from "@/components/Title"
import AboutSection1 from "./aboutSection1"
import AboutSection2 from "./aboutSection2"
import LeadershipSection from "./leadershipSection"
import HowItWorksSection from "./howItWorksSection"
import CareerOpportunitiesSection from "./careerOpportunitiesSection"
import NacossSection from "./NacossSection"

export default function ServicesPage() {
    return (
        <div>
            {/* <AboutTitle /> */}
            <HeaderTitle headerTitle="ABOUT"/>
            <AboutSection1 />
            <AboutSection2 />
            <Title title="LEADERSHIP" />
            <LeadershipSection />
            <Title title="CAREER OPPORTUNITIES" />
            <HowItWorksSection />
            <CareerOpportunitiesSection />
            <Title title="NACOSS" />
            <NacossSection />


        </div>
    )
}