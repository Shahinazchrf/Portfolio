import myPhoto from '../assets/IMG_20251207_201927_364.jpg';

const Home = () => {
  const downloadCV = () => {
    const cvContent = `CHAHINEZ CHERFI – CV
========================
Computer Science Student – L3 Information Systems & Software Engineering

EDUCATION
• Bachelor's in Computer Science (in progress)
• Specialization: Information Systems & Software Engineering
• University of Algiers 1

TECHNICAL SKILLS
• Languages: Java, Python, JavaScript, SQL
• Frameworks: React, Node.js, Express, Spring Boot
• Tools: Git, Docker, MySQL

PROJECTS
• QONNEXA – Queue management system for AGB Bank
• Smart Task Manager – Full-stack productivity app

LANGUAGES
• English (Fluent), French (Advanced), Arabic (Native)`;

    const blob = new Blob([cvContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Chahinez_Cherfi_CV.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="home-section">
      <div className="section-container">
        <div className="home-container">
          <div className="home-content">
            <div className="greeting">HELLO, I'M</div>
            <h1 className="home-title">
              <span className="name-highlight">Chahinez Cherfi</span>
            </h1>
            <div className="subtitle">
              Computer Science Student – L3 <br />
              Information Systems & Software Engineering
            </div>
            <div className="button-group">
              <a href="https://github.com/Shahinazchrf" target="_blank" className="btn btn-outline">GitHub</a>
              <a href="https://www.linkedin.com/in/shahinaz-cherfi-965005349" target="_blank" className="btn btn-outline">LinkedIn</a>
              <button onClick={downloadCV} className="btn btn-primary">Download CV</button>
            </div>
          </div>
          <div className="home-image">
            <div className="organic-frame">
              <img src={myPhoto} alt="Chahinez Cherfi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
