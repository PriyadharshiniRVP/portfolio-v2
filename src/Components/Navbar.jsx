

import Social from "./Socials";
function Navbar(){
    return(
        <div id="nav" className="nav"> 
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#articles">Articles</a>

          <Social />
        </div>

    );
}

export default Navbar