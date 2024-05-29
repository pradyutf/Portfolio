import SkillBox from './SkillBox';
function SkillsPage() {
  return (
    <div className="skills-page">
      <h2>Skills</h2>
      <SkillBox skill="HTML" url="	https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" />
      <SkillBox skill="CSS" url="	https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg" />
      <SkillBox skill="JavaScript" url="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg" />
      <SkillBox skill="React" url="	https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" />
      <SkillBox skill="Blender" url="https://dev-portfolio-template.netlify.app/static/media/blender.b96901d1.svg" />
    </div>
  );
}

export default SkillsPage;