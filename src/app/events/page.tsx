import Title from "@/components/HeaderTitle"
import CupProgressSection from "./cupProgressSection"
import UpcomingEventsSection from "./upcomingEventsSection"

export default function ServicesPage() {
    return (
        <div>
            <Title  headerTitle="EVENTS"/>
            <CupProgressSection />
            <UpcomingEventsSection />
        </div>
    )
}