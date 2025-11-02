import RestoranRezervasyon from "../images/restoranRezerve.PNG";
import KelimeBulmaca from "../images/kelimeBulmacaImg.PNG";
import HesaplamaSitesi from "../images/hesaplamaSitesi.PNG";
import ExampleEcommerce from "../images/exampleEcommerceSite.PNG";
import TestYourLuck from "../images/testYourLuckImg.PNG"

function MyWorks() {

  return (
    <div className="main-works">
      <h2>My Works</h2>
      <div className="works-list">
        <div className="work-item test-your-luck">
          <div className="work-item-text">
            <a href="https://navillan.github.io/testYourLuck/" target="_blank" rel="noopener noreferrer">Test Your Luck</a>
            <p>This was my first project: a game in which you compete against the computer. It marked the beginning of my journey. <a href="https://github.com/navillan/testYourLuck" target="_blank" rel="noopener noreferrer">Here</a> you can find the gitHub repo for this project.</p>
            <p className="tech-stack-description">Techs: HTML5, CSS3, Vanilla JavaScript</p>
          </div>
          <img className="work-item-image test-your-luck-img" src={TestYourLuck} alt="Test-Your-Luck-Screenshot" />
        </div>
        <div className="work-item restoran-rezervasyon">
          <div className="work-item-text">
            <a href="https://navillan.github.io/js990projectFirebase/" target="_blank" rel="noopener noreferrer">Restoran Rezervasyon Sitesi</a>
            <p>A restaurant reservation website with firebase as it's backend. <a href="https://github.com/navillan/js990projectFirestore" target="_blank" rel="noopener noreferrer">Here</a> you can find the github repo for this project and <a href="https://github.com/navillan/js990project" target="_blank" rel="noopener noreferrer">here</a> you can find the same project with it's own backend.</p>
            <p className="tech-stack-description">Techs(SPA): React, Firebase Techs(Backend): Node.js, CORS, Express, Firebase</p>
          </div>
          <img className="work-item-image restoran-rezervasyon-img" src={RestoranRezervasyon} alt="Restoran-Rezervasyon-Screenshot" />
        </div>
        <div className="work-item kelime-bulmaca">
          <div className="work-item-text">
            <a href="https://navillan.github.io/kelimeBulmaca/" target="_blank" rel="noopener noreferrer">Kelime Bulmaca</a>
            <p>A word puzzle game for Turkish words. <a href="https://github.com/navillan/kelimeBulmaca" target="_blank" rel="noopener noreferrer">Here</a> you can find the github repo for this project.</p>
            <p className="tech-stack-description">Techs: React, jQuery, Firebase</p>
          </div>
          <img className="work-item-image kelime-bulmaca-img" src={KelimeBulmaca} alt="Kelime-Bulmaca-Screenshot" />
        </div>
        <div className="work-item hesaplama-sitesi">
          <div className="work-item-text">
            <a href="https://navillan.github.io/hesaplamaSitesi" target="_blank" rel="noopener noreferrer">Hesap Sitesi</a>
            <p>A calculator website with many options. <a href="https://github.com/navillan/hesaplamaSitesi" target="_blank" rel="noopener noreferrer">Here</a> you can find the github repo for this project.</p>
            <p className="tech-stack-description">Techs: React</p>
            <img className="work-item-image hesap-sitesi-img" src={HesaplamaSitesi} alt="Hesap-Sitesi-Screenshot" />
          </div>
        </div>
        <div className="work-item example-ecommerce">
          <div className="work-item-text">
            <a href="https://navillan.github.io/exampleEcommerce" target="_blank" rel="noopener noreferrer">Example Ecommerce Site</a>
            <p>An example ecommerce site. <a href="https://github.com/navillan/exampleEcommerce" target="_blank" rel="noopener noreferrer">Here</a> you can find the github repo for this project.</p>
            <p className="tech-stack-description">Techs: React, React Router, jQuery</p>
            <img className="work-item-image example-ecommerce-img" src={ExampleEcommerce} alt="Example-Ecommerce-Screenshot" />
          </div>
          </div>
      </div>
    </div>
  );
}

export default MyWorks;