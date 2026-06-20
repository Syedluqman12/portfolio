function AchievementsSection() {
  return (
    <section>
      <div className="container">
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "30px",
          }}
        >
          Achievements
        </h2>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "12px",
          }}
        >
          <h3>TCS Ignite ILP Program</h3>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "1.7",
            }}
          >
            Successfully completed the TCS Ignite Initial Learning Program
            and developed strong foundations in software development,
            databases, enterprise applications, and professional software
            engineering practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;