import React, { useState } from "react";

export const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    // clearInterval(timeout);
    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  return (
    <g
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && <g className={`Tooltip-Tip right`}>{props.content}</g>}
    </g>
  );
};
