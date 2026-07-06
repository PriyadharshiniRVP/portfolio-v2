import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'
//import medium from '../assets/medium.png' // Add this if you have medium icon

function Social() {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/priyadharshini-ramachandran-535903217/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <img src={linkedin} className="sm" alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/PriyadharshiniRVP"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <img src={github} className="sm" alt="GitHub" />
      </a>
      <a
        href="mailto:priyarama2209@gmail.com"
        aria-label="Email"
      >
        <img src={email} className="sm" alt="Email" />
      </a>
      
    </div>
  )
}

export default Social