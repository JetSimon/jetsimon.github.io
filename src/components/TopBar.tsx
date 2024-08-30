import Logo from "./Logo";
import NavBar from "./NavBar";
import "./TopBar.css";

function TopBar() {
    return (
        <div className="TopBar">
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    );
}

export default TopBar;