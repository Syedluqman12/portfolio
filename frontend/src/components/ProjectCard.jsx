function ProjectCard({ title, description, tech }) {
  const techList = tech.split("•").map((item) => item.trim());

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
      </div>

      <p className="project-description">
        {description}
      </p>

      <div className="project-tech">
        {techList.map((item, index) => (
          <span className="tech-badge" key={index}>
            {item}
          </span>
        ))}
      </div>

      
    </div>
  );
}

export default ProjectCard;