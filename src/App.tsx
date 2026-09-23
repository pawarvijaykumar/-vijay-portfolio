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

           <a href="#github" onClick={() => setMenuOpen(false)}>
            GitHub
            </a>
          <a href="#resume" onClick={() => setMenuOpen(false)}>
          Resume
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
            <div className="hero-badge">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
              </div>

            <h1>
              Hi Buddy! <span>👋</span>
              <br />
              I'm <strong>Vijay</strong>
            </h1>

            <h2 className="hero-role">
              Full Stack Web Developer
            </h2>
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

         

          <div className="hero-photo-frame">

           <div className="scan-line"></div>

            <img src="/Vijay.png" alt="Vijay" />

            <span className="corner corner-tl"></span>
            <span className="corner corner-tr"></span>
            <span className="corner corner-bl"></span>
            <span className="corner corner-br"></span>

           

           <div className="tech-panel">
            <span>LEARNING</span>
             <strong>Agentic Ai</strong>
             <strong>DSA</strong>
            <strong>Node.js</strong>
            <strong>MongoDB</strong>
             </div>
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

      {/* ================= PROJECTS ================= */}

<section id="projects" className="section projects-section">

  <div className="section-heading">
    <p className="small-title">// MY PROJECTS</p>

    <h2>
      Featured <span>Projects</span>
    </h2>

    <p>
      Projects I have built while learning and improving my development skills.
    </p>
  </div>


  {/* ================= FEATURED PROJECT ================= */}

  <div className="featured-project">

    <div className="featured-image">
      <img
        src="/Instagram Clone.png"
        alt="Instagram Clone"
      />
    </div>

    <div className="featured-content">

      <span className="featured-label">
        ★ FEATURED PROJECT
      </span>

      <h3>
        Instagram <span>Clone</span>
      </h3>

      <p>
        A full-stack social media application built to practice
        real-world frontend and backend development. It includes
        user authentication, image handling, database integration
        and modern web application features.
      </p>

      <div className="featured-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>JWT</span>
        <span>Cloudinary</span>
      </div>

      <div className="featured-buttons">

        <a href="#contact">
          Live Demo ↗
        </a>

        <a
          href="https://github.com/pawarvijaykumar"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

      </div>

    </div>

  </div>


  {/* ================= OTHER PROJECTS ================= */}

  <div className="projects-grid">

    {projects
      .filter((project) => project.title !== "Instagram Clone")
      .map((project) => (
        <article
          className="project-card"
          key={project.title}
        >

          <div className="project-image">
            <img
              src={project.image}
              alt={project.title}
            />
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <span className="project-tech">
            {project.tech}
          </span>

          <div className="project-buttons">

            <a href={project.liveLink}>
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

{/* ================= GITHUB ACTIVITY ================= */}

<section id="github" className="section github-section">

  <div className="section-heading">

    <p className="small-title">// GITHUB ACTIVITY</p>

    <h2>
      Building <span>in Public</span>
    </h2>

    <p>
      I learn by building, experimenting and sharing my work on GitHub.
    </p>

  </div>

  <div className="github-card">

    <div className="github-content">

      <span className="github-label">
        ● GITHUB PROFILE
      </span>

      <h3>pawarvijaykumar</h3>

      <p>
        Full Stack Web Development • C++ • DSA • Generative AI
      </p>

      <div className="github-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>C++</span>
        <span>DSA</span>
      </div>

      <a
        href="https://github.com/pawarvijaykumar"
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        View GitHub ↗
      </a>

    </div>

    <div className="github-symbol">
      <span>⌘</span>
    </div>

  </div>

</section>



{/* ================= WHAT I BUILD ================= */}

<section
  id="services"
  className="section services-section"
>

  <div className="section-heading">

    <p className="small-title">
      // WHAT I DO
    </p>

    <h2>
      What I <span>Build</span>
    </h2>

    <p>
      I build modern, scalable and user-focused web applications
      using current technologies.
    </p>

  </div>


  <div className="services-grid">

    <article className="service-card">

      <div className="service-number">01</div>

      <div className="service-icon">⌘</div>

      <h3>Frontend Development</h3>

      <p>
        Building responsive and interactive user interfaces
        using React, JavaScript, HTML, CSS and Tailwind CSS.
      </p>

      <div className="service-tech">
        <span>React</span>
        <span>JavaScript</span>
        <span>Tailwind</span>
      </div>

    </article>


    <article className="service-card">

      <div className="service-number">02</div>

      <div className="service-icon">&lt;/&gt;</div>

      <h3>Backend Development</h3>

      <p>
        Creating REST APIs and backend systems using Node.js,
        Express.js and secure authentication.
      </p>

      <div className="service-tech">
        <span>Node.js</span>
        <span>Express</span>
        <span>REST API</span>
      </div>

    </article>


    <article className="service-card">

      <div className="service-number">03</div>

      <div className="service-icon">◈</div>

      <h3>Database &amp; APIs</h3>

      <p>
        Designing and connecting databases with applications
        using MongoDB, Mongoose and MongoDB Atlas.
      </p>

      <div className="service-tech">
        <span>MongoDB</span>
        <span>Mongoose</span>
        <span>Atlas</span>
      </div>

    </article>


    <article className="service-card">

      <div className="service-number">04</div>

      <div className="service-icon">✦</div>

      <h3>AI &amp; Modern Web</h3>

      <p>
        Exploring Generative AI, prompt engineering and AI tools
        to create smarter and more useful web experiences.
      </p>

      <div className="service-tech">
        <span>Gen AI</span>
        <span>Prompting</span>
        <span>AI Tools</span>
      </div>

    </article>

  </div>

</section>






{/* ================= GITHUB ================= */}

<section id="github" className="section github-section">

  <div className="section-heading">

    <p className="small-title">// GITHUB ACTIVITY</p>

    <h2>
      Code. <span>Build. Repeat.</span>
    </h2>

    <p>
      Explore my code, projects and development journey on GitHub.
    </p>

  </div>


  <div className="github-card">

    <div className="github-content">

      <div className="github-icon">
        GH
      </div>

      <div>
        <span className="github-label">
          DEVELOPER PROFILE
        </span>

        <h3>
          Vijay Kumar
        </h3>

        <p>
          Full Stack Web Developer • C++ • DSA • Generative AI
        </p>
      </div>

    </div>


    <div className="github-info">

      <div>
        <span>USERNAME</span>
        <strong>pawarvijaykumar</strong>
      </div>

      <div>
        <span>FOCUS</span>
        <strong>Full Stack Development</strong>
      </div>

    </div>


    <a
      className="github-button"
      href="https://github.com/pawarvijaykumar"
      target="_blank"
      rel="noreferrer"
    >
      View GitHub Profile ↗
    </a>

  </div>

</section>



{/* ================= RESUME ================= */}

<section id="resume" className="section resume-section">

  <div className="section-heading">

    <p className="small-title">// MY RESUME</p>

    <h2>
      Let's <span>Work Together</span>
    </h2>

    <p>
      Interested in working together? Check out my resume and
      learn more about my skills, projects and experience.
    </p>

  </div>


  <div className="resume-card">

    <div className="resume-icon">
      CV
    </div>

    <div className="resume-content">

      <span className="resume-label">
        AVAILABLE FOR OPPORTUNITIES
      </span>

      <h3>
        Vijay Kumar
      </h3>

      <p>
        Full Stack Web Developer • Electronic &amp; Computer Engineering
      </p>

    </div>


    <div className="resume-buttons">

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-view"
      >
        View Resume ↗
      </a>

      <a
        href="/resume.pdf"
        download
        className="resume-download"
      >
        Download CV ↓
      </a>

    </div>

  </div>

</section>


{/* ================= RESUME ================= */}

<section id="resume" className="section resume-section">

  <div className="section-heading">

    <p className="small-title">// MY RESUME</p>

    <h2>
      Let's <span>Work Together</span>
    </h2>

    <p>
      Explore my experience, technical skills, projects and
      learning journey in my resume.
    </p>

  </div>

  <div className="resume-card">

    <div className="resume-info">

      <span className="resume-number">
        01
      </span>

      <div className="resume-icon">
        📄
      </div>

      <h3>
        Vijay Kumar
      </h3>

      <p className="resume-role">
        Full Stack Web Developer
      </p>

      <p className="resume-description">
        Electronic & Computer Engineering student focused on
        full-stack development, backend technologies and
        Data Structures & Algorithms with C++.
      </p>

      <div className="resume-tags">

        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>C++</span>
        <span>DSA</span>

      </div>

    </div>

    <div className="resume-actions">

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-view-btn"
      >
        View Resume ↗
      </a>

      <a
        href="/resume.pdf"
        download="Vijay_Kumar_Resume.pdf"
        className="resume-download-btn"
      >
        Download Resume ↓
      </a>

    </div>

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

      {/* ================= FOOTER ================= */}

<footer className="site-footer">

  <div className="footer-main">

    <div className="footer-brand">

      <h3>
        VIJAY<span>.DEV</span>
      </h3>

      <p>
        Full Stack Web Developer
      </p>

      <span>
        Engineer • Developer • Learner
      </span>

    </div>


    <div className="footer-links">

      <p>// QUICK LINKS</p>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#journey">Journey</a>
      <a href="#contact">Contact</a>

    </div>


    <div className="footer-connect">

      <p>// CONNECT</p>

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

      <a href="mailto:pawarvijaykumar821@gmail.com">
        Email ↗
      </a>

    </div>

  </div>


  <div className="footer-bottom">

    <span>
      © 2026 Vijay Kumar
    </span>

    <span>
      Built with React + Vite
    </span>

    <a href="#home">
      BACK TO TOP ↑
    </a>

  </div>

</footer>
    </div>
  );
}

export default App