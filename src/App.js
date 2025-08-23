import './App.css';
import profileImage from './assets/myimg.jpg';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/madhushani-senarathne/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <>
      {/* Navigation Menu */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Full width Hero Header */}
      <header className="hero">
  <div className="hero-content">
    {/* <img src={profileImage} alt="Madhushani Senarathna" /> */}
    <h1>Madhushani Senarathna</h1>
    <p>Social Media Coordinator</p>

    {/* Social Media Links */}
    <div className="social-links">
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/madhushani-senarathne" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  </div>
</header>

      {/* Main content inside container */}
      <div className="App">
        {/* About Me Section */}
        {/* About Me Section */}
<section id="about">
  <h2>About Me</h2>
  <div className="about-container">
    <div className="about-image">
      <img src={profileImage} alt="Madhushani Senarathna" />
    </div>
    <div className="about-text">
      <p>
        I’m an undergraduate at the University of Sri Jayewardenepura. 
        I want to contribute to a peaceful world while sharing knowledge and skills.
      </p>
    </div>
  </div>
</section>

      {/* Education Section */}
<section id="education">
  <h2>Education</h2>
  <div className="timeline">
    <div className="timeline-item">
      <h3>University of Sri Jayewardenepura</h3>
      <p>Bachelor’s in Information and Communication Technology</p>
      <span>2021 - Present</span>
    </div>
    <div className="timeline-item">
      <h3>Your High School Name</h3>
      <p>High School Diploma</p>
      <span>2015 - 2020</span>
    </div>
  </div>
</section>

{/* Experience Section */}
<section id="experience">
  <h2>Experience</h2>
  <div className="timeline">
    <div className="timeline-item">
      <h3>Social Media Coordinator - Company Name</h3>
      <p>Managed social media campaigns and content creation.</p>
      <span>2023 - Present</span>
    </div>
    <div className="timeline-item">
      <h3>Intern - Company Name</h3>
      <p>Assisted in IT projects and documentation.</p>
      <span>2022 - 2023</span>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
    <div className="skill-card">HTML</div>
    <div className="skill-card">CSS</div>
    <div className="skill-card">JavaScript</div>
    <div className="skill-card">React.js</div>
    <div className="skill-card">Bootstrap</div>
  </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>My GitHub Projects</h2>
        <div className="projects-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="project-card">
              <h3>{repo.name}</h3>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: example@gmail.com</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your Profile</a>
        </p>
      </section>
    </div>
    </>
  );
}

export default App;
