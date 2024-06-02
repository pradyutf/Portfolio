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
// i want icons for projects and contact from react-icons/fa
import { FaProjectDiagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

function NavBar() {
    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
        if (showNav) {
        let menuBtns = document.querySelectorAll(".nav-item");
        console.log(menuBtns);
        menuBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                hideNav();
                let section = btn.innerText;
                let sectionElement = document.getElementById(section);
                console.log(section);
                sectionElement.scrollIntoView({ behavior: "smooth" });
                
            });
    });
    }
    }, [showNav]);
    useEffect(() => {
        let btn = document.querySelectorAll(".nav-item");
        if (btn.length > 0) {
            setShowNav(true);
        }
    },[]);

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
            <NavItem className="menu-btn" icon={<FaHome />} children={"Home"}></NavItem>
            <NavItem className="menu-btn" icon={<FaUser />} children={"About"}></NavItem>
            <NavItem className="menu-btn" icon={<FaGraduationCap />} children={"Education"}></NavItem>
            <NavItem className="menu-btn" icon={<FaTools />} children={"Skills"}></NavItem>
            <NavItem className="menu-btn" icon={<FaBriefcase />} children={"Experience"}></NavItem>
            <NavItem className="menu-btn" icon={<FaProjectDiagram />} children={"Projects"}></NavItem>
            <NavItem className="menu-btn" icon={<FaEnvelope />} children={"Contact"}></NavItem>  
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
