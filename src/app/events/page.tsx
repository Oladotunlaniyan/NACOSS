import Title from "@/components/HeaderTitle"
import CupProgressSection from "./cupProgressSection"
import UpcomingEventsSection from "./upcomingEventsSection"
import FrameHighlightsSection from "./frameHighlightsSection"

export default function ServicesPage() {
    return (
        <div>
            <Title  headerTitle="EVENTS"/>
            <CupProgressSection />
            <UpcomingEventsSection />
            <FrameHighlightsSection />
        </div>
    )
}