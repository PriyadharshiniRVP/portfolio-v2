

function About(){
     const tech=["Java","Python","Springboot","Django","React"]   
    return(
        <section classname="intro">
            <h2>about me/</h2>
            <p>I am a Computer Science Graduate who loves to solve problems and make the work efficient with the help of technology.I have solved 250+ Problems in Leetcode. I am passionate about Software Development.
                I love to build cute little things using the techstacks I know.</p>

            <h3>Technologies I am working with:</h3> 
           
            <div classname="skills">
                {
                    tech.map((skill)=>(
                        <span key={skill} classname="skillname">{skill}</span>
                    )
                )
                }

            </div>
            
        </section>
    )
}

export default About