import Style from "./Style";
import "./Intro.css";

function Intro() {
  return (
    <div className="IntroPages">
      <div ><Style/></div>
      


      
                   <div className="intro-body">

                            <div className="intro-info">
                              <h2 className="IntroHead">Who I am</h2>
                              <p className="IntroPara">
                              My name's Jane. I'm a web designer and developer based in Southampton, UK.<br /><br />
                              During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to build my own products. I spend my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.
                              </p>
                            </div>


                            <div className="intro-img">
                            
                            <dotlottie-player src="https://lottie.host/26e12a33-56ab-4fc5-aa12-dde341f4ebfd/2EtKa0XB9C.json" background="transparent" speed="1" style={{width: '40vw', height: '35vw'}} loop autoplay></dotlottie-player>
                            </div>

                   </div>
      
    </div>
  );
}

export default Intro;