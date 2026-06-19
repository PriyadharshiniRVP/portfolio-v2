
import github from '../assets/github.png'
function Projects(){
    return(
    <section className="projects" id="projects"  data-aos="fade-up">
        <h2>projects/</h2>
        <div className='project-grid'>
        <div className="project">
    <div className="project-header">
        <h4 className='project-name'>Personal Portfolio Website</h4>
        <a href="https://github.com/PriyadharshiniRVP/portfolio-v2"><img src={github} className='sm'/></a>
    </div>

    <ul>
        <li>Developed a personal portfolio website using React and Vite to showcase projects, skills, and experience.</li>
        
        <li>Built reusable React components including Navbar, Hero, About, Experience, Projects, and Contact sections.Implemented smooth navigation, component-based architecture, and modern CSS styling.</li>
    <br></br>
    <li>React.js, Vite</li>
    
    </ul>


</div>
        <div className="project">
            <div className="project-header">
                <h4 className='project-name'>Id Card Generator System</h4>
                <a href="https://github.com/PriyadharshiniRVP/idcardgen"><img src={github} className='sm'/></a>
            </div>
            <ul>
                <li> Built a Spring Boot REST API backend to automate student record management and ID card generation in under
30 seconds.
                
                 Implemented data validation, error handling, and entity mapping using Spring Data JPA and Hibernate</li>

                 <br></br>
                <li>Java, SpringBoot, PostgreSQL</li>
            </ul>
           
        </div>

         <div className="project">
            <div className="project-header">
                <h4 className='project-name'>Frustation Detection System</h4>
                <a href="https://github.com/PriyadharshiniRVP/CSE-2022-26-Batch38"><img src={github} className='sm'/></a>
            </div>
            <ul>
                <li> Built backend AI pipeline detecting developer frustration using OpenFace facial emotion recognition and keystroke
dynamics model.
 Integrated AWS Nova as the conversational AI backend powering a gamified chatbot support assistant.
            </li>
        
            <br></br>
         <li>Python,OpenFace,LightGBM</li>
            </ul>
        </div>


        <div className="project">
            <div className="project-header">
                <h4  className='project-name'>Inventory Management System</h4>
                <a href="https://github.com/PriyadharshiniRVP/InventoryandBillingSystem"><img src={github} className='sm'/></a>
            </div>
            <ul>
                <li> Designed and built Django backend with MySQL implementing FIFO stock tracking logic and automated invoice
generation for a real interior design client.
  Reduced client’s daily operational effort from 4 hours to 30 minutes through backend automation of inventory and
billing workflows.</li>
<br></br>
<li>Python,Django,HTML and CSS</li>
               
            </ul>
        </div>
        </div>


    </section>

    


    );
}

export default Projects