import './NavBar.css'

function NavBar() {
    return (
        <div className='NavBar'>
            <a href="">About Me</a>
            <span className="Spacer">|</span>
            <a href="">Portfolio</a>
            <span className="Spacer">|</span>
            <a href="">Blog</a>
            <span className="Spacer">|</span>
            <a href="../JetSimonGameDevResume.pdf">Game Dev Resume</a>
            <span className="Spacer">|</span>
            <a href="../JetSimonWebDevResume.pdf">Web Dev Resume</a>
        </div>
    )
}

export default NavBar;