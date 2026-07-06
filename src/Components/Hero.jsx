import profile from '../assets/cat.png'

function Hero() {
  return (
    <section id="home" className="home" data-aos="fade-up">
      <div className="hero-content">
        <h2>
          hey, <span className="priya">priya</span> here
        </h2>
        <h3 className="hero-title">Software Engineer | Problem Solver | Tech Enthusiast</h3>
        <p className="hero-description">
          I build things that make our lives easier. With a strong foundation in 
          full-stack development and AI, I create solutions that bridge the gap 
          between complex problems and elegant technology.
        </p>
        <p className="hero-description">
          Currently exploring roles where I can contribute to real-world projects, 
          collaborate with passionate teams, and continue my journey of lifelong learning.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="cta-button">View My Work</a>
          <a href="mailto:priyarama2209@gmail.com" className="cta-button secondary">Get in Touch</a>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={profile} className="hero-image" alt="Priyadharshini R" />
      </div>
    </section>
  )
}

export default Hero