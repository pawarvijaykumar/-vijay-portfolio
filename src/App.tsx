import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const introduction =
    "Hi buddy! Welcome to my portfolio. I'm Vijay, a Full Stack Web Developer and an Electronic and Computer Engineering student. Let me show you what I build.";

  const speakIntroduction = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(introduction);

      speech.rate = 0.95;
      speech.pitch = 1;
      speech.volume = 1;

      speech.onstart = () => setIsSpeaking(true);
      speech.onend = () => setIsSpeaking(false);

      window.speechSynthesis.speak(speech);
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>
          VIJAY<span>.DEV</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="talk-btn">Let's Talk ↗</button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">

        <div className="hero-content">

          <p className="small-title">
            // WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi Buddy! 👋
            <br />
            I'm <span>Vijay</span>
          </h1>

          <h2>Full Stack Web Developer</h2>

          <p className="education">
            Electronic & Computer Engineering Student
          </p>

          <p className="description">
            I build real-world web applications, explore new
            technologies and solve problems through code.
          </p>

          <div className="hero-buttons">
            <button onClick={speakIntroduction}>
              🔊 {isSpeaking ? "Speaking..." : "Meet Vijay"}
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

        </div>

        {/* PHOTO */}
        <div className="hero-photo">
          <div className="photo-glow">
            <img
              src="/vijay.png"
              alt="Vijay"
            />
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="small-title">// ABOUT ME</p>

        <h2>About <span>Me</span></h2>

        <p>
          I'm Vijay, an Electronic & Computer Engineering student
          and Full Stack Web Developer. I enjoy building web
          applications, learning new technologies and solving
          real-world problems through code.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="small-title">// MY SKILLS</p>

        <h2>Skills & <span>Tools</span></h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>C • C++ • Python • JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML • CSS • React • Next.js</p>
          </div>

          <div className="skill-card">
            <h3>React Ecosystem</h3>
            <p>Hooks • Router • Context API • Redux Toolkit</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js • Express.js • REST API</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB • Mongoose • MongoDB Atlas</p>
          </div>

          <div className="skill-card">
            <h3>Authentication</h3>
            <p>JWT • bcrypt • Appwrite • Cloudinary</p>
          </div>

          <div className="skill-card">
            <h3>Generative AI</h3>
            <p>Generative AI • Prompt Engineering • AI Tools</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git • GitHub • VS Code • Postman</p>
          </div>

          <div className="skill-card">
            <h3>DSA</h3>
            <p>Arrays • Linked List • Stack • Queue • Trees • Graphs</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="small-title">// MY WORK</p>

        <h2>Featured <span>Projects</span></h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Instagram Clone</h3>
            <p>
              Full-stack social media application with
              authentication, image upload and user features.
            </p>

            <span>React • Node.js • MongoDB</span>
          </div>

          <div className="project-card">
            <h3>Expense Tracker</h3>
            <p>
              Application for tracking and managing
              daily expenses.
            </p>

            <span>React • Express • MongoDB</span>
          </div>

          <div className="project-card">
            <h3>Password Generator</h3>
            <p>
              Password generator with customizable
              options and copy functionality.
            </p>

            <span>React • JavaScript</span>
          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="section">
        <p className="small-title">// MY JOURNEY</p>

        <h2>Learning <span>Journey</span></h2>

        <div className="journey">
          <p><strong>Programming</strong> — C, C++, Python</p>
          <p><strong>Web Development</strong> — HTML, CSS, JavaScript</p>
          <p><strong>Frontend</strong> — React, Router, Redux, Next.js</p>
          <p><strong>Backend</strong> — Node.js, Express, MongoDB</p>
          <p><strong>Problem Solving</strong> — DSA with C++</p>
          <p><strong>Current Learning</strong> — Generative AI</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="small-title">// CONTACT</p>

        <h2>Let's Build <span>Something Great</span></h2>

        <p>
          Have a project idea or want to connect?
          Let's talk.
        </p>

        <a href="mailto:your-email@gmail.com">
          Send Me a Message →
        </a>
      </section>

      <footer>
        <h3>VIJAY<span>.DEV</span></h3>
        <p>Build • Learn • Grow • Repeat</p>
      </footer>

    </div>
  );
}

export default App;