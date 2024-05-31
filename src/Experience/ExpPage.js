import ExperienceCard from "./ExpCard";
import "./Experience.css";
function ExpPage() {
  return (
    <div className="ExpPage">
    <div className="Exp-Left">
        <div className="spacer"></div>
        <dotlottie-player src="https://lottie.host/51cc013a-ee66-4fda-aa4f-33cbe2b4a88b/zX3eqO930m.json" background="transparent" speed="1" style={{width: '37vw', height: '37vw'}} loop autoplay></dotlottie-player>
    </div>
      
      <div className="Exp-Right">
      <h1 className="Edu-heading">Experience</h1>
    
      <ExperienceCard
        period="2024-present"
        position="Project Intern"
        company="Zolo"
      />
      <ExperienceCard
        period="2024-present"
        position="Project Intern"
        company="Urban-Company"
      />
       <ExperienceCard
        period="2021-present"
        position="Graphic Designer"
        company="Freelancer"
      />
    
    </div>
    
 
    
    </div>
  );
}

export default ExpPage;