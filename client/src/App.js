import logo from './logo.svg';
import './App.css';

import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Rankings from './components/Rankings/Rankings';
import BurgerIcon from './components/BurgerIcon/BurgerIcon';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home'
import RedditReferences from './components/RedditReferences/RedditReference';
import Header from './components/Header/Header';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/closed
  };

  return (
    <Router>
    <div className="App">
      <BurgerIcon toggleSidebar={toggleSidebar} />
      <Header/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/rankings" element={<Rankings />}/>
          <Route path="/reddit" element={<RedditReferences />}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
