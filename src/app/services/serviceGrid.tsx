"use client";
import React from 'react';
import { motion} from 'framer-motion';
import ServiceCard from './serviceCard';
import { 
  TestTube, 
  Briefcase, 
  Heart, 
  Stethoscope,
  Eye,
  Activity
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "In-house Testing",
      description: "Comprehensive diagnostic testing performed on-site for quick results and immediate care planning.",
      icon: <TestTube className="h-8 w-8" />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      tags: ["HIV", "COVID", "Drug Testing"],
      details: {
        duration: "15-60 minutes",
        pricing: "Starting at $45",
        includes: [
          "Blood work and lab panels",
          "Urine analysis and screening",
          "Rapid diagnostic tests",
          "Same-day results for most tests",
          "Digital result delivery",
          "Physician consultation included"
        ],
        preparation: [
          "Fasting may be required for certain tests",
          "Bring valid ID and insurance card",
          "List of current medications"
        ]
      }
    },
    {
      id: 2,
      title: "Pre-Employment Exams",
      description: "Thorough medical evaluations to ensure workplace safety and meet employer requirements.",
      icon: <Briefcase className="h-8 w-8" />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      tags: ["DOT Physical", "Tuberculosis Skin Test"],
      details: {
        duration: "30-45 minutes",
        pricing: "Starting at $85",
        includes: [
          "Complete physical examination",
          "Vision and hearing tests",
          "Drug and alcohol screening",
          "Fitness for duty assessment",
          "Medical clearance documentation",
          "DOT physicals available"
        ],
        preparation: [
          "Bring government-issued photo ID",
          "List of current medications",
          "Previous medical records if applicable"
        ]
      }
    },
    {
      id: 3,
      title: "General Wellness & Preventive Care",
      description: "Comprehensive health maintenance and disease prevention services for optimal long-term health.",
      icon: <Heart className="h-8 w-8" />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      tags: ["UTI", "Pink Eye", "Seasonal Allergies"],
      details: {
        duration: "45-60 minutes",
        pricing: "Starting at $120",
        includes: [
          "Annual physical examinations",
          "Preventive screenings",
          "Immunizations and vaccinations",
          "Health risk assessments",
          "Lifestyle counseling",
          "Chronic disease management"
        ]
      }
    },
    {
      id: 4,
      title: "General Wellness & Preventive Care",
      description: "Complete healthcare for patients of all ages, from infants to seniors, with personalized treatment plans.",
      icon: <Stethoscope className="h-8 w-8" />,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      tags: ["UTI", "Pink Eye", "Seasonal Allergies"],
      details: {
        duration: "30-45 minutes",
        pricing: "Starting at $95",
        includes: [
          "Acute illness treatment",
          "Chronic condition management",
          "Pediatric and geriatric care",
          "Minor injury treatment",
          "Medication management",
          "Referral coordination"
        ]
      }
    },
    {
      id: 5,
      title: "General Wellness & Preventive Care",
      description: "Workplace health services to maintain employee wellness and comply with safety regulations.",
      icon: <Eye className="h-8 w-8" />,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      tags: ["UTI", "Pink Eye", "Seasonal Allergies"],
      details: {
        duration: "20-90 minutes",
        pricing: "Contact for pricing",
        includes: [
          "Work injury evaluation and treatment",
          "Workers' compensation exams",
          "Occupational therapy referrals",
          "Return-to-work assessments",
          "OSHA compliance testing",
          "Workplace wellness programs"
        ]
      }
    },
    {
      id: 6,
      title: "General Wellness & Preventive Care",
      description: "Early detection services using advanced technology to identify health conditions before symptoms appear.",
      icon: <Activity className="h-8 w-8" />,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
      tags: ["UTI", "Pink Eye", "Seasonal Allergies"],
      details: {
        duration: "30-120 minutes",
        pricing: "Varies by test",
        includes: [
          "Cancer screenings",
          "Cardiovascular assessments",
          "Bone density testing",
          "Metabolic panel testing",
          "Hormone level evaluation",
          "Allergy testing"
        ],
        preparation: [
          "Fasting required for some tests",
          "Specific instructions provided per test",
          "Insurance authorization may be needed"
        ]
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-medium text-hero-text mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our experienced medical team provides a full range of healthcare services 
            with state-of-the-art equipment and personalized care for every patient.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.bgColor}
              iconColor={service.iconColor}
              tags={service.tags}
              details={service.details}
            />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;