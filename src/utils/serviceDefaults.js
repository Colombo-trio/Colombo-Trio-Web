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

export { getServiceDetails };