import React from 'react'

const TechStack = ({ techStack, theme }) => {
  return (
    // Tech Stack
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "30px",
      }}
    >
      {techStack.map((tech, idx) => (
        <span
          key={idx}
          style={{
            padding: "8px 16px",
            background:
              theme === "dark"
                ? "rgba(59, 130, 246, 0.2)"
                : "#dbeafe",
            color: theme === "dark" ? "#93c5fd" : "#3b82f6",
            borderRadius: "20px",
            fontSize: "0.85rem",
            fontWeight: 500,
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};


export default TechStack
