import React from "react";
import FeaturesList from "./FeaturesList";
import TechStack from "./TechStack";
import CTAButton from "./CTAButton";
import ServiceImage from "./ServiceImage";

const ServiceDetailCard = ({ service, details, index, theme }) => {
  const isEven = index % 2 === 0;
  const isReversed = index % 2 === 1 && window.innerWidth > 768;

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: isEven
          ? (theme === "dark" ? "#0f172a" : "#f8fafc")
          : (theme === "dark" ? "#1e293b" : "#ffffff"),
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <div style={{ order: isReversed ? 2 : 1 }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: theme === "dark" ? "#cbd5e1" : "#475569",
                marginBottom: "30px",
                lineHeight: "1.8",
              }}
            >
              {details.detailedDescription}
            </p>

            <FeaturesList features={details.detailedFeatures} theme={theme} />
            <TechStack techStack={details.techStack} theme={theme} />
            <CTAButton>Get Started →</CTAButton>
          </div>

          {/* Image */}
          <div style={{ order: isReversed ? 1 : 2 }}>
            <ServiceImage service={service} icon={details.icon} theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailCard;