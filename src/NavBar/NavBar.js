import "./NavBar.css";
import NavItem from "./NavItem";
// i want cancel icon from react-icons/fa
import { FaTimes } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";

function NavBar() {

    function hideNav() {
        let nav = document.querySelector(".NavBary");
        nav.style.display = "none";
        let blur = document.querySelector(".Blur");
        blur.style.display = "none";
    }

  return (
    <div className="NavBary">
        <div className="cancel-icon" onClick={hideNav}>
            <FaTimes />
        </div>
        <div className="nav-list" >
            <NavItem icon={<FaHome />} children={<a href="">Home</a>}></NavItem>
            <NavItem icon={<FaUser />} children={<a href="">About</a>}></NavItem>
            <NavItem icon={<FaGraduationCap />} children={<a href="">Education</a>}></NavItem>
            <NavItem icon={<FaTools />} children={<a href="">Skills</a>}></NavItem>
            <NavItem icon={<FaBriefcase />} children={<a href="">Experience</a>}></NavItem>
            <NavItem icon={<FaTasks />} children={<a href="">Services</a>}></NavItem>    
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
