import AboutMe from './aboutMe.js';
import MyWorks from './mainBody.js';
import Contact from './mainContact.js';

function App() {
  return (
    <div className="App">
      <div className="top-start"></div>
      <AboutMe />
      <MyWorks />
      <Contact />
      <div className="bottom-end"></div>
    </div>
  );
}

export default App;
