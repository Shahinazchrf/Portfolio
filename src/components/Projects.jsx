const Projects = () => {
  const projects = [
    { title: "🏦 QONNEXA", desc: "Queue management platform for AGB Bank with real-time tracking and virtual ticketing.", tech: ["React", "Node.js", "MySQL"] },
    { title: "📱 Smart Task Manager", desc: "Productivity web app for team collaboration with real-time updates.", tech: ["React", "Express", "MongoDB"] },
    { title: "📊 E-Learning Dashboard", desc: "Analytics platform showing student progress and performance metrics.", tech: ["Django", "Chart.js", "PostgreSQL"] },
    { title: "🤖 AI Research Assistant", desc: "NLP-powered tool that summarizes academic papers.", tech: ["Python", "spaCy", "Flask"] }
  ];
  
  return (
    <section id="work" className="work-section">
      <div className="section-container">
        <h2 className="section-title">Work</h2>
        <div className="work-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
