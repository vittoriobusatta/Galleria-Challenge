import "./Assets/Styles/Fonts.css";
import "./Assets/Styles/Reset.css";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Slideshow from "./Components/Slideshow";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar{
      display: none;
    }
    ::-moz-selection {
      background: #ECE2D0;
      text-shadow: none;
    }
    ::selection {
      background: #ECE2D0;
      text-shadow: none;
    }
    /* @media only screen and (min-width : 1824px) {
      font-size: 70%;
    }  */
    @media screen and (max-width: 1400px) {
      font-size: 58%;
    }
    @media screen and (max-width: 1224px) {
      font-size: 52%;
    }
    @media screen and (max-width: 992px) {
      font-size: 46%;
    }
    @media screen and (max-width: 768px) {
      font-size: 40%;
    }
    @media screen and (max-width: 576px) {
      font-size: 34%;
    }
    @media screen and (max-width: 321px) {
      font-size: 28%;
    }
    
  } 
  body {
    background-color: #fff;
    font-size: 1.6rem;
  }

  
`;

function App() {
  const [paintingsData, setPaintingsData] = useState([]);

  function fetchPaintingsData() {
    axios
      .get("./Json/data.json")
      .then((res) => {
        setPaintingsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchPaintingsData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home paintingsData={paintingsData} />} />
          <Route
            path="/slideshow"
            element={<Slideshow paintingsData={paintingsData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
