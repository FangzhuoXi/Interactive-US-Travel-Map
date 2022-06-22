import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Tooltip } from "./Tooltip.jsx";
import { usMap, labels } from "./../../public/svg/mapData.js";
import { Path } from "./Path.jsx";
import { IntroductionModal } from "./IntroductionModal.jsx";
import axios from "axios";

const USMap = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSelect, setCurrentSelect] = useState({});

  const openModal = (e) => {
    console.log(e.target.id);
    axios.get(`/state/${e.target.id}`).then((state) => {
      setCurrentSelect(state.data);
      setShowModal(true);
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        width={587.94}
        height={343.54001}
        style={{
          fillRule: "evenodd",
        }}
        viewBox="0 0 165.92968 96.95461"
        id="svg3066"
      >
        {usMap.map((state) => {
          return (
            <Path
              key={state.id}
              id={state.id}
              className={state.className}
              d={state.d}
              nodetypes={state.nodetypes}
              openModal={openModal}
            />
          );
        })}

        <path
          style={{
            fontSize: "3.10444403px",
            fontStyle: "normal",
            fontWeight: "normal",
            lineHeight: "125%",
            letterSpacing: 0,
            wordSpacing: 0,
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            fontFamily: "Sans",
          }}
          id={labels.id}
          className={labels.className}
          d={labels.d}
          nodetypes={labels.nodetypes}
        />
      </svg>
      {showModal && (
        <IntroductionModal
          currentSelect={currentSelect}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default USMap;
