import experience from "../data/experience";

function ExperienceSection() {
  return (
    <section>
      <div className="container">
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
          }}
        >
          Experience
        </h2>

        {experience.map((exp, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <h3>{exp.role}</h3>

            <h4
              style={{
                color: "#38bdf8",
                marginTop: "10px",
              }}
            >
              {exp.company}
            </h4>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "10px",
              }}
            >
              {exp.duration}
            </p>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.7",
              }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;