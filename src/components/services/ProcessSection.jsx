import React from "react";
import SectionHeader from "./SectionHeader";
import ProcessStepCard from "./ProcessStepCard";
import { processSteps } from "../../data/processStepsData";

const ProcessSection = ({ theme }) => {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: theme === "dark" ? "#111c22" : "#f9fafb",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader 
          title="Our Development Process"
          description="We follow a proven methodology to deliver exceptional results"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {processSteps.map((step) => (
            <ProcessStepCard key={step.num} step={step} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;