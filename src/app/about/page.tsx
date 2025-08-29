import AboutTitle from "./title"
import Title from "@/components/title"
import AboutSection1 from "./aboutSection1"
import AboutSection2 from "./aboutSection2"
import LeadershipSection from "./leadershipSection"
import HowItWorksSection from "./howItWorksSection"
import CareerOpportunitiesSection from "./careerOpportunitiesSection"
import NacossSection from "./NacossSection"

export default function ServicesPage() {
    return (
        <div>
            <AboutTitle />
            <AboutSection1 />
            <AboutSection2 />
            <Title title="LEADERSHIP" />
            <LeadershipSection />
            <Title title="CAREER OPPORTUNITIES" />
            <HowItWorksSection />
            <CareerOpportunitiesSection />

            {/* career opportunities */}
            {/* tiny-title at the top */}
            {/* cards of different career paths in tech; Data Science, Software Engineering */}
            <Title title="NACOSS" />
            <NacossSection />


        </div>
    )
}