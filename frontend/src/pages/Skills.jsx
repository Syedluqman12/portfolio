const skills = {
  Backend: ["Python", "Flask", "Node.js", "Express.js"],
  Frontend: ["React", "JavaScript", "HTML", "CSS"],
  Database: ["SQL", "PL/SQL", "Oracle"],
  Tools: ["Git", "Postman", "Linux"],
  AIML: ["Machine Learning", "OpenCV", "YOLO"],
};

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div className="card" key={category}>
              <h3>{category}</h3>

              <div>
                {skillList.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;