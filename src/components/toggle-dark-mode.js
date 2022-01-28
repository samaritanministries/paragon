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
      <button className="button button--secondary button--icon theme-switcher" onClick={this.toggleDarkMode}>
        <span />Mode
      </button>

    // <fieldset className="dark-mode-toggle">
    //   <label className="inline" htmlFor="switch1">Dark Mode</label>
    //   <div className="switch">
    //     <input name="switch" type="checkbox" className="switch--checkbox" id="switch1" onClick={this.toggleDarkMode} />
    //     <label className="switch--label" htmlFor="switch1">
    //       <span className="switch--inner" />
    //       <span className="switch--handle" />
    //     </label>
    //   </div>
    // </fieldset>
    );
  }

}
export default ToggleDarkMode;
