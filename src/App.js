import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>¡Esta App esta realizada en React!</p>
        <p>Y si es una Progressive Web App</p>
        <a
          className="App-link"
          href="https://blog.logrocket.com/creating-a-lists-pwa-with-react-and-firebase/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link del tutorial
        </a>
      </header>
    </div>
  );
}

export default App;
