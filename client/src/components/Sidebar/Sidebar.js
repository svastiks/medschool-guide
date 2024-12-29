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
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/rankings" onClick={toggleSidebar}>Rankings</Link></li>
        <li><Link to="/reddit" onClick={toggleSidebar}>Reddit</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;