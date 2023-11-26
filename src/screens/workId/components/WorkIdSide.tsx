import "./css/module.workid-side.css";

const WorkIdSide = ({ frontTech, backTech, entreprise, demo }) => {
  return (
    <div className="workid-side">
      <div className="workid-side-entreprise">
        <h4>Entreprise:</h4>
        <span>{entreprise}</span>
      </div>
      <div className="workid-side-techs-block">
        <h4>Front Techs:</h4>
        <div className="workid-side-techs">
          {frontTech?.map((item, index) => (
            <img key={index} src={`/techs/${item}.png`} alt={item} />
          ))}
        </div>
      </div>
      <div className="workid-side-techs-block">
        <h4>Back Techs:</h4>
        <div className="workid-side-techs">
          {backTech?.map((item, index) => (
            <img key={index} src={`/techs/${item}.png`} alt={item} />
          ))}
        </div>
      </div>
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="workid-side-demo">
        <span>Demo</span>
      </a>
    </div>
  );
};

export default WorkIdSide;
