import "./Project.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const data = [
    {
      title: "Yulu Analysis",
      description: "A Statistical Analysis of Yulu Data",
      techStack: "Python, Pandas, Stats",
      linkCode: "https://github.com/pradyutf",
      linkDemo: "https://github.com/pradyutf",
      Img: "https://dev-portfolio-template.netlify.app/static/media/one.a3146128.svg",
    },
    {
      title: "University Management System",
      description: "A university system for courses",
      techStack: "Java, Spring Boot, MySQL",
      linkCode: "https://github.com/pradyutf",
      linkDemo: "https://github.com/pradyutf",
      Img: "https://dev-portfolio-template.netlify.app/static/media/two.721a0672.svg",
    },
    {
      title: "Apple Vision Pro Apps",
      description:
        "Multiple projects using Apple Vision Framework",
      techStack: "Swift, ARKit, RealityKit",
      linkCode: "https://github.com/pradyutf",
      linkDemo: "https://github.com/pradyutf",
      Img: "https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg",
    },
  ];
  return (
    <div className="ProjectSectionParent" id="Projects">
      <h1>Projects</h1>
      <div className="ProjectSection">
        {data.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;