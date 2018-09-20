import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery';

import logo from "../img/dash-donkey.svg";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showSidebar: false,
                  showDashing: true,
                  showComponents: true,
                  showStyle: true};
    this.handleClick = this.handleClick.bind(this);
    this.toggleDashing = this.toggleDashing.bind(this);
    this.toggleComponents = this.toggleComponents.bind(this);
    this.toggleStyle = this.toggleStyle.bind(this);
  }

  componentDidMount() {
    this.loadStateWithLocalStorage();

    //Loop through sidebar links and see if active
    var url = window.location.href;
    $(".menu-group a").each(function() {
      var sidebarText = $(this).text().toLowerCase()
        if (url.includes("css-grid")) {
          $('#css-grid').addClass("active");
        } else if ((url.includes(sidebarText))) {
          $(this).addClass("active");
        }
    });
  }

   handleClick() {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar
    }));
  }

  toggleDashing() {
    this.setState(prevState => ({
      showDashing: !prevState.showDashing
    }));
    localStorage.setItem("showDashing", JSON.stringify(!this.state.showDashing));
  }

  toggleComponents() {
    this.setState(prevState => ({
      showComponents: !prevState.showComponents
    }));
    localStorage.setItem("showComponents", JSON.stringify(!this.state.showComponents));
  }

  toggleStyle() {
    this.setState(prevState => ({
      showStyle: !prevState.showStyle
    }));
    localStorage.setItem("showStyle", JSON.stringify(!this.state.showStyle));
  }

  loadStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  render() {

    return (

      <div>

        <div className={this.state.showSidebar ? 'mobile-sidebar expanded' : 'mobile-sidebar'}>
          <button className="button--gray button--sidebar-icon" onClick={this.handleClick}>
            <i className={this.state.showSidebar ? 'dashing-icon dashing-icon--close' : 'dashing-icon'}></i>
          </button>
        </div>

        <div className={this.state.showSidebar ? 'example-sidebar show' : 'example-sidebar'}>

          <ul>
            <div style={{ textAlign: "center" }}>
              <img src={logo} alt="Dash the Donkey" style={{ width: "8rem" }}/>
            </div>

            <div className={this.state.showDashing ? 'group-container expanded' : 'group-container'}>
              <h4 className="group-title" onClick={this.toggleDashing}>Dashing</h4>
              <i className={this.state.showDashing ? 'dashing-icon dashing-icon--arrow-down' : 'dashing-icon dashing-icon--arrow-right'}></i>

              <div className="menu-group">
                <Link to="/" activeClassName="active">Principles</Link>
                <Link to="/get-started" activeClassName="active">Get Started</Link>
                <Link to="/resources">Resources</Link>
              </div>
            </div>

            <div className={this.state.showStyle ? 'group-container expanded' : 'group-container'}>
              <h4 className="group-title" onClick={this.toggleStyle}>Style</h4>
              <i className={this.state.showStyle ? 'dashing-icon dashing-icon--arrow-down' : 'dashing-icon dashing-icon--arrow-right'}></i>

              <div className="menu-group">
                <Link to="/style/color/code">Color</Link>
                <Link to="/style/typography/code">Typography</Link>
              </div>
            </div>

            <div className={this.state.showComponents ? 'group-container expanded' : 'group-container'}>

              <h4 className="group-title" onClick={this.toggleComponents}>Components</h4>
              <i className={this.state.showComponents ? 'dashing-icon dashing-icon--arrow-down' : 'dashing-icon dashing-icon--arrow-right'}></i>

              <div className="menu-group">
                <Link to="/components/actions/code">Actions</Link>
                <Link to="/components/banner/code">Banner</Link>
                <Link to="/components/cards/code">Cards</Link>
                <Link to="/components/checkboxes/code">Checkboxes</Link>
                <Link to="/components/clippy/code">Clippy</Link>
                <Link to="/components/footer/code">Footer</Link>
                <Link to="/components/forms/code">Forms</Link>
                <Link to="/components/css-grid/code" id="css-grid">CSS Grid</Link>
                <Link to="/components/grid/code">Grid</Link>
                <Link to="/components/icons/code">Icons</Link>
              </div>

            </div>

          </ul>
        </div>
      </div>
    )
  }
}
export default Sidebar;
