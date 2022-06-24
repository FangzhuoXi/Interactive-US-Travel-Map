import React from "react";

export const Summary = ({ beenToCount, wishCount }) => {
  return (
    <div className="summary">
      <h4>Have Been To ⛳️ {beenToCount} States</h4>
      <h4>Wish To Visit 💛 {wishCount} States</h4>
    </div>
  );
};
