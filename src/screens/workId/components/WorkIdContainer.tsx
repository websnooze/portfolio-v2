import ReactMarkdown from "react-markdown";

import styles from "./css/workIdContainer.module.css";

const WorkIdContainer = ({ projectIcon, projectName, description, date }) => {
  return (
    <div className={styles.WorkIdContainer}>
      <h1>
        {projectIcon}
        {projectName}
      </h1>
      <h3>{date}</h3>
      <div className={styles.WorkIdContainerDescription}>
        <ReactMarkdown children={description} />
      </div>
    </div>
  );
};

export default WorkIdContainer;
