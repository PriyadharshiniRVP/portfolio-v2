
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'

function Social(){
    return(

        <div className='socials'>
           
            <a href="https://www.linkedin.com/in/priyadharshini-ramachandran-535903217/"><img src={linkedin} className='sm'/></a>
             <a href="https://github.com/PriyadharshiniRVP"><img src={github} className='sm'/></a>
              <a href="mailto:priyarama2209@gmail.com"><img src={email} className='sm'/></a>
        </div>

    );
}

export default Social