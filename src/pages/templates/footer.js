import React from "react";

export default class AppFooter extends React.Component {

  render() {
    return (
      <footer className="footer">

        <nav className="footer-nav">
          <ul>
            <li>
              <a href="" target="_blank">
                Careers <i className="dashing-icon dashing-icon--new-tab dashing-icon--blue" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
              Guidelines <i className="dashing-icon dashing-icon--new-tab dashing-icon--blue" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                {"What's New"}
              </a>
            </li>
          </ul>
        </nav>

      </footer>
    );
  }

}
