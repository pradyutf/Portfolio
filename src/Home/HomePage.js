import HomeImage from "./HomeImage";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import { FaBars } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";

import "./Home.css";

function HomePage() {

  function showNav() {
    let nav = document.querySelector(".NavBary");
    nav.style.display = "flex";
    let blur = document.querySelector(".Blur");
    blur.style.display = "block";
  }

  
  return (
    <div className="HomePage" id="Home">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Zeyada&display=swap');
</style>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
      <FaBars onClick={showNav}  className="menu-icon"/>
      <HomeLeft />
      <HomeImage />
      <HomeRight />
    </div>
  );
}

export default HomePage;


