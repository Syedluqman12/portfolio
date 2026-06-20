function AboutSection() {
  return (
    <section>
      <div className="container">
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "30px",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#cbd5e1",
            fontSize: "18px",
          }}
        >
          I am Syed Luqman M, an Application Support Engineer at Tata
          Consultancy Services working in the Tata Play EAI L2 team.

          I have hands-on experience in SQL, PL/SQL, REST APIs, Postman,
          production support, incident management, and root cause analysis.

          I completed the TCS Ignite ILP program and hold a B.Sc degree in
          Artificial Intelligence & Data Science.

          My goal is to transition into Backend Development and Full Stack
          Engineering by leveraging my expertise in Python, React, Node.js,
          databases, and software engineering practices.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;