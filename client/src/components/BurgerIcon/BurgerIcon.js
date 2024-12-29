import React from "react";
import "./BurgerIcon.css";

const BurgerIcon = ({ toggleSidebar }) => {
  return (
    <div className="burger-icon" onClick={toggleSidebar}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default BurgerIcon;