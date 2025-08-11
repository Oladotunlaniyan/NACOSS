import Image from "next/image"
import { Heart, Star, Badge, Plus } from "lucide-react"
import { motion } from "framer-motion"
import Founder from '../../assets/founder.png'

const highlights = [
  {
    icon: Heart,
    title: "Caring & Trusted Practitioner",
    description: "Puts patients first with compassionate, personalized care.",
    color: "#00309B",
  },
  {
    icon: Star,
    title: "Comprehensive Health Services",
    description: "Primary care, chronic disease management, and telehealth options.",
    color: "#00309B",
  },
  {
    icon: Badge,
    title: "Licensed Across 5 States",
    description: "Board-certified with advanced training for quality assurance.",
    color: "#00309B",
  },
  {
    icon: Plus,
    title: "Patient-Focused Approach",
    description: "Evidence-based care designed around your unique health goals.",
    color: "#00309B",
  },
]

export default function AboutFounder() {
  return (
    <section className="py-10 px-4 relative">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl font-medium mb-6 text-center"
        >
          About our founder
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <Image
            src={Founder}
            alt="Motunrayo Ofi-Oduolaye, Family Nurse Practitioner"
            className="bg-[#F0F7F0] rounded-2xl max-w-sm w-full"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#D6D6D633] p-4 mb-6 mx-2"
        >
          <p className="leading-relaxed text-sm mb-3">
            <strong>Motunrayo Ofi-Oduolaye</strong> is a compassionate Family Nurse Practitioner (FNP-BC) with
            extensive experience in primary, acute, and preventive care. A graduate of Samuel Merritt University
            (Oakland, CA) and board-certified by ANCC, she specializes in chronic disease management, telehealth,
            and value-based care models. Her practice spans outpatient clinics, retail settings, and disability
            evaluations, with a strong focus on patient-centered care and health equity.
          </p>
          <button className="font-medium text-sm underline underline-offset-4">
            Read More
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          className="bg-[#FBA9A933] text-[#5D1600] text-md font-medium p-4 rounded-2xl mb-4 mx-2"
        >
          <div className="font-bold text-lg">15+</div>
          <div className="leading-tight">
            Years of experience, (over 5 years as FNP-BC + more than a decade as RN)
          </div>
        </motion.div>

        <div className="space-y-4 bg-[#A9C3FB33] rounded-2xl p-4 text-[#00309B] mx-2">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: highlight.color }} />
                </motion.div>
                <div>
                  <p><span className="font-semibold mb-1">{highlight.title}</span> - {highlight.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="absolute left-40 text-3xl md:text-4xl font-medium z-20"
        >
          About our founder
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center p-5"
        >
          <Image
            src={Founder}
            alt="Motunrayo Ofi-Oduolaye, Family Nurse Practitioner"
            className="bg-[#F0F7F0] rounded-2xl"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl max-w-sm absolute top-70 bg-[#D6D6D633] p-4 mx-40"
        >
          <p className="leading-relaxed text-md">
            <strong>Motunrayo Ofi-Oduolaye</strong> is a compassionate Family Nurse Practitioner (FNP-BC) with
            extensive experience in primary, acute, and preventive care. A graduate of Samuel Merritt University
            (Oakland, CA) and board-certified by ANCC, she specializes in chronic disease management, telehealth,
            and value-based care models. Her practice spans outpatient clinics, retail settings, and disability
            evaluations, with a strong focus on patient-centered care and health equity.
          </p>
          <button className="font-medium text-sm underline underline-offset-4">
            Read More
          </button>
        </motion.div>

        {/* Highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-4 bg-[#A9C3FB33] absolute right-20 bottom-20 rounded-2xl p-4 text-[#00309B] max-w-md"
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 10 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: highlight.color }} />
                </motion.div>
                <div>
                  <p><span className="font-semibold mb-1">{highlight.title}</span> - {highlight.description}</p>
                </div>
              </motion.div>
            )
          })}
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-140 rounded-2xl z-10 bg-[#FBA9A933] text-[#5D1600] text-md font-medium p-4"
          >
            <div className="font-bold text-lg">15+</div>
            <div className="leading-tight">
              Years of experience, (over 5 years as
              <br />
              FNP-BC + more than a decade as RN)
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
