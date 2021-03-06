import React, { useState } from "react";
import { FaRegFlag, FaFlag, FaHeart, FaRegHeart } from "react-icons/fa";
import { Tooltip } from "./Tooltip.jsx";

export const IntroductionModal = ({
  currentSelect,
  closeModal,
  updateWishList,
  updateBeenToList,
  getAllBeenToList,
  getAllWishList,
}) => {
  const [wish, setWish] = useState(currentSelect.wish);
  const [BeenTo, setBeenTo] = useState(currentSelect.BeenTo);

  const addToBeenTo = () => {
    setBeenTo(true);
    updateBeenToList(currentSelect.id, { BeenTo: true });
  };

  const addToWish = () => {
    setWish(true);
    updateWishList(currentSelect.id, { wish: true });
  };

  const deleteFromBeenTo = () => {
    setBeenTo(false);
    updateBeenToList(currentSelect.id, { BeenTo: false });
  };

  const deleteFromWish = () => {
    setWish(false);
    updateWishList(currentSelect.id, { wish: false });
  };

  return (
    <div className="IntroductionModal" onClick={closeModal}>
      <div
        className="IntroductionModal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="IntroductionModal-header">
          <h2 className="IntroductionModal-title">
            About {currentSelect.name}
            <span className="FlagHeart">
              <Tooltip content="Went">
                {BeenTo ? (
                  <FaFlag className="reactIconG" onClick={deleteFromBeenTo} />
                ) : (
                  <FaRegFlag className="reactIconB" onClick={addToBeenTo} />
                )}
              </Tooltip>

              {"  "}

              <Tooltip content="Wish">
                {wish ? (
                  <FaHeart className="reactIconA" onClick={deleteFromWish} />
                ) : (
                  <FaRegHeart className="reactIconB" onClick={addToWish} />
                )}
              </Tooltip>
            </span>
          </h2>
        </div>
        <div className="IntroductionModal-body">
          <img
            className="IntroductionModal-image"
            src={currentSelect.url}
          ></img>
          <br />
          <br />
          {currentSelect.description.split("/n/n").map((p, i) => {
            return <p key={i}>{p}</p>;
          })}
        </div>
        <div className="IntroductionModal-footer">
          <div className="boat">
            <img src="/svg/boat.png" onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
