const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "🏦 QONNEXA – Queue Management System",
      type: "Final Year Project",
      description: "A web-based queue management system designed to optimize customer flow and reduce waiting time in banks.",
      highlights: [
        "Developed as a final year project",
        "Built a system to manage and organize queues efficiently",
        "Improved user experience and reduced waiting time"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL"]
    },
    {
      id: 2,
      title: "📋 Attendance Management System",
      type: "University Project",
      description: "A web application for managing student attendance for professors.",
      highlights: [
        "Developed as a university project",
        "Allows professors to track and manage student attendance",
        "Includes simple CRUD operations"
      ],
      tech: ["PHP", "MySQL", "HTML/CSS"]
    },
    {
      id: 3,
      title: "🎓 Student Club Project",
      type: "Team Contribution",
      description: "Contributed to a student club project as part of a team.",
      highlights: [
        "Worked on frontend development tasks",
        "Built user interface components using HTML, CSS, and JavaScript",
        "Gained experience in teamwork and collaborative development"
      ],
      tech: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="work" className="work-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card-simple">
              {/* Project Type Badge */}
              <div className="project-type">{project.type}</div>
              
              {/* Project Title */}
              <h3 className="project-title-simple">{project.title}</h3>
              
              {/* Description */}
              <p className="project-description-simple">{project.description}</p>
              
              {/* Highlights */}
              <div className="project-highlights-simple">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">• {highlight}</div>
                ))}
              </div>
              
              {/* Tech Tags */}
              <div className="project-tech-simple">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag-simple">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
