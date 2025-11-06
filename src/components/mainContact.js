

function Contact() {
  return (
    <div className="main-contact">
      <h2>Contact Me</h2>
      <div className="contact-list">
        <div className="contact-name">
          <p>Email:</p>
          <p>LinkedIn:</p>
          <p>GitHub:</p>
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