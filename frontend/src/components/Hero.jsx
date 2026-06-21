import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-wrapper">

        {/* Left Side Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            Application Support Engineer @ TCS
          </span>

          <h1>Syed Luqman M</h1>

          <h2>
            Building Modern Applications &
            Solving Real Business Problems
          </h2>

          <p>
            Application Support Engineer at Tata Consultancy Services
            working in the Tata Play EAI L2 team.
            Experienced in SQL, PL/SQL, REST APIs, Postman,
            Production Support and Root Cause Analysis.
            Currently expanding expertise in Backend and Full Stack
            Development using Python, Flask, React and Node.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn secondary-btn"
            >
              Download Resume
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>3+</h3>
              <p>Major Projects</p>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>TCS</h3>
              <p>Professional Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Photo */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile.jpg"
            alt="Syed Luqman"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;