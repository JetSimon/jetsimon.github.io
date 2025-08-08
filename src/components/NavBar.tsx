import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <div className='NavBar'>
            <Link to="/">About Me</Link>
            <span className="Spacer">|</span>
            <Link to="/portfolio">Portfolio</Link>
            <span className="Spacer">|</span>
            <Link to="/blog">Blog</Link>
            <span className="Spacer">|</span>
            <a href="/JetSimonResume.pdf">Resume</a>
            <span className="Spacer">|</span>
            <a href="https://jetsimon.com/cool-sites/">Cool Sites</a>
            <span className="Spacer">|</span>
            <a href="https://jetsimon.com/dailies/">Daily Games</a>
        </div>
    )
}

export default NavBar;