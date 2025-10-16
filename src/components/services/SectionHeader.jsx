import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <>
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
        {title}
      </h2>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto 40px",
          textAlign: "center",
        }}
      >
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
