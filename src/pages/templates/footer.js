import React from "react";

export default class AppFooter extends React.Component {

  render() {
    return (
      <footer className="footer-container" data-id="footer-container">
        <div className="footer">

          <nav className="footer-nav">
            <ul className="footer-nav-links">
              <li>
                <a href="">{"Contact Us"}</a>
              </li>
              <li>
                <a href="">{"What's New"}</a>
              </li>
              <li>
                <a
                  href="https://samaritanministries.org/uploads/documents/Samaritan_Given_Guidelines.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                Guidelines <i className="dashing-icon dashing-icon--new-tab dashing-icon--blue" />
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </footer>
    );
  }

}
