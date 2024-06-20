import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/home.css"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
  };

  
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])

  return (
    <section className='bg'>
      <div className="page-content">
          <div className="info">
            <strong style={{fontSize:'25px'}}>What is Anemia?</strong>
            <p className='p'>Anemia is a health condition where the blood lacks a sufficient number of red blood cells or hemoglobin, leading to reduced oxygen-carrying capacity and symptoms like fatigue, weakness, and paleness.</p>
              <div className="contain">
              <div className="flex-box">
                <h4>Causes of Anemia</h4>
                <ul>
                  <li>Iron deficiency</li>
                  <li>Vitamin deficiency (B12, folate)</li>
                  <li>Chronic diseases</li>
                  <li>Inherited disorders</li>
                </ul>
              </div>

              <div className="flex-box">
                <h4>Anemia Symptoms</h4>
                <ul>
                  <li>Fatigue and weakness</li>
                  <li>Pale or sallow skin</li>
                  <li>Shortness of breath</li>
                  <li>Dizziness or lightheadedness</li>
                  <li>Cold hands and feet</li>
                </ul>
              </div>

              <div className="flex-box">
                <h4>Anemia Treatment</h4>
                <ul>
                  <li>Iron Supplements</li>
                  <li>Blood Transfusion</li>
                  <li>Vitamin Supplements</li>
                  <li>Lifestyle Modifications</li>
                </ul>
              </div>
              </div>
              <div className="dropdown">
                <button onClick={toggleDropdown} className="dropbtn">
                  Select your Model
                </button>
        {isOpen && (
          <div className="dropdown-content">
            <Link to="/dt">Decision Tree</Link><br/>
            <Link to="/rf">Random Forest</Link><br/>
            <Link to="/svm">SVM</Link><br/>
            <Link to="/knn">KNN</Link><br/>
            <Link to="/nb">Gaussian Naive Bayes</Link><br/>
            <Link to="/lr">Logistic Regression</Link><br/>
            <Link to="/all">All models</Link><br/>
            <Link to="/image">Deep Learning</Link><br/>
          </div>
        )}
        </div>
            </div>
          </div>
    </section>
  );
};


export default Home;