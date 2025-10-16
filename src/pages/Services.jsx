import React from "react";
import servicesData from "../data/servicesData.json";
import { getServiceDetails } from "../utils/serviceDefaults";
import ServicesHero from "../components/services/ServicesHero";
import ServiceDetailCard from "../components/services/ServiceDetailCard";
import ProcessSection from "../components/services/ProcessSection";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = ({ theme }) => {
  return (
    <div
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        background: theme === "dark" 
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        color: theme === "dark" ? "#e2e8f0" : "#000000",
        minHeight: "100vh",
      }}
    >
      <ServicesHero theme={theme} />

      {servicesData.services.map((service, index) => (
        <ServiceDetailCard
          key={service.id}
          service={service}
          details={getServiceDetails(service)}
          index={index}
          theme={theme}
        />
      ))}

      <ProcessSection theme={theme} />
      <ServicesCTA theme={theme} />
    </div>
  );
};

export default Services;