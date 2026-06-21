import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;