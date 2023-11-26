import "./css/module.workid-header.css";

const WorkIdHeader = ({ thumbnail }) => {
  return (
    <div className="workid-header">
      <img src={thumbnail} alt="header" />
    </div>
  );
};

export default WorkIdHeader;
