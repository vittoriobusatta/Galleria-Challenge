import "./Assets/Styles/Fonts.css";
import "./Assets/Styles/Reset.css";
import React, {useState, useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Switch,
  Route 
} from "react-router-dom";
import axios from "axios";


function App() {

  const [ paintingsData, setPaintingsData ] = useState([]);

  useEffect(() => {
    fetchPaintingsData();
  }, []) 


  function fetchPaintingsData() {
    axios 
      .get("./Json/data.json")
      .then( res => {
        setPaintingsData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <ul>
        {paintingsData.map((paintingsData, index) => (
          <li key={index}>
            <p>{paintingsData.name}</p>
            <p>{index}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
