function SkillBox({skill,url}) {
  return (
    <div className="skill-box">
      <h3>{skill}</h3>
      <img src={url} alt={skill} />
    </div>
  );
}

export default SkillBox;