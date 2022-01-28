import React from "react";
import $ from "jquery";

const darkModeClass = "dark-mode";

class ToggleDarkMode extends React.Component {

  constructor(props) {
    super(props);
    this.state = { togClass: 'dark' };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  setTheme(themeName) {
    localStorage.setItem('theme', themeName);
  }

  setDark() {
    this.setTheme('theme-dark');
    document.body.classList.add(darkModeClass);
    this.setState({togClass: 'dark'})
  }
  setLight() {
    this.setTheme('theme-light')
    document.body.classList.remove(darkModeClass);
    this.setState({togClass: 'light'})
  }

  keepTheme() {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'theme-dark') {
        this.setDark();
      } else if (localStorage.getItem('theme') === 'theme-light') {
        this.setLight();
      }
    } else {
      this.setDark();
    }
  }

  componentDidMount() {
    this.keepTheme();
  }

  toggleDarkMode() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      this.setLight();
    } else {
      this.setDark();
    }
  }

  render() {
    const themeName = localStorage.getItem('theme');
    return (
      <>
        {themeName === "theme-dark" ?
          <button className="button button--secondary button--icon theme-switcher" onClick={this.toggleDarkMode}>
           <span />Mode
          </button>
          :
          <button className="button button--secondary button--icon theme-switcher" onClick={this.toggleDarkMode}>
            <div>
             <span className="light-mode" />Mode
           </div>
          </button>
        }
      </>
    );
  }

}
export default ToggleDarkMode;
