import React from "react";
import styles from "./Layout.module.css";

export const Layout = ({
  maxWidth,
  children,
}: {
  maxWidth: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={styles.layoutContainer}
      style={{
        maxWidth: `${maxWidth}px`,
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};
