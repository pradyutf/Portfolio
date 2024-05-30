import ExperienceCard from "./ExpCard";
import "./Experience.css";
function ExpPage() {
  return (
    <div className="EduPage">
      <div className="Edu-Left">
      <h1 className="Edu-heading">Experience</h1>
    <div>
      <ExperienceCard
        period="2018-2021"
        position="Software Engineer"
        company="Google"
      />
      <ExperienceCard
        period="2016-2018"
        position="Frontend Developer"
        company="Facebook"
      />
       <ExperienceCard
        period="2016-2018"
        position="Frontend Developer"
        company="Facebook"
      />
    </div>
    </div>
    <div>
    <div className="Exp-Right">
      <img src="https://dev-portfolio-template.netlify.app/static/media/expOrange.9383b2df.svg" alt="Experience Illustration" />
    </div>
    </div>
    </div>
  );
}

export default ExpPage;