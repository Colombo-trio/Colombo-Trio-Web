import React, { useState } from "react";
import "../App.css";

import chatwithfunds from "../images/chatwithfunds.png";
import tnsl from "../images/tnsl.png";

const Portfolio = ({ theme, setTheme }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const portfolioData = [
    {
      id: 1,
      title: "Chat with Funds",
      description:
        "Explore a wide range of verified funding options available for nonprofits, small businesses, startups, and individuals - all from reliable foundations and government programs.",
      image: chatwithfunds,
      owner: "Nipun Lakshitha",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveLink: "https://www.chatwithfunds.com/",
    },
    {
      id: 2,
      title: "Project Name",
      description: "Project description",
      image: "/project-image.jpg",
      owner: "John Doe",
      contributors: ["Jane Smith", "Mike Johnson", "Sarah Wilson"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      github: "https://github.com/username/repo",
      liveLink: "https://project-demo.com",
    },
    {
      id: 3,
      title: "The Naturalist Sri Lanka",
      description:
        "Experience the wilderness in comfort at our specially designed campsite",
      image: tnsl,
      owner: "Nipun Lakshitha",
      techStack: ["React", "Node.js"],
      liveLink: "https://tnaturalistsl.netlify.app/",
    },
    {
      id: 4,
      title: "Project Name",
      description: "Project description",
      image: "/project-image.jpg",
      owner: "John Doe",
      contributors: ["Jane Smith", "Mike Johnson", "Sarah Wilson"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      github: "https://github.com/username/repo",
      liveLink: "https://project-demo.com",
    },
  ];

  return (
    <div
      className="min-h-screen w-full py-20 px-5 md:px-10"
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        backgroundColor: theme === "dark" ? "#111c22" : "#f8fafc",
        color: theme === "dark" ? "white" : "#0d171b",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-8">
          <h1
            className="text-2xl md:text-4xl font-bold"
            style={{ color: theme === "dark" ? "white" : "#0d171b" }}
          >
            Our Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-103"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Card */}
              <div
                className="relative overflow-hidden rounded-2xl drop-shadow-lg hover:drop-shadow-blue-500/50 transition-all duration-300 h-full flex flex-col"
                style={{
                  backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                  border: `1px solid ${
                    theme === "dark" ? "#334155" : "#e2e8f0"
                  }`,
                }}
              >
                {/* Project Image */}
                <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300" />

                  {/* Tech Stack Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {project.techStack?.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor:
                            theme === "dark"
                              ? "rgba(30, 41, 59, 0.8)"
                              : "rgba(255, 255, 255, 0.9)",
                          color: theme === "dark" ? "#cbd5e1" : "#475569",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-xl font-bold leading-tight"
                      style={{
                        color: theme === "dark" ? "#f1f5f9" : "#0f172a",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4 opacity-80 flex-grow"
                    style={{
                      color: theme === "dark" ? "#cbd5e1" : "#475569",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Project Metadata */}
                  <div className="space-y-2 mt-auto">
                    {/* Project Owner */}
                    {project.owner && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="opacity-60">Owner:</span>
                        <span className="font-medium">{project.owner}</span>
                      </div>
                    )}

                    {/* Contributors */}
                    {project.contributors &&
                      project.contributors.length > 0 && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="opacity-60">Team:</span>
                          <div className="flex -space-x-2">
                            {project.contributors
                              .slice(0, 3)
                              .map((contributor, index) => (
                                <div
                                  key={index}
                                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium"
                                  style={{
                                    backgroundColor:
                                      theme === "dark" ? "#334155" : "#e2e8f0",
                                    borderColor:
                                      theme === "dark" ? "#1e293b" : "#ffffff",
                                    color:
                                      theme === "dark" ? "#cbd5e1" : "#475569",
                                  }}
                                  title={contributor}
                                >
                                  {contributor.charAt(0).toUpperCase()}
                                </div>
                              ))}
                            {project.contributors.length > 3 && (
                              <div
                                className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium"
                                style={{
                                  backgroundColor:
                                    theme === "dark" ? "#334155" : "#e2e8f0",
                                  borderColor:
                                    theme === "dark" ? "#1e293b" : "#ffffff",
                                  color:
                                    theme === "dark" ? "#cbd5e1" : "#475569",
                                }}
                              >
                                +{project.contributors.length - 3}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GitHubIcon theme={theme} size={16} />
                          Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLinkIcon theme={theme} size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            theme={theme}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

// Keep your existing Modal and Icon components the same...
const ProjectModal = ({ project, theme, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{
          backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
          border: `1px solid ${theme === "dark" ? "#334155" : "#e2e8f0"}`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
          style={{
            backgroundColor:
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        >
          <CloseIcon />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Image */}
          <div
            className="h-64 md:h-full bg-center bg-no-repeat bg-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* Project Details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="opacity-80 mb-6">{project.description}</p>

            {/* Tech Stack */}
            {project.techStack && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor:
                          theme === "dark" ? "#334155" : "#e2e8f0",
                        color: theme === "dark" ? "#cbd5e1" : "#475569",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Team */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {project.owner && (
                <div>
                  <h3 className="font-semibold mb-2">Project Owner</h3>
                  <p className="opacity-80">{project.owner}</p>
                </div>
              )}

              {project.contributors && project.contributors.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Contributors</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.contributors.map((contributor, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm rounded opacity-80"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#334155" : "#e2e8f0",
                        }}
                      >
                        {contributor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: theme === "dark" ? "#334155" : "#e2e8f0",
                    color: theme === "dark" ? "#cbd5e1" : "#475569",
                  }}
                >
                  <GitHubIcon theme={theme} />
                  View Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: "#3b82f6" }}
                >
                  <ExternalLinkIcon theme={theme} />
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const GitHubIcon = ({ theme, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = ({ theme, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
  </svg>
);

export default Portfolio;
