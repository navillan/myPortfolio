import RestoranRezervasyon from "../images/restoranRezerve.PNG";
import KelimeBulmaca from "../images/kelimeBulmacaImg.PNG";

function MyWorks() {

  return (
    <div className="main-works">
      <h2>My Works</h2>
      <div className="works-list">
        <div className="work-item">
          <div className="work-item-text">
            <a href="https://navillan.github.io/js990projectFirebase/" target="_blank" rel="noopener noreferrer">Restoran Rezervasyon Sitesi</a>
            <p>A restaurant reservation website with firebase as it's backend. <a href="https://github.com/navillan/js990project" target="_blank" rel="noopener noreferrer">Here</a> you can find the same project with it's own backend.</p>
          </div>
          <img className="work-item-image restoran-rezervasyon-img" src={RestoranRezervasyon} alt="Restoran-Rezervasyon-Screenshot" />
        </div>
        <div className="work-item">
          <div className="work-item-text">
            <a href="https://navillan.github.io/kelimeBulmaca/" target="_blank" rel="noopener noreferrer">Kelime Bulmaca</a>
            <p>A word puzzle game for Turkish words. <a href="https://github.com/navillan/kelimeBulmaca" target="_blank" rel="noopener noreferrer">Here</a> you can find the github repo for this project.</p>
          </div>
          <img className="work-item-image kelime-bulmaca-img" src={KelimeBulmaca} alt="Kelime-Bulmaca-Screenshot" />
        </div>
        <div className="work-item">
          <div className="work-item-text">
            <a href="https://navillan.github.io/hesap/">Hesap Sitesi</a>
            <p>A calculator website with many options. <a href="https://github.com/navillan/hesaplamaSitesi" target="_blank" rel="noopener noreferrer">Here</a> you can find the github repo for this project.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;