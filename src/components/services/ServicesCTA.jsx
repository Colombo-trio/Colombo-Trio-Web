import React from "react";
import CTAButton from "./CTAButton";
import SecondaryButton from "./SecondaryButton";
import ButtonGroup from "./ButtonGroup";

const ServicesCTA = ({ theme }) => {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: theme === "dark" 
          ? "#111c22"
          : "#ffffff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            marginBottom: "20px",
            color: theme === "dark" ? "#f1f5f9" : "#0d171b",
          }}
        >
          Ready to Start Your Project?
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          Let's discuss how we can help transform your business with innovative technology solutions
        </p>
        
        <ButtonGroup>
          <CTAButton>Request a Quote</CTAButton>
          <SecondaryButton theme={theme}>View Portfolio</SecondaryButton>
        </ButtonGroup>
      </div>
    </section>
  );
};

export default ServicesCTA;