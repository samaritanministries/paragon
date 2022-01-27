import React from "react";
import $ from "jquery";

const darkModeClass = "dark-mode";

class ToggleDarkMode extends React.Component {

  constructor(props) {
    super(props);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    document.body.classList.toggle(darkModeClass);
  }

  render() {

    return (
      <button className="button button--orange button--icon theme-switcher" onClick={this.toggleDarkMode}>
        <i className="dashing-icon dashing-icon--star-filled mr-space-xs" />Mode
      </button>
    );
  }

}
export default ToggleDarkMode;
