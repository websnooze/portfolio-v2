import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { db } from "../../config/firebase";
import { WorkIdContainer, WorkIdHeader, WorkIdSide } from "./components";

import "./css/module.work-id.css";

const WorkId = () => {
  const { workId } = useParams<{ workId: string }>();
  const [data, setData] = useState(null);

  useEffect(() => {
    const worksRef = collection(db, "projects");
    const queryRef = query(worksRef, where("slug", "==", workId));

    onSnapshot(queryRef, (snapshot) => {
      const works = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(works[0]);
    });
  }, [workId]);

  return (
    <section className="work-id container">
      <WorkIdHeader thumbnail={data?.thumbnail} />
      <div className="work-id-wrapper">
        <WorkIdContainer
          projectName={data?.projectName}
          description={data?.description}
          date={data?.date?.seconds}
        />
        <WorkIdSide
          frontTech={data?.frontTech}
          backTech={data?.backTech}
          entreprise={data?.entreprise}
          demo={data?.demo}
        />
      </div>
    </section>
  );
};

export default WorkId;
