function SkillsSection() {
  const skills = [
    "Python",
    "React",
    "Node.js",
    "Express.js",
    "SQL",
    "PL/SQL",
    "MongoDB",
    "Oracle DB",
    "Git",
    "Linux",
    "REST APIs",
    "Machine Learning",
    "OpenCV",
    "YOLO"
  ];

  return (
    <section>
      <div className="container">
        <h2
          style={{
            marginBottom: "30px",
            fontSize: "2.5rem",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                padding: "12px 20px",
                background: "#1e293b",
                borderRadius: "10px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;