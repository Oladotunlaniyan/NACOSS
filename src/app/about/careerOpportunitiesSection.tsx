import React from 'react';
import Image from "next/image";
import dataScienceImg from "@/assets/career_data_science.svg";
import softwareEngineeringImg from "@/assets/career_software_engineering.svg";
import devopsImg from "@/assets/career_devops.svg";
import artificialIntelligenceImg from "@/assets/career_ai.svg";
import cyberSecurityImg from "@/assets/career_cyber_security.svg";

const CareerOpportunities = () => {
  const careerPaths = [
    { name: "Data Science", image: dataScienceImg },
    { name: "Software Engineering", image: softwareEngineeringImg },
    { name: "DevOps", image: devopsImg },
    { name: "Artificial Intelligence", image: artificialIntelligenceImg },
    { name: "Cyber Security", image: cyberSecurityImg },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {careerPaths.map((path, index) => (
          <div key={index} className="flex flex-col items-center text-center p-2 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative w-full h-36 sm:h-40 md:h-48 overflow-hidden rounded-md">
              <Image
                src={path.image}
                alt={path.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="mt-3 text-sm sm:text-base font-medium text-gray-800">
              {path.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerOpportunities;