import React from "react";
//import '../sass/example-page/example-page.scss'
import logo from "../img/Dashing.svg";

export default ({ children }) => (
  <div>
    <div>
      <div className='example-sidebar'>
        <ul>
          <div className="logo-container">
            <img src={logo} alt="Paragon Logo" />
          </div>
        </ul>
      </div>
    </div>

    <div className="app-content">
      {children}
      <footer>
        <div className="copyright">
          © 2018 Samaritan Ministries International
        </div>
        <a href="https://github.com/samaritanministries/paragon" target="_blank" rel="noopener noreferrer">Download on GitHub</a>
      </footer>
    </div>
  </div>
);
