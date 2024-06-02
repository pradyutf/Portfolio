import SkillBox from './SkillBox';
import Marquee from 'react-fast-marquee';
import './Skills.css';
function SkillsPage() {
  return (
    <div className="skills-page" id='Skills'>
      <h2 className='skills-h2'>Skills</h2>
      <Marquee 
      pauseOnHover={true}
      >
      <div className="skills-list">
          <SkillBox skill="HTML" url="	https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" />
          <SkillBox skill="CSS" url="	https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg" />
          <SkillBox skill="JavaScript" url="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg" />
          <SkillBox skill="React" url="	https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" />
          <SkillBox skill="Swift" url="https://www.svgrepo.com/show/354421/swift.svg" />
          <SkillBox skill="Kotlin" url="https://www.svgrepo.com/show/303617/kotlin-1-logo.svg" />
          <SkillBox skill="Java" url="https://www.svgrepo.com/show/353924/java.svg" />
          <SkillBox skill="Python" url="https://www.svgrepo.com/show/354238/python.svg" />
          <SkillBox skill="Spring Boot" url="https://www.svgrepo.com/show/376350/spring.svg" />
          <SkillBox skill="Android" url="https://www.svgrepo.com/show/475631/android-color.svg" />
          <SkillBox skill="My SQL" url="https://www.svgrepo.com/show/374093/sql.svg" />
          <SkillBox skill="ARKit" url="https://developer.apple.com/assets/elements/icons/arkit/arkit-96x96_2x.png" />
     </div>
     </Marquee>
    </div>
  );
}

export default SkillsPage;