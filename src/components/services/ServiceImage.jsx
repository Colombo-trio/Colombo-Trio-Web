import React from "react";

const ServiceImage = ({ service, theme }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "5rem",
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${
          theme === "dark" ? "rgba(148, 163, 184, 0.1)" : "#e2e8f0"
        }`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("${service.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // opacity: 0.3,
        }}
      />
    </div>
  );
};

export default ServiceImage;
