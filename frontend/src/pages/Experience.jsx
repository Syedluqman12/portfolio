function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Professional Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <h3>Application Support Engineer</h3>
            <span>Jan 2026 – Present</span>
          </div>

          <h4>Tata Consultancy Services (TCS)</h4>

          <p className="experience-description">
            Supporting Tata Play's Enterprise Application Integration (EAI)
            platform as part of the L2 Support Team. Responsible for
            troubleshooting production issues, analyzing data, validating APIs,
            and ensuring uninterrupted business operations.
          </p>

          <div className="experience-grid">
            <div className="exp-item">
              ✓ SQL & PL/SQL Data Analysis
            </div>

            <div className="exp-item">
              ✓ Production Support & RCA
            </div>

            <div className="exp-item">
              ✓ REST APIs & Postman
            </div>

            <div className="exp-item">
              ✓ UAT & Production Testing
            </div>

            <div className="exp-item">
              ✓ Incident Resolution
            </div>

            <div className="exp-item">
              ✓ SLA Management
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;