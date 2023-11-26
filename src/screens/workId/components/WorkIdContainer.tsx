import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import dayjs from "dayjs";
import "dayjs/locale/fr";

import "./css/module.workid-container.css";

dayjs.locale("fr");
dayjs().format();

const WorkIdContainer = ({ projectName, description, date }) => {
  return (
    <div className="workid-container">
      <h1>{projectName}</h1>
      <h3>{dayjs.unix(date).format("DD MMMM YYYY")}</h3>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
    </div>
  );
};

export default WorkIdContainer;
