"use client";
import { TestTube, Briefcase, Heart, Stethoscope, Eye, Activity, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { id: 1, title: "In-house Testing", icon: TestTube, bgColor: "bg-blue-100", iconColor: "text-blue-600", tags: ["HIV", "COVID", "Drug Testing"] },
  { id: 2, title: "Pre-Employment Exams", icon: Briefcase, bgColor: "bg-green-100", iconColor: "text-green-600", tags: ["DOT Physical", "Tuberculosis Skin Test"] },
  { id: 3, title: "General Wellness & Preventive Care", icon: Heart, bgColor: "bg-purple-100", iconColor: "text-purple-600", tags: ["UTI", "Pink Eye", "Seasonal Allergies"] },
  { id: 4, title: "General Wellness & Preventive Care", icon: Stethoscope, bgColor: "bg-pink-100", iconColor: "text-pink-600", tags: ["UTI", "Pink Eye", "Seasonal Allergies"] },
  { id: 5, title: "General Wellness & Preventive Care", icon: Eye, bgColor: "bg-yellow-100", iconColor: "text-yellow-600", tags: ["UTI", "Pink Eye", "Seasonal Allergies"] },
  { id: 6, title: "General Wellness & Preventive Care", icon: Activity, bgColor: "bg-gray-100", iconColor: "text-gray-600", tags: ["UTI", "Pink Eye", "Seasonal Allergies"] },
];

export default function ServicesSection() {
  return (
    <section className="p-4 font-Inter">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight"
          >
            We Offer a host of
            <br />
            Comprehensive services
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${service.bgColor} border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon with animation */}
                  <div className="mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 + 0.1 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm"
                    >
                      <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 leading-tight">{service.title}</h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {service.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="bg-white/70 cursor-pointer rounded-3xl text-xs px-3 py-2 font-medium"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Link
                    href="/services"
                    className="flex justify-center py-2 rounded-2xl w-full bg-white border-[#23375F] hover:bg-white/50 border-1 cursor-pointer font-medium"
                  >
                    <SquareArrowOutUpRight className="p-1" />
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
