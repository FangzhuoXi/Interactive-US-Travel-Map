import React, { useState } from "react";
import { FaRegFlag, FaFlag, FaHeart, FaRegHeart } from "react-icons/fa";

export const IntroductionModal = ({ currentSelect, closeModal }) => {
  const [wish, setWish] = useState(currentSelect.wish);
  const [BeenTo, setBeenTo] = useState(currentSelect.BeenTo);

  const addToList = (e) => {
    console.log(e.target);
    console.log(e.target.getAttribute("value"));
    setWish(true);
    // add to database
  };

  const deleteFromList = () => {
    setWish(false);
    // add to database
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
            {wish ? (
              <FaFlag className="reactIconA" onClick={deleteFromList} />
            ) : (
              <FaRegFlag className="reactIconB" onClick={addToList} />
            )}
            {BeenTo ? (
              <FaHeart
                className="reactIconA"
                value="heart"
                onClick={deleteFromList}
              />
            ) : (
              <FaRegHeart
                className="reactIconB"
                value="heart"
                onClick={addToList}
              />
            )}
          </h2>
        </div>
        <div className="IntroductionModal-body">
          <img
            className="IntroductionModal-image"
            src={currentSelect.url}
          ></img>
          <br />
          <br />
          {currentSelect.description}
        </div>
        <div className="IntroductionModal-footer">
          <button className="modalButton" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
