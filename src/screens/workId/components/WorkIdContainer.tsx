import ReactMarkdown from "react-markdown";

import dayjs from "dayjs";
import "dayjs/locale/fr";

import "./css/module.workid-container.css";

dayjs.locale("fr");
dayjs().format();

const WorkIdContainer = ({ projectName, description, date }) => {
  return (
    <div className="workid-container">
      <h1>{projectName}</h1>
      <h3>{dayjs(date).format("DD MMMM YYYY")}</h3>
      <div className="workid-container-description">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkIdContainer;
