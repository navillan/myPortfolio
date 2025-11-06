import ThisIsMe from "../images/MediaMyself1MS.jpg";
import ThisIsMyCertificate from "../images/AriBilgiBilisimJavascriptSertifikaMS.jpg";

function AboutMe() {

  return (
    <div className="about-me">
      <h3>Hello! I'm Mert Selamlar, from Istanbul, Turkey.</h3>
      <div className="about-me-main">
        <img className="about-me-photo" src={ThisIsMe} alt="My-Picture" />
        <p className="about-me-text">
          I am a Frontend Developer with strong communication skills and a solid command of the English language. I hold a degree in English Language and Literature from <a href="https://www.linkedin.com/school/dogus-university" target="_blank" rel="noopener noreferrer">Doğus University</a>, 
          which has helped me create deep connections with people around the world and has made it easier for me to understand their cultures, 
          which has greatly improved my communication skills. I'm a passionate developer with a love for creating innovative solutions. 
          I enjoy working with modern web technologies and continuously learning new skills to enhance my craft. 
          I am enthusiastic about collaborating on exciting projects and contributing to the tech community. 
          To enhance my skills, I have completed a comprehensive JavaScript course from <a href="https://www.linkedin.com/company/aribilgi" target="_blank" rel="noopener noreferrer">Ari Bilgi Bilişim</a>, 
          which has equipped me with a solid foundation in web development. 
          I currently divide my time between developing personal projects and solving algorithm problems to prepare for a career in the industry. 
          I'm eager to apply my knowledge and grow as a developer.
        </p>
      </div>
      <h2>My Javascript Certificate</h2>
      <img
        className={`about-me-certificate`}
        src={ThisIsMyCertificate}
        alt="My-Certificate"
      />
      <div className="about-me-tech">
        <h3>Technologies I Work With:</h3>
        <ul className="about-me-tech-list">
          <li>HTML / CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>jQuery</li>
          <li>React (Cors, Express, Axios, Router)</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Firestore</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;