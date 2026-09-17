import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    description:
      "A full-stack social media application with authentication, image upload and user features.",
    tech: "React • Node.js • MongoDB",
    liveLink: "#contact",
    sourceLink: "https://github.com/pawarvijaykumar",
  },
  {
    title: "Expense Tracker",
    description:
      "A web application for tracking and managing daily expenses with useful categories.",
    tech: "React • Express • MongoDB",
    liveLink: "#contact",
    sourceLink: "https://github.com/pawarvijaykumar",
  },
  {
    title: "Password Generator",
    description:
      "A customizable password generator with different options and copy functionality.",
    tech: "React • JavaScript",
    liveLink: "#contact",
    sourceLink: "https://github.com/pawarvijaykumar",
  },
  {
    title: "MegaBlog",
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

            <p className="small-title">
              // WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hi Buddy! <span>👋</span>
              <br />
              I'm <strong>Vijay</strong>
            </h1>

            <h2>Full Stack Web Developer</h2>

            <p className="education">
              Electronic & Computer Engineering Student
            </p>

            <p className="description">
              I build real-world web applications, explore new technologies
              and solve problems through code.
            </p>

            <div className="hero-buttons">

              <button className="voice-btn">
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

              <a href="htpps:www.linkedin.com/in/vijaykumar-pawar-943a64409" aria-label="LinkedIn">
                LinkedIn
              </a>

              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=wuulwbj" aria-label="Instagram">
                Instagram
              </a>

            </div>

          </div>

          {/* PHOTO */}

          <div className="hero-photo">

            <div className="photo-glow">

              <img
                src="/Vijay.png"
                alt="Vijay"
              />

            </div>

            <div className="photo-signature">
              Vijay
            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">

          <div className="section-heading">
            <p className="small-title">
              // ABOUT ME
            </p>

            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <div className="about-content">

            <div className="about-text">

              <p>
                I'm Vijay, an Electronic & Computer Engineering student
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
                  <p>Electronic & Computer Engineering</p>
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

            <p className="small-title">
              // MY SKILLS
            </p>

            <h2>
              Skills & <span>Tools</span>
            </h2>

            <p>
              Technologies I work with and continue learning.
            </p>

          </div>

          <div className="skills-grid">

            {skills.map((skill) => (

              <div className="skill-card" key={skill.title}>

                <h3>{skill.title}</h3>

                <div className="skill-items">

                  {skill.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section">

          <div className="section-heading">

            <p className="small-title">
              // MY WORK
            </p>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <p>
              Some of the projects I've built and worked on.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-image">
                  <span>{project.title}</span>
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <span className="project-tech">
                  {project.tech}
                </span>

                <div className="project-buttons">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

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

            <p className="small-title">
              // EXPERIENCE & LEARNING
            </p>

            <h2>
              My <span>Journey</span>
            </h2>

            <p>
              What I've done and what I'm learning.
            </p>

          </div>

          <div className="timeline">

            <div className="timeline-item">

              <span className="year">
                2026
              </span>

              <div>
                <h3>Building Projects</h3>
                <p>
                  Working on full-stack projects and improving my development
                  skills.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <span className="year">
                2025
              </span>

              <div>
                <h3>Learning MERN Stack</h3>
                <p>
                  Learning React, Node.js, Express.js, MongoDB and backend
                  development.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <span className="year">
                2025
              </span>

              <div>
                <h3>DSA with C++</h3>
                <p>
                  Practicing data structures, algorithms and problem solving.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <span className="year">
                2024
              </span>

              <div>
                <h3>Started Web Development</h3>
                <p>
                  Learned HTML, CSS, JavaScript and started building projects.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section id="contact" className="section contact-section">

          <div className="section-heading">

            <p className="small-title">
              // CONTACT
            </p>

            <h2>
              Let's Build
              <br />
              <span>Something Great!</span>
            </h2>

            <p>
              Have a project idea or want to connect? Let's talk.
            </p>

          </div>

          <div className="contact-container">

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
              />

              <button type="submit">
                Send Message ↗
              </button>

            </form>

            <div className="contact-info">

              <h3>Let's Connect</h3>

              <p>
                📧 pawarvijaykumar821@gmail.com
              </p>

              <p>
                📍 India
              </p>

              <p>
                💻 Full Stack Web Developer
              </p>

              <div className="social-links">

                <a href="https://github.com/pawarvijaykumar" target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href="https:www.linkedin.com/in/vijaykumar-pawar-943a64409">
                  LinkedIn
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

          <p>
            Engineer • Developer • Learner
          </p>
        </div>

        <p>
          Thank you for visiting ❤️
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;