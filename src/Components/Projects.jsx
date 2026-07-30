import { useState } from 'react';
import github from '../assets/github.png';
import web from '../assets/weblink.png';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: "SOC Memory Copilot",
      description: "AI-powered cybersecurity assistant with persistent memory that remembers past investigations, connects related incidents, and becomes smarter over time using Cognee's hybrid graph-vector memory layer.",
      tech: ["React", "MongoDB", "Cognee", "Python", "Threat Intelligence APIs"],
      highlights: [
        "Built persistent memory layer for cybersecurity investigations using Cognee",
        "Integrated graph-vector memory with remember() and recall() operations",
        "Developed React dashboard with real-time alert monitoring and investigation history",
        "Connected multiple threat intelligence APIs for comprehensive threat analysis"
      ],
      github: "https://github.com/PriyadharshiniRVP/soc-memory-copilot",
      live: null,
      badge: "Hackathon Project"
    },
    {
      id: 2,
      name: "CodeBuddy: Emotion-Aware Developer Assistant",
      description: "AI assistant that detects developer frustration using keystroke dynamics and facial expression analysis. Provides real-time debugging guidance through Amazon Nova Lite on AWS Bedrock.",
      tech: ["Amazon Nova Lite", "AWS Bedrock", "LightGBM", "DeepFace", "OpenCV", "Python"],
      highlights: [
        "Implemented multimodal frustration detection using LightGBM fusion model",
        "Integrated Amazon Nova Lite for real-time AI assistance and debugging guidance",
        "Combined keystroke dynamics (speed, backspaces, pauses) with facial emotion detection",
        "Built automated assistant that activates when frustration threshold is exceeded"
      ],
      github: "https://github.com/PriyadharshiniRVP/CSE-2022-26-Batch38",
      live: null,
      badge: "AWS Builder Center"
    },
    {
      id: 3,
      name: "Inventory Management System",
      description: "Django-based inventory and billing system with FIFO stock tracking and automated invoice generation. Reduced client's daily operational effort from 4 hours to 30 minutes.",
      tech: ["Python", "Django", "MySQL", "HTML", "CSS"],
      highlights: [
        "Designed and built Django backend with MySQL database for inventory tracking",
        "Implemented FIFO (First-In-First-Out) stock tracking logic",
        "Automated invoice generation for real interior design client",
        "Reduced operational time from 4 hours to 30 minutes daily"
      ],
      github: "https://github.com/PriyadharshiniRVP/InventoryandBillingSystem",
      live: null,
      badge: "Client Project"
    },
    {
      id:4,
      name:"Id Card Generator",
      description: "A web-based application for managing student records and generating ID cards. The system allows administrators to perform CRUD operations on student data and maintain records in a PostgreSQL database.",
      tech:["Java","Springboot","PostgreSQL","HTML","CSS"],
      highlights:[
        "Designed and Developed a springboot application with CRUD Features",
        "Used PostgreSQL to store the database and implemented the database design",
        "Main features include adding,deleting and updating the student records with generating id cards"
      ],
      github:"https://github.com/PriyadharshiniRVP/idcardgen",
      live:null,
      badge:"Fun Project"
    
    }
  ];

  const totalSlides = projects.length;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <div className="projects-header">
        <h2>projects/</h2>
        <p className="projects-subtitle">Building solutions at the intersection of AI, security, and developer experience</p>
      </div>

      <div className="carousel-wrapper">
        <button 
          className="carousel-arrow prev" 
          onClick={goToPrev}
          aria-label="Previous project"
        >
          ‹
        </button>

        <div className="carousel-container">
          <div 
            className="carousel-track" 
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="carousel-slide">
                <div className="project-card">
                  <div className="project-badge">{project.badge}</div>
                  
                  <div className="project-header">
                    <h4 className="project-name">{project.name}</h4>
                    <div className="project-links">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <img src={web} className="sm" alt="Live Demo" title="Live Demo" />
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <img src={github} className="sm" alt="GitHub Repository" title="View Source Code" />
                      </a>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <ul>
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-arrow next" 
          onClick={goToNext}
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      <div className="carousel-controls">
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <span className="carousel-indicator">
          {currentIndex + 1} / {projects.length}
        </span>
      </div>
    </section>
  );
}

export default Projects;