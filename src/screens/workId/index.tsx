import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { octokit } from "../../config/octokit";
import { WorkIdContainer, WorkIdHeader, WorkIdSide } from "./components";
import { GITHUB_OWNER } from "../../utils/consts";

import "./css/module.work-id.css";

const WorkId = () => {
  const { workId } = useParams<{ workId: string }>();
  const [data, setData] = useState(null);
  const [readMe, setReadMe] = useState(null);

  useEffect(() => {
    const getRepos = async () => {
      const response = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: GITHUB_OWNER,
        repo: workId,
        headers: {
          accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      const data = response.data;
      setData(data);
    };
    getRepos();
  }, [workId]);
  useEffect(() => {
    const getReadMe = async () => {
      const response = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: workId,
        path: "README.md",
        mediaType: {
          format: "raw",
        },
        headers: {
          accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      const data = response;
      console.log(data);
      setReadMe(data);
    };
    getReadMe();
  }, [workId]);

  return (
    <section className="work-id container">
      <WorkIdHeader thumbnail={data?.thumbnail} />
      <div className="work-id-wrapper">
        <WorkIdContainer
          projectName={data?.name}
          description={readMe?.data}
          date={data?.updated_at}
        />
        <WorkIdSide demo={data?.homepage} />
      </div>
    </section>
  );
};

export default WorkId;
