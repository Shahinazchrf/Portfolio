const Skills = () => {
  const frontendSkills = [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 80 },
    { name: "React.js", percentage: 60 },
    { name: "Tailwind CSS", percentage: 70 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 50 },
    { name: "Express.js", percentage: 50 }
  ];

  const databaseSkills = [
    { name: "MySQL", percentage: 70 }
  ];

  const toolsSkills = [
    { name: "Git & GitHub", percentage: 80 },
    { name: "Postman", percentage: 50 },
    { name: "Figma", percentage: 70 }
  ];

  const additionalSkills = [
    "Java", "Python", "PHP", "Django"
  ];

  const SkillBar = ({ name, percentage }) => (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-bg">
        <div 
          className="skill-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-subtitle">A glimpse of my technical abilities</p>

        <div className="skills-container">
          {/* Frontend Section */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">🎨 Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">⚙️ Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>

          {/* Database Section */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">🗄️ Database</h3>
            <div className="skills-list">
              {databaseSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>

          {/* Tools & Frameworks Section */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">🛠️ Frameworks & Tools</h3>
            <div className="skills-list">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Knowledge Section */}
        <div className="additional-knowledge">
          <h3 className="additional-title">📚 Additional Knowledge</h3>
          <p className="additional-text">
            I also have basic knowledge of <strong>{additionalSkills.join(", ")}</strong>, 
            and I am continuing to improve my understanding through learning and practice.
          </p>
          <div className="additional-tags">
            {additionalSkills.map((skill, index) => (
              <span key={index} className="additional-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
