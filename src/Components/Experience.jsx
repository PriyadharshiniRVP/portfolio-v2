function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Infosys Springboard",
      tech: ["Python", "React.js"],
      highlights: [
        "Built Python-based cybersecurity dashboards for real-time threat monitoring and visualization",
        "Analyzed large-scale security datasets to detect anomalies across 50+ network nodes",
        "Collaborated with team members following SDLC practices to design and implement data-driven cybersecurity solutions"
      ]
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "DMS Foundry",
      tech: ["Python", "Django", "HTML", "CSS"],
      highlights: [
        "Built and deployed the company portfolio website from scratch using Django — now ranked #1 on Google for 'DMS Foundry'",
        "Implemented a Django Admin panel enabling non-technical staff to update website content independently",
        "Deployed on PythonAnywhere and coordinated with stakeholders for ongoing technical requirements"
      ]
    }
  ]

  return (
    <section className="experience" id="experience" data-aos="fade-up">
      <div className="experience-header">
        <h2>experience/</h2>
        <p className="experience-subtitle">Professional journey and hands-on contributions</p>
      </div>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-card-header">
              <h4 className="experience-title">{exp.title}</h4>
              <span className="experience-company">{exp.company}</span>
            </div>
            <ul className="experience-highlights">
              {exp.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <div className="experience-tech">
              {exp.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience