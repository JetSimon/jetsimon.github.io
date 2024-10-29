import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='NavBar'>
            <Link to="../">About Me</Link>
            <span className="Spacer">|</span>
            <Link to="../portfolio">Portfolio</Link>
            <span className="Spacer">|</span>
            <Link to="../blog">Blog</Link>
            <span className="Spacer">|</span>
            <a href="../JetSimonResume.pdf">Resume</a>
        </div>
    )
}

export default NavBar;