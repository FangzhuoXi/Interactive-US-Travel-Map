import React from "react";

export const Path = ({ id, d, className, nodetypes, openModal }) => {
  return (
    <path
      className={className}
      d={d}
      id={id}
      nodetypes={nodetypes}
      onClick={openModal}
    />
  );
};
