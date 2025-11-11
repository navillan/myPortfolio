import LinkedInIcon from '../images/linkedInImage.png';
import GitHubIcon from '../images/githubImage.png';
import EmailIcon from '../images/gmailImage.png';

function Contact() {
  return (
    <div className="main-contact">
      <h2>Contact</h2>
      <div className="contact-list">
        <div className="contact-name">
          <div style={{backgroundImage: `url(${EmailIcon})`}} className="contact-email" alt="Email" title="Email"></div>
          <div style={{backgroundImage: `url(${LinkedInIcon})`}} className="contact-linkedin" alt="LinkedIn" title="LinkedIn"></div>
          <div style={{backgroundImage: `url(${GitHubIcon})`}} className="contact-github" alt="GitHub" title="GitHub"></div>
        </div>
        <div className="contact-route">
          <a href="mailto:mertselamlar@gmail.com">
            mertselamlar@gmail.com
          </a>
          <a href="https://linkedin.com/in/mert-selamlar-83709b140" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/mert-selamlar-83709b140
          </a>
          <a href="https://github.com/navillan" target="_blank" rel="noopener noreferrer">
            github.com/navillan
          </a>
        </div>  
      </div>    
    </div>
  );
}

export default Contact;