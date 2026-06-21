function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;