import React from "react";

const ProcessStepCard = ({ step, theme }) => {
  return (
    <div
      style={{
        background: theme === "dark" ? "#374151" : "white",
        padding: "40px 30px",
        borderRadius: "15px",
        border: `1px solid ${
          theme === "dark" ? "rgba(148, 163, 184, 0.1)" : "#e2e8f0"
        }`,
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: "0 auto 20px",
          color: "white",
        }}
      >
        {step.num}
      </div>

      <h3
        style={{
          fontSize: "1.3rem",
          marginBottom: "10px",
          color: theme === "dark" ? "#f1f5f9" : "#0d171b",
          textAlign: "center",
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.95rem",
          textAlign: "center",
        }}
      >
        {step.desc}
      </p>
    </div>
  );
};

export default ProcessStepCard;
