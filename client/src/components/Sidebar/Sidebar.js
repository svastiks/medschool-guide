import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rankings">Rankings</Link></li>
        <li><Link to="/reddit">Reddit</Link></li>
        <li><Link to="/community">Community</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;