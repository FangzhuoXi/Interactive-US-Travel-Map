import React, { useState } from "react";
import USMap from "./Map.jsx";
import Styles from "./../../styles/styles.css";
import { Summary } from "./Summary.jsx";
import axios from "axios";

const App = () => {
  const [wishList, setWishList] = useState([]);
  const [BeenToList, setBeenToList] = useState([]);
  const [wishCount, setWishCount] = useState(0);
  const [beenToCount, setBeenToCount] = useState(0);

  const getAllWishList = () => {
    axios
      .get("/wish")
      .then((response) => {
        console.log(response.data);
        setWishCount(response.data.length);
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
        setBeenToCount(response.data.length);
        setBeenToList(response.data);
      })
      .catch((err) => {
        console.log("get BeenTo list err", err);
      });
  };

  return (
    <>
      <div className="map">
        <h1>Explore the US</h1>
        <USMap
          wishList={wishList}
          BeenToList={BeenToList}
          getAllWishList={getAllWishList}
          getAllBeenToList={getAllBeenToList}
        />
      </div>
      <Summary wishCount={wishCount} beenToCount={beenToCount} />
    </>
  );
};

export default App;
