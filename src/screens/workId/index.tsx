import { useParams } from "react-router-dom";

import { WorkIdContainer, WorkIdHeader, WorkIdSide } from "./components";
import { GitHubWorksData } from "../../data/GitHubWorks";

import styles from "./css/workId.module.css";

const WorkId = () => {
  const { workId } = useParams<{ workId: string }>();

  const data = GitHubWorksData;

  const selectedWork = data.find((work) => work.slug === workId);

  return (
    <section className={styles.WorkId + " container"}>
      <WorkIdHeader thumbnail={selectedWork.thumbnail} />
      <div className={styles.WorkIdWrapper}>
        <WorkIdContainer
          projectIcon={selectedWork.icon}
          projectName={selectedWork.title}
          description={selectedWork.markdown}
          date={selectedWork.date}
        />
        <WorkIdSide
          homepage={selectedWork.homepage}
          languages={selectedWork.languages}
        />
      </div>
    </section>
  );
};

export default WorkId;
