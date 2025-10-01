import React, { useState } from "react";
import servicesData from "../data/servicesData.json";

const Services = ({ theme }) => {
  const [hoveredService, setHoveredService] = useState(null);

  // Default service details if not in JSON
  const getServiceDetails = (service) => ({
    detailedDescription: service.detailedDescription || "We craft exceptional solutions using modern frameworks and best practices. Our team specializes in building scalable, high-performance applications that deliver outstanding user experiences.",
    detailedFeatures: service.detailedFeatures || [
      "Modern framework expertise",
      "Scalable architecture design",
      "Responsive and optimized",
      "Cross-platform compatibility",
      "Performance optimization",
      "Seamless integrations"
    ],
    techStack: service.techStack || ["React", "Node.js", "MongoDB", "AWS"],
    icon: service.icon || "🚀"
  });

  return (
    <div
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        background: theme === "dark" 
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        color: theme === "dark" ? "#e2e8f0" : "#000000",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "100px 20px 80px",
          textAlign: "center",
          background: theme === "dark" 
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
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
            We offer cutting-edge software development solutions to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {servicesData.services.map((service) => (
              <div
                key={service.id}
                style={{
                  background: theme === "dark" 
                    ? "rgba(30, 41, 59, 0.5)"
                    : "rgba(255, 255, 255, 0.8)",
                  border: `1px solid ${theme === "dark" ? "rgba(148, 163, 184, 0.1)" : "#e2e8f0"}`,
                  borderRadius: "12px",
                  padding: "30px 20px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  transform: hoveredService === service.id ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: hoveredService === service.id 
                    ? "0 10px 30px rgba(59, 130, 246, 0.2)"
                    : "none",
                  borderColor: hoveredService === service.id 
                    ? "rgba(59, 130, 246, 0.3)"
                    : theme === "dark" ? "rgba(148, 163, 184, 0.1)" : "#e2e8f0",
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                  {getServiceDetails(service).icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "10px",
                    color: theme === "dark" ? "#f1f5f9" : "#0d171b",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#94a3b8",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {servicesData.services.map((service, index) => {
        const details = getServiceDetails(service);
        return (
          <section
            key={`detail-${service.id}`}
            style={{
              padding: "80px 20px",
              backgroundColor: index % 2 === 0 
                ? (theme === "dark" ? "#0f172a" : "#f8fafc")
                : (theme === "dark" ? "#1e293b" : "#ffffff"),
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
                  gap: "60px",
                  alignItems: "center",
                }}
              >
                {/* Text Content */}
                <div style={{ order: index % 2 === 1 && window.innerWidth > 768 ? 2 : 1 }}>
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
                    {service.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      color: theme === "dark" ? "#cbd5e1" : "#475569",
                      marginBottom: "30px",
                      lineHeight: "1.8",
                    }}
                  >
                    {details.detailedDescription}
                  </p>

                  {/* Features List */}
                  <ul style={{ listStyle: "none", marginBottom: "30px", padding: 0 }}>
                    {details.detailedFeatures.map((feature, idx) => (
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

                  {/* Tech Stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    {details.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "8px 16px",
                          background: theme === "dark" 
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
                    Get Started →
                  </button>
                </div>

                {/* Image */}
                <div style={{ order: index % 2 === 1 && window.innerWidth > 768 ? 1 : 2 }}>
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
                      border: `1px solid ${theme === "dark" ? "rgba(148, 163, 184, 0.1)" : "#e2e8f0"}`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("${service.image}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.3,
                      }}
                    />
                    <span style={{ position: "relative", zIndex: 10 }}>
                      {details.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            Our Development Process
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto 40px",
            }}
          >
            We follow a proven methodology to deliver exceptional results
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {[
              { num: "1", title: "Discovery", desc: "We understand your business goals, requirements, and challenges" },
              { num: "2", title: "Design", desc: "Create wireframes, prototypes, and visual designs for approval" },
              { num: "3", title: "Development", desc: "Build your solution using agile methodology with regular updates" },
              { num: "4", title: "Testing", desc: "Rigorous quality assurance to ensure bug-free performance" },
              { num: "5", title: "Deployment", desc: "Launch your project and ensure smooth transition to production" },
              { num: "6", title: "Support", desc: "Ongoing maintenance, updates, and technical support" },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: theme === "dark" 
                    ? "rgba(30, 41, 59, 0.5)"
                    : "white",
                  padding: "40px 30px",
                  borderRadius: "15px",
                  border: `1px solid ${theme === "dark" ? "rgba(148, 163, 184, 0.1)" : "#e2e8f0"}`,
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
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: "100px 20px",
          background: theme === "dark" 
            ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
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
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
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
              Request a Quote
            </button>
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
                e.target.style.background = theme === "dark" 
                  ? "rgba(59, 130, 246, 0.1)"
                  : "rgba(37, 99, 235, 0.1)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;