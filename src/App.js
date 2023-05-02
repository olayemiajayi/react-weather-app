import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>
        <Weather />
        <small>
          <a
            href="https://github.com/olayemiajayi/react-weather-app"
            target="_balnk"
          >
            Open-Source code
          </a>
          By Yetunde Ajayi
        </small>
      </header>
    </div>
  );
}

export default App;
