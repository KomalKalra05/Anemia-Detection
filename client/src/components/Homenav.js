import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/homenav.css'; 

const HomeNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    localStorage.removeItem("userdbtoken");
    console.log("user logged out"); 
    navigate('/'); 
  } 

  return (
    <header>
      <div className="container">
        <h4><a href="/home">Anemia Detection</a></h4>
        <nav>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <div className={`dropdownnav ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
            <span className="black-text">Select Model</span>
            <div className="arrow"></div>
            {isDropdownOpen && (
              <div className="dropdownnav-content">
                <a href="/dt">Decision Tree</a>
                <a href="/rf">Random Forest</a>
                <a href="/knn">K-Nearest Neighbours</a>
                <a href="/lr">Logistic Regression</a>
                <a href="/svm">SVM</a> 
                <a href="/nb">Gaussian Naive-Bayes</a>
                <a href="/all">All models</a>
                <a href="/image">Deep Learning</a>
              </div>
            )}
          </div>
          <button style={{ backgroundColor: 'transparent', color: 'black', border: 'none', outline: 'none' }} onClick={logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default HomeNavbar;