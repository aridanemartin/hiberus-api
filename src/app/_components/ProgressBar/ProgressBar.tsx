import React from "react";
import styles from "./ProgressBar.module.css";

export const ProgressBar = ({
  value,
  stat,
}: {
  value: number;
  stat: string;
}) => {
  const progressBarStyle = {
    width: `${value}%`,
  };

  return (
    <div className={styles.progressBarContainer}>
      <p>{stat}:</p>
      <div className={styles.progress} style={progressBarStyle}>
        <div className={styles.progressBar}></div>
      </div>
    </div>
  );
};
