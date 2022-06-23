import React, { useState, useEffect } from "react";
import { usMap, labels } from "./../../public/svg/mapData.js";
import { Path } from "./Path.jsx";
import { IntroductionModal } from "./IntroductionModal.jsx";
import axios from "axios";

const USMap = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSelect, setCurrentSelect] = useState({});
  const [wishList, setWishList] = useState([]);
  const [BeenToList, setBeenToList] = useState([]);

  const updateWishList = (id, data) => {
    axios
      .put(`/state/${id}`, data)
      .then(() => {
        getAllWishList();
      })
      .catch((err) => {
        console.log("update list err", err);
      });
  };

  const updateBeenToList = (id, data) => {
    axios
      .put(`/state/${id}`, data)
      .then(() => {
        getAllBeenToList();
      })
      .catch((err) => {
        console.log("update list err", err);
      });
  };

  const openModal = (e) => {
    axios
      .get(`/state/${e.target.id}`)
      .then((state) => {
        setCurrentSelect(state.data);
        setShowModal(true);
      })
      .catch((err) => {
        console.log("get one state err", err);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getAllWishList = () => {
    axios
      .get("/wish")
      .then((response) => {
        console.log(response.data);
        setWishList(response.data);
      })
      .catch((err) => {
        console.log("get wish list err", err);
      });
  };

  const getAllBeenToList = () => {
    axios
      .get("/beeto")
      .then((response) => {
        console.log(response.data);
        setBeenToList(response.data);
      })
      .catch((err) => {
        console.log("get BeenTo list err", err);
      });
  };

  useEffect(() => {
    getAllWishList();
  }, []);

  useEffect(() => {
    getAllBeenToList();
  }, []);

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
          updateWishList={updateWishList}
          updateBeenToList={updateBeenToList}
          getAllWishList={getAllWishList}
          getAllBeenToList={getAllBeenToList}
        />
      )}
      {BeenToList.map((place) => {
        return (
          <img
            width="25"
            height="25"
            key={place.id}
            className="pins"
            // preserveAspectRatio="none"
            src="/svg/HaveBeen.png"
            style={{
              position: "absolute",
              left: `${place.left}%`,
              top: `${place.top}%`,
            }}
          ></img>
        );
      })}
      {wishList.map((place) => {
        return (
          <img
            width="25"
            height="25"
            key={place.id}
            className="pins"
            // preserveAspectRatio="none"
            src="/svg/Wish.png"
            style={{
              position: "absolute",
              left: `${place.left}%`,
              top: `${place.top}%`,
            }}
          ></img>
        );
      })}
    </>
  );
};

export default USMap;
