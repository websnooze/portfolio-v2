import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { octokit } from "../../config/octokit";
import { WorkIdContainer, WorkIdHeader, WorkIdSide } from "./components";
import { GITHUB_OWNER } from "../../utils/consts";

import "./css/module.work-id.css";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const WorkId = () => {
  const { workId } = useParams<{ workId: string }>();
  const [data, setData] = useState(null);
  const [document, setDocument] = useState(null);
  const [readMe, setReadMe] = useState(null);

  useEffect(() => {
    const worksRef = collection(db, "projects");
    const queryRef = query(worksRef, where("github_repo", "==", workId));

    onSnapshot(queryRef, (snapshot) => {
      const works = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDocument(works[0]);
    });
  }, [workId]);

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
      setReadMe(data);
    };
    getReadMe();
  }, [workId]);

  return (
    <section className="work-id container">
      <WorkIdHeader thumbnail={document?.thumbnail} />
      <div className="work-id-wrapper">
        <WorkIdContainer
          projectName={document?.title}
          description={readMe?.data}
          date={data?.updated_at}
        />
        <WorkIdSide demo={data?.homepage} githubRepo={workId} />
      </div>
    </section>
  );
};

export default WorkId;
