function SkillBox({skill,url}) {
  return (
    <div className="skill-box">
      <img src={url} alt={skill} className="skill-img"/>
      <h3>{skill}</h3>
      
    </div>
  );
}

export default SkillBox;