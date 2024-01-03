import ReactMarkdown from "react-markdown";

import "./css/module.workid-container.css";

const WorkIdContainer = ({ projectIcon, projectName, description, date }) => {
  return (
    <div className="workid-container">
      <h1>
        {projectIcon}
        {projectName}
      </h1>
      <h3>{date}</h3>
      <div className="workid-container-description">
        <ReactMarkdown children={description} />
      </div>
    </div>
  );
};

export default WorkIdContainer;
