import "./css/module.workid-side.css";

const WorkIdSide = ({ demo }) => {
  return (
    <div className="workid-side">
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
