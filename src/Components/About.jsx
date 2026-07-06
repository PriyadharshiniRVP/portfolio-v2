function About() {
  const tech = ["Python", "FastAPI", "Django", "React", "Java", "Spring Boot", "AWS", "PostgreSQL"]

  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="about-header">
        <h2>about me/</h2>
        <p className="about-subtitle">Passionate about building impactful solutions</p>
      </div>

      <div className="about-content">
        <p>
          I am Priyadharshini, a Computer Science graduate who thrives on solving 
          complex problems and making workflows more efficient through technology. 
          With over 250+ problems solved on LeetCode, I bring a strong analytical 
          mindset to every project I undertake.
        </p>
        <p>
          I am passionate about full-stack development, AI, and cybersecurity. 
          I love building solutions that not only work but also make a difference — 
          whether it's automating manual processes, detecting cyber threats, or 
          creating emotion-aware developer tools.
        </p>
      </div>

      <div className="skills-section">
        <h3 className="skills-title">Technologies I work with</h3>
        <div className="skills-grid">
          {tech.map((skill, index) => (
            <span
              key={skill}
              className="skillname"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About