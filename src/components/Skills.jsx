const Skills = () => {
  const skills = ['Java', 'Python', 'JavaScript', 'SQL', 'React.js', 'Node.js', 'Express.js', 'Spring Boot', 'MySQL', 'Git', 'Docker', 'REST APIs'];
  
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skill-list">
              {skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
