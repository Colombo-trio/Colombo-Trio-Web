import React from "react";

const ServicesHero = ({ theme }) => {
  return (
    <section
      style={{
        padding: "100px 20px 80px",
        textAlign: "center",
        background:
          theme === "dark"
            ? "#111c22"
            : "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "20px",
          }}
        >
          Our Services
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            color: "#94a3b8",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          We offer cutting-edge software development solutions to transform your
          business and drive growth.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
