import React from "react";

const SecondaryButton = ({ children, theme }) => {
  return (
    <button
      style={{
        padding: "14px 32px",
        background: "transparent",
        color: theme === "dark" ? "#3b82f6" : "#2563eb",
        border: `2px solid ${theme === "dark" ? "#3b82f6" : "#2563eb"}`,
        borderRadius: "10px",
        fontWeight: 600,
        fontSize: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.background =
          theme === "dark"
            ? "rgba(59, 130, 246, 0.1)"
            : "rgba(37, 99, 235, 0.1)";
        e.target.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "transparent";
        e.target.style.transform = "translateY(0)";
      }}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
