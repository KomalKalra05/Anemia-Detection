import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
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

  return(
    <>
    <section>
    </section>
    </>
  );
  };
export default About;