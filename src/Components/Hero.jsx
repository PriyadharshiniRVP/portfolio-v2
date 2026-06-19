
import profile from '../assets/cat.png'

function Hero(){
    return (

        <section id="home" className="home"  data-aos="fade-up">
            <div className="hero-image-container">
                <img src={profile} className='hero-image'/>
            </div>

            <div className="hero-content" >
            <h2>hey,<span className='priya'>priya</span> here <span className="wave">👋</span></h2> 
             <h3>Software Development | Computer Science</h3>
            <p>Software Engineer,I like to build things to make our lives easier.
                I am Looking for roles to contribute to real world projects and continue my learning.
            </p>
            </div>

            


        </section>
    )
}

export default Hero