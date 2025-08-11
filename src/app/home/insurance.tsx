"use client";
import React from "react";
import Image from "next/image";
import insuranceCompany from "../../assets/InsuranceCompanies.png";
import { Check, Goal } from "lucide-react";
import { motion } from "framer-motion";

interface YearlyPlanCardProps {
  price?: string;
}

const YearlyPlanCard: React.FC<YearlyPlanCardProps> = ({ price = "XX" }) => {
  const features = [
    "6 visits & in-house testing",
    "2 free virtual consultations",
    "Covers 1 extra family member",
    "Prescription refill authorization",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-lg mx-auto bg-gray-50 border-[#9A9A9A] border-1 shadow-md rounded-xl"
    >
      <div className="p-8">
        {/* Icon */}
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center"
          >
            <Goal className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Our Yearly Plan</h2>
          <p className="text-gray-600 leading-relaxed">
            Get ahead of emergency and regular checkups by subscribing to our curated plan!
          </p>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-slate-800">${price}</span>
            <span className="text-gray-500 text-lg">monthly payment</span>
          </div>
        </motion.div>

        {/* Features List */}
        <div className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-slate-700 leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="cursor-pointer w-full bg-slate-700 hover:bg-slate-800 text-white py-3 text-lg font-semibold rounded-xl"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
};

const InsurancePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 font-Inter font-medium">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl p-3 font-medium">Insurance & Our Payment Plan</h1>
        <p className="p-2">We accept most insurance plans</p>
        <Image className="py-2" src={insuranceCompany} alt="insurance companies" />
      </motion.div>

      <YearlyPlanCard price="XXX" />
    </div>
  );
};

export default InsurancePage;
