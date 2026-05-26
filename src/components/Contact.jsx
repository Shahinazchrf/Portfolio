const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-card">
          <div className="contact-info">
            <a href="mailto:chahinez.cherfi@univ-alger.dz" className="contact-item">📧 chahinez.cherfi@univ-alger.dz</a>
            <a href="https://github.com/Shahinazchrf" target="_blank" rel="noopener noreferrer" className="contact-item">🐙 github.com/Shahinazchrf</a>
            <a href="https://www.linkedin.com/in/shahinaz-cherfi-965005349" target="_blank" rel="noopener noreferrer" className="contact-item">🔗 linkedin.com/in/shahinaz-cherfi</a>
          </div>
          <p className="contact-message">📌 Let's build something great together! Feel free to reach out for collaborations.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
