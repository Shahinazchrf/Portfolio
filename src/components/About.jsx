const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-intro">
            <p className="about-text-large">
              I'm <strong>Chahinez Cherfi</strong>, a 20-year-old Computer Science student specializing in 
              <strong> Information Systems and Software Engineering</strong> at the 
              <strong> University of Algiers 1 – Benyoucef Benkhedda</strong>.
            </p>
            <p className="about-text">
              I am passionate about software development and web technologies. I enjoy learning how systems work, 
              exploring new technologies, and turning ideas into real projects.
            </p>
            <p className="about-text">
              🎓 My academic journey includes working on <strong>QONNEXA</strong>, a queue management system 
              for AGB Bank, where I gained experience with React, Node.js, and database design.
            </p>
            <p className="about-text">
              My goal is to gain experience, grow as a developer, and contribute to meaningful and impactful projects.
            </p>
          </div>
        </div>

        {/* Education & Experience Grid */}
        <div className="about-grid">
          {/* Education Card */}
          <div className="about-card">
            <h3>🎓 Education</h3>
            <div className="about-card-content">
              <p><strong>B.Sc. in Computer Science</strong></p>
              <p>University of Algiers 1 – Benyoucef Benkhedda</p>
              <p className="about-date">2023 - Present</p>
              <p><strong>Specialization:</strong> Information Systems & Software Engineering</p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="about-card">
            <h3>💼 Experience</h3>
            <div className="about-card-content">
              <p><strong>QONNEXA Queue Management System</strong></p>
              <p>Full-stack web platform for AGB Bank</p>
              <p className="about-date">2025 - 2026</p>
              <p><strong>Technologies:</strong> React.js, Node.js, MySQL</p>
            </div>
          </div>
        </div>

        {/* My Interests Section */}
        <div className="interests-section">
          <h3>✨ My Interests</h3>
          <div className="interests-grid">
            <div className="interest-item">🌐 Web Development</div>
            <div className="interest-item">🎨 UI/UX Design</div>
            <div className="interest-item">🤖 Artificial Intelligence</div>
            <div className="interest-item">💡 Innovations</div>
            <div className="interest-item">📱 Mobile Apps</div>
            <div className="interest-item">🔧 Problem Solving</div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section-about">
          <h3>🛠️ Skills & Technologies</h3>
          <div className="skills-list-about">
            <div className="skill-group">
              <h4>Programming Languages</h4>
              <div className="skill-tags">
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Frameworks & Libraries</h4>
              <div className="skill-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Spring Boot</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Tools & Others</h4>
              <div className="skill-tags">
                <span>Git & GitHub</span>
                <span>MySQL</span>
                <span>LaTeX</span>
                <span>REST APIs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="about-quote">
          <p>"Driven to build innovative and efficient web applications."</p>
        </div>
      </div>
    </section>
  );
};

export default About;
