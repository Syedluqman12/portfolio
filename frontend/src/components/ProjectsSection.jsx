import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <p className="section-subtitle">
          Real-world projects demonstrating my skills in
          Computer Vision, Machine Learning, Backend Development,
          and Problem Solving.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;