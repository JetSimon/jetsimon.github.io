import Logo from "./Logo";
import NavBar from "./NavBar";
import "./TopBar.css";

function TopBar() {
    return (
        <div className="TopBar">
            <div className="TwoLogoHolder">
                <Logo content="Jet"></Logo>
                <Logo content="Simon"></Logo>
            </div>
            <NavBar></NavBar>
        </div>
    );
}

export default TopBar;