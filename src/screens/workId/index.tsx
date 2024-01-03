import { useParams } from "react-router-dom";

import { WorkIdContainer, WorkIdHeader, WorkIdSide } from "./components";
import { GitHubWorksData } from "../../data/GitHubWorks";

import "./css/module.work-id.css";

const WorkId = () => {
  const { workId } = useParams<{ workId: string }>();

  const data = GitHubWorksData;

  const selectedWork = data.find((work) => work.slug === workId);

  return (
    <section className="work-id container">
      <WorkIdHeader thumbnail={selectedWork.thumbnail} />
      <div className="work-id-wrapper">
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
