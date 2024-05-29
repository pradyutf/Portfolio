import Style from "./Style";
import "./Intro.css";

function Intro() {
  return (
    <div className="IntroPages">
      <div ><Style/></div>
      


      
                   <div className="intro-heading">

                            <div className="intro-info">
                              <h2>Who I am</h2>
                              <p>
                              My name's Jane. I'm a web designer and developer based in Southampton, UK.<br /><br />
                              During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to build my own products. I spend my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.
                              </p>
                            </div>


                            <div className="img-intro">
                              <img src="https://dev-portfolio-template.netlify.app/static/media/orangeTheme-girl.d0ad58be.svg" alt="Img" id="intro-img"/>
                            </div>

                   </div>
      
    </div>
  );
}

export default Intro;