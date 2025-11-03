import { myWorksList } from "../utils/myWorks.js";

function MyWorks() {

  return (
    <div className="main-works">
      <div className="my-works-header">My Works</div>
      <div className="works-list">
        {myWorksList.map((work)=>(
          <div className="work-item" key={work.name}>
            <a className="work-name" href={work.live} target="_blank" rel="noopener noreferrer">{work.name}</a>
            <p className="work-description">{work.description}
              {" "}<a href={work.githubRepo}>Here</a>{" "}
              you can find the gitHub repo for this project.
              {(work.githubRepo2)
              ?<p><a href="https://github.com/navillan/js990project" target="_blank" rel="noopener noreferrer">Here</a> you can find the same project with it's own backend.</p>
              : null}
            </p>            
            <p className="tech-stack-description">Techs: {work.techs}</p>
            <div className="work-item-image" style={{backgroundImage: `url(${work.image})`}}></div>
          </div>
        ))}        
      </div>
    </div>
  );
}

export default MyWorks;