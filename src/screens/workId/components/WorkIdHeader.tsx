import styles from "./css/workIdHeader.module.css";

const WorkIdHeader = ({ thumbnail }) => {
  return (
    <div className={styles.WorkIdHeader}>
      <img src={thumbnail} alt="header" />
    </div>
  );
};

export default WorkIdHeader;
