import Hero from "./hero"
import ServicesGrid from "./serviceGrid"
import Appointment from "./appointment"

export default function ServicesPage (){
    return(
        <div>
            <Hero />
            <ServicesGrid />
            <Appointment />
        </div>
    )
}