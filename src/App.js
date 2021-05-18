import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        <footer className="App-footer">
          <i class="fi-xnsuxl-github"></i>
          <small>
            {" "}
            Coded by Victoria Nielsen and is{" "}
            <a
              className="footer"
              rel="noreferrer"
              href="https://github.com/victoria-dk/dictionary-project"
              target="_blank"
            >
              open source on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
