

function About(){
     const tech=["Java","Python","Springboot","Django","React"]   
    return(
        <section className="about" id="about" data-aos="fade-up">
            <h2>about me/</h2>
           
            <p>I am Priyadharshini I am a Computer Science Graduate who loves to solve problems and make the work efficient with the help of technology.I have solved 250+ Problems in Leetcode. I am passionate about Software Development.
                I love to build cute little things using the techstacks I know.</p>

            <h3>Technologies I am working with:</h3> 
           
            <div className="skills">
                {
                    tech.map((skill,index)=>(
                        <span key={skill} className="skillname" data-aos="zoom-in"
                        data-aos-delay={index * 200}>{skill}</span>
                    )
                )
                }

            </div>
            
        </section>
    )
}

export default About