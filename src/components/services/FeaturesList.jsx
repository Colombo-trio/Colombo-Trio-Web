import React from 'react'

const FeaturesList = ({features, theme}) => {
  return (
    <ul style={{ listStyle: "none", marginBottom: "30px", padding: 0 }}>
        {features.map((feature, idx) => (
            <li
                key={idx}
                style={{
                    padding: "12px 0",
                    paddingLeft: "35px",
                    position: "relative",
                    color: theme === "dark" ? "#e2e8f0" : "#1e293b",
                    fontSize: "1rem",
                }}
                >
                <span
                    style={{
                    position: "absolute",
                    left: 0,
                    color: "#3b82f6",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    }}
                >
                    ✓
                </span>
                {feature}
            </li>
        ))}
    </ul>
  )
}

export default FeaturesList;
