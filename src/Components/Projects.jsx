import { useState } from 'react';
import github from '../assets/github.png';
import web from '../assets/weblink.png';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id : 1,
      name : "LRU-Cache Service",
      description : "A from-scratch implementation of an LRU (Least Recently Used) cache in Python, exposed as a REST API using FastAPI.",
      tech : ["python", "FastAPI","PyTest"],
      highlights : [
        "Demonstrates understanding of a classic data structures like doubly linked list and hashmap.",
        "Shows how to expose a data structure as a service via a REST API.",
        "Benchmarks hit/miss rate to measure cache effectiveness."
      ],
      github : "https://github.com/PriyadharshiniRVP/lru-cache",
      live : "https://lru-cache-sakg.onrender.com/docs",
      badge : "DSA"


    }
    ,
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