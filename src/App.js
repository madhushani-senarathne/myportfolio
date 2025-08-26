import './App.css';
import profileImage from './assets/myimg.jpg';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


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
      <div id="top"></div>
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
        <a href="https://www.linkedin.com/in/madhushani-senarathna-803bb0214/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/madhushani-senarathne" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/madu.senarathna.988/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        </div>
      </div>
      </header>

      {/* Main content inside container */}
      <div className="App">
      {/* About Me Section */}
      <section id="about">
        <h2>About Me</h2>
        <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Madhushani Senarathna" />
        </div>
        <div className="about-text">
          <p>
            I am Madhushani Senarathna, a passionate and self-motivated IT graduate from the University of Sri Jayewardenepura 
            with hands-on experience in software development, digital marketing, and project coordination. I thrive in 
            both technical and creative roles.
          </p>
          <p>
            I have worked across diverse roles such as Software Developer Intern at SLT Digital Lab, Project Assistant at Sarvodaya, 
            Web Master & Marketing Officer at Vista Campus, and Social Media Coordinator at Senaro Motor Company. These experiences 
            helped me build a unique balance of technical, management, and communication skills.
          </p>
          <p>
            I am driven by curiosity and creativity, with the goal of using technology and innovation to create meaningful solutions 
            that positively impact people and society.
          </p>
          <a
            href={`${process.env.PUBLIC_URL}/Resume_Madhashani.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="download-btn">View Resume</button>
          </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
<section id="education">
  <h2>Education</h2>
  <div className="timeline">
    <div className="timeline-item">
      <h3>Bachelor’s in Information and Communication Technology</h3>
      <p>University of Sri Jayewardenepura</p>
      <p>Second Class Lower | GPA - 3.27</p>
      <span>2019 - 2023</span>
    </div>
    <div className="timeline-item">
      <h3>Certificate Course in Introduction to Entreprenership</h3>
      <p>University of Sri Jayewardenepura</p>
      <span>2020</span>
    </div>
    <div className="timeline-item">
      <h3>Advanced Certificate in Human Resources management</h3>
      <p>Institute of SLTC</p>
      <span>2021</span>
    </div>
    <div className="timeline-item">
      <h3>Certificate in Marketing & Business Management</h3>
      <p>Institute of SLTC</p>
      <span>2021</span>
    </div>
    <div className="timeline-item">
      <h3>Iformation Communication Technology</h3>
      <p>Vocational Training Authority</p>
      <span>2019</span>
    </div>
  </div>
</section>

{/* Experience Section */}
<section id="experience">
  <h2>Experience</h2>
  <div className="timeline">
    <div className="timeline-item">
      <h3>Social Media Coordinator</h3>
      <p>Senaro Motor Company (Pvt) Ltd</p>
      <p>360/1, Highlevel Road, Kottawa, Pannipitiya</p>
      <span>August 2024 - Present</span>
    </div>
    <div className="timeline-item">
      <h3>Web Master & Marketing Officer</h3>
      <p>Vista Campus & Foreign Education Consultants</p>
      <p>No 99,Station Road, Angulana, Moratuwa</p>
      <span>January 2024 - July 2024</span>
    </div>
    <div className="timeline-item">
      <h3>Project Assistant</h3>
      <p>Lanka Jathika Sarvodaya Shramadana Sangamaya</p>
      <p>Headquarters, Damsak Mandiraya,No 98, Rawatawatte Road, Moratuwa</p>
      <span>June 2023 - January 2024</span>
    </div>
    <div className="timeline-item">
      <h3>Internship - Software Developer</h3>
      <p>SLT Digital Lab</p>
      <p>Sri Lanka Telecom PLC, Lotus Road, Colombo 01</p>
      <span>August 2024 - Present</span>
    </div>
    <div className="timeline-item">
      <h3>Computer Operator</h3>
      <p>P.O. Box 02, Belihuloya, 70140, Sri Lanka</p>
      <p>360/1, Highlevel Road, Kottawa, Pannipitiya</p>
      <span>2018 - 2019</span>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
        <div className="skill-card">Critical Thinking</div>
        <div className="skill-card">Team Working</div>
        <div className="skill-card">Leadership</div>
        <div className="skill-card">Flexibility & Adaptability</div>
        <div className="skill-card">Positive Thinking</div>
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
  <p>
    <FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:+94762782473">+94 70 59 23 454</a>
  </p>
  <p>
    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{" "}
    <a href="https://www.linkedin.com/in/madhushani-senarathna-803bb0214/" target="_blank" rel="noopener noreferrer">
      Linkdein Profile
    </a>
  </p>
  <p>
    <FontAwesomeIcon icon={faFacebook} /> Facebook:{" "}
    <a href="https://www.facebook.com/madu.senarathna.988/" target="_blank" rel="noopener noreferrer">
      Facebook Profile
    </a>
  </p>
  <p>
    <strong>Email:</strong> pananesenarathna@gmail.com
  </p>
</section>

      
    </div>
    {/* Back to Top Button */}
<a href="#top" className="back-to-top">
  <img src="/mylogo.png" alt="Back to Top" />
</a>

    </>
  );
}

export default App;
