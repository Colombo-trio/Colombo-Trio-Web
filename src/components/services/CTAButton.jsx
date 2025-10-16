import React from 'react'

const CTAButton = ({children}) => {
  return (
    <button
      style={{
        display: "inline-block",
        padding: "14px 32px",
        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontWeight: 600,
        fontSize: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow = "0 8px 30px rgba(59, 130, 246, 0.5)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 4px 20px rgba(59, 130, 246, 0.4)";
      }}
    >
      {children}
    </button>
  )
}

export default CTAButton;
