import "./NavBar.css";
import NavItem from "./NavItem";
// i want cancel icon from react-icons/fa
import { FaTimes } from "react-icons/fa";

function NavBar() {

    function hideNav() {
        let nav = document.querySelector(".NavBary");
        nav.style.display = "none";
    }

  return (
    <div className="NavBary">
        <div className="cancel-icon" onClick={hideNav}>
            <FaTimes />
        </div>
        <div className="nav-list" >
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Education</NavItem>
            <NavItem>Skills</NavItem>
            <NavItem>Experience</NavItem>
            <NavItem>Services</NavItem>
        </div>
    </div>
  );
}

export default NavBar;

// first we make a functional component called NavBar
// then we add it to app.js
// then we add it to the left side of the website and stick there
// add a button to hide and show it in the home page
// add animations to the navbar
