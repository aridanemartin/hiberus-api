import React from "react";

export const Layout = ({
  maxWidth,
  children,
}: {
  maxWidth: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        maxWidth: `${maxWidth}px`,
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};
