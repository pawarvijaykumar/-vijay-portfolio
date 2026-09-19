import {  useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [state, handleSubmit] = useForm("xppwqgk");

   const playVoice = () => {
  const audio = new Audio("/voice.mp3");

  audio.currentTime = 0;

  audio.play().catch((error) => {
    console.error("Audio playback failed:", error);
  });
};

  const skills = [
    {
      title: "Programming",
      items: ["C", "C++", "Python", "JavaScript"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "Database",
      items: ["MongoDB", "Mongoose", "MongoDB Atlas"],
    },
    {
      title: "Authentication",
      items: ["JWT", "bcrypt", "Appwrite", "Cloudinary"],
    },
    {
      title: "Generative AI",
      items: ["Generative AI", "Prompt Engineering", "AI Tools"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "DSA",
      items: ["Arrays", "Linked List", "Stack", "Queue", "Trees", "Graphs"],
    },
  ];

  const projects = [
    {
      title: "Instagram Clone",
      image: "/Instagram Clone.png",
      description:
        "A full-stack social media application with authentication, image upload and user features.",
      tech: "React • Node.js • MongoDB",
      liveLink: "#contact",
      sourceLink: "https://github.com/pawarvijaykumar",
    },
    {
      title: "Expense Tracker",
      image: "/Expense Tracker.png",
      description:
        "A web application for tracking and managing daily expenses with useful categories.",
      tech: "React • Express • MongoDB",
      liveLink: "#contact",
      sourceLink: "https://github.com/pawarvijaykumar",
    },
    {
      title: "Password Generator",
      image: "/Password Generato.png",
      description:
        "A customizable password generator with different options and copy functionality.",
      tech: "React • JavaScript",
      liveLink: "#contact",
      sourceLink: "https://github.com/pawarvijaykumar",
    },
    {
      title: "MegaBlog",
      image: "/megaBlog.png",
      description:
        "A blogging application built with React and Appwrite for creating and managing blog posts.",
      tech: "React • Appwrite",
      liveLink: "#contact",
      sourceLink: "https://github.com/pawarvijaykumar",
    },
  ];

  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#home" className="logo">
          VIJAY<span>.DEV</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#journey" onClick={() => setMenuOpen(false)}>
            Journey
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="talk-btn">
          Let's Talk ↗
        </a>
      </header>

      {/* ================= HOME ================= */}

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="small-title">// WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi Buddy! <span>👋</span>
              <br />
              I'm <strong>Vijay</strong>
            </h1>

            <h2>Full Stack Web Developer</h2>

            <p className="education">
              Electronic &amp; Computer Engineering Student
            </p>

            <p className="description">
              I build real-world web applications, explore new technologies
              and solve problems through code.
            </p>










<div className="hero-buttons">

  <button
    className="voice-btn"
    onClick={playVoice}
  >
    🔊 Meet Vijay
  </button>

  <a href="#projects">
    View My Work ↓
  </a>

</div>





            <div className="stats">
              <div>
                <strong>20+</strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Learning Always</span>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/pawarvijaykumar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vijaykumar-pawar-943a64409"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=wuulwbj"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* PHOTO */}

          <div className="hero-photo">
            <div className="photo-glow">
              <img src="/Vijay.png" alt="Vijay" />
            </div>

            <div className="photo-signature">Vijay</div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="small-title">// ABOUT ME</p>

            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Vijay, an Electronic &amp; Computer Engineering student
                and Full Stack Web Developer.
              </p>

              <p>
                I enjoy building web applications, learning new technologies
                and solving real-world problems through code.
              </p>

              <p>
                Currently, I'm improving my development skills, working on
                projects and learning Generative AI.
              </p>
            </div>

            <div className="about-card">
              <div>
                <span>🎓</span>
                <div>
                  <strong>Education</strong>
                  <p>Electronic &amp; Computer Engineering</p>
                </div>
              </div>

              <div>
                <span>💻</span>
                <div>
                  <strong>Developer</strong>
                  <p>Full Stack Web Developer</p>
                </div>
              </div>

              <div>
                <span>🚀</span>
                <div>
                  <strong>Passion</strong>
                  <p>Web Development • DSA • AI</p>
                </div>
              </div>

              <div>
                <span>🎯</span>
                <div>
                  <strong>Goal</strong>
                  <p>Build useful real-world solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="small-title">// MY SKILLS</p>

            <h2>
              Skills &amp; <span>Tools</span>
            </h2>

            <p>Technologies I work with and continue learning.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>

                <div className="skill-items">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="small-title">// MY WORK</p>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <p>Some of the projects I've built and worked on.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="project-tech">{project.tech}</span>

                <div className="project-buttons">
                  <a href={project.liveLink}>Live Demo ↗</a>

                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= JOURNEY ================= */}

        <section id="journey" className="section journey-section">
          <div className="section-heading">
            <p className="small-title">// MY JOURNEY</p>

            <h2>
              My <span>Journey</span>
            </h2>

            <p>
              A journey of learning, building and continuously improving my
              skills.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2024</span>

              <div>
                <h3>Started Web Development</h3>

                <p>
                  Started learning HTML, CSS and JavaScript and began building
                  websites and small projects.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="year">2025</span>

              <div>
                <h3>Started Backend Development</h3>

                <p>
                  Started learning React, Node.js, Express.js, MongoDB and
                  REST API development to build full-stack applications.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="year">2025</span>

              <div>
                <h3>DSA with C++</h3>

                <p>
                  Started practicing data structures and algorithms with C++,
                  focusing on problem solving and coding practice.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="year">2026</span>

              <div>
                <h3>Building Full-Stack Projects</h3>

                <p>
                  Building practical projects, improving development skills
                  and creating a strong portfolio for future opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="section contact-section">
          <div className="section-heading contact-heading">
            <p className="small-title">// ESTABLISH CONNECTION</p>

            <h2>
              Let's Build <span>Something Great!</span>
            </h2>

            <p>
              Have a project idea, collaboration or just want to connect?
              Send me a transmission.
            </p>
          </div>

          <div className="contact-container">
            {/* LEFT — TRANSMISSION FORM */}

            <div className="contact-form-box">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>TRANSMISSION_PANEL.exe</span>
              </div>

              <div className="terminal-status">
                <span>●</span> SECURE CONNECTION ESTABLISHED
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label>
                    <span>01</span> YOUR NAME
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div className="contact-field">
                  <label>
                    <span>02</span> YOUR EMAIL
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    required
                  />
                </div>

                <div className="contact-field">
                  <label>
                    <span>03</span> YOUR MESSAGE
                  </label>

                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="transmit-btn"
                  disabled={state.submitting}
                >
                  <span>
                    {state.submitting
                      ? "TRANSMITTING..."
                      : "SEND TRANSMISSION ↗"}
                  </span>
                </button>
              </form>

              {state.succeeded && (
                <p className="form-success">
                  ✓ Transmission received successfully. I'll get back to you
                  soon.
                </p>
              )}

              <ValidationError prefix="Form" errors={state.errors} />
            </div>

            {/* RIGHT — VIJAY STATUS */}

            <div className="contact-info">
              <div className="status-header">
                <span className="status-dot"></span>

                <span>SYSTEM ONLINE</span>
              </div>

              <h3>
                Let's <span>Connect</span>
              </h3>

              <p className="contact-intro">
                Have an idea worth building? Let's turn it into something real.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <span className="detail-icon">✉</span>

                  <div>
                    <small>EMAIL</small>

                    <a href="mailto:pawarvijaykumar821@gmail.com">
                      pawarvijaykumar821@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="detail-icon">◉</span>

                  <div>
                    <small>LOCATION</small>
                    <p>India</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="detail-icon">&lt;/&gt;</span>

                  <div>
                    <small>ROLE</small>
                    <p>Full Stack Web Developer</p>
                  </div>
                </div>
              </div>

              <div className="availability-box">
                <span className="availability-dot"></span>

                <div>
                  <strong>AVAILABLE FOR PROJECTS</strong>

                  <p>
                    Currently open to interesting projects, collaborations and
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="contact-socials">
                <a
                  href="https://github.com/pawarvijaykumar"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/vijaykumar-pawar-943a64409"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer>
        <div>
          <h3>
            VIJAY<span>.DEV</span>
          </h3>

          <p>Engineer • Developer • Learner</p>
        </div>

        <p>Thank you for visiting ❤️</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
