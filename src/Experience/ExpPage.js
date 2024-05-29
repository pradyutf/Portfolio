import ExperienceCard from "./ExpCard";
function ExpPage() {
  return (
    <div>
        <h1>Experience</h1>
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
    </div>
    <div>
      <img src="https://dev-portfolio-template.netlify.app/static/media/expOrange.9383b2df.svg" alt="Experience Illustration" />
    </div>
    </div>
  );
}

export default ExpPage;