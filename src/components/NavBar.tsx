import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='NavBar'>
            <Link to="../">About Me</Link>
            <span className="Spacer">|</span>
            <Link to="../portfolio">Portfolio</Link>
            <span className="Spacer">|</span>
            <Link to="">Blog</Link>
            <span className="Spacer">|</span>
            <a href="../JetSimonGameDevResume.pdf">Game Dev Resume</a>
            <span className="Spacer">|</span>
            <a href="../JetSimonWebDevResume.pdf">Web Dev Resume</a>
        </div>
    )
}

export default NavBar;