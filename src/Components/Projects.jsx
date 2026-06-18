
import github from '../assets/github.png'
function Projects(){
    return(
    <section className="projects" id="projects">
        <h2>projects/</h2>
        <div className="project">
            <div className="project-header">
                <h4 className='project-name'>Id Card Generator System</h4>
                <a href="https://github.com/PriyadharshiniRVP/idcardgen"><img src={github} className='sm'/></a>
            </div>
            <ul>
                <li> Built a Spring Boot REST API backend to automate student record management and ID card generation in under
30 seconds.</li>
                <li>Designed layered backend architecture (Controller → Service → Repository) with PostgreSQL integration, following
OOP and SOLID principles.</li>
                <li> Implemented data validation, error handling, and entity mapping using Spring Data JPA and Hibernate</li>
            </ul>
        </div>

         <div className="project">
            <div className="project-header">
                <h4 className='project-name'>Frustation Detection System</h4>
                <a href="https://github.com/PriyadharshiniRVP/CSE-2022-26-Batch38"><img src={github} className='sm'/></a>
            </div>
            <ul>
                <li> Built backend AI pipeline detecting developer frustration using OpenFace facial emotion recognition and keystroke
dynamics models.</li>
                <li> Integrated AWS Nova as the conversational AI backend powering a gamified chatbot support assistant.</li>
                <li>  Achieved 75% accuracy in frustration detection across combined emotion and keystroke analysis models.</li>
            </ul>
        </div>


        <div className="project">
            <div className="project-header">
                <h4  className='project-name'>Inventory Management System</h4>
                <a href="https://github.com/PriyadharshiniRVP/InventoryandBillingSystem"><img src={github} className='sm'/></a>
            </div>
            <ul>
                <li> Designed and built Django backend with MySQL implementing FIFO stock tracking logic and automated invoice
generation for a real interior design client.</li>
                <li>  Reduced client’s daily operational effort from 4 hours to 30 minutes through backend automation of inventory and
billing workflows.</li>
               
            </ul>
        </div>

    </section>

    


    );
}

export default Projects