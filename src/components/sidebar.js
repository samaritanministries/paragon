import React from 'react'
import { Link } from 'gatsby'

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

  isLinkActive() {
    return true
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
                <Link to="/resources" activeClassName="active">Resources</Link>
              </div>
            </div>

            <div className={this.state.showStyle ? 'group-container expanded' : 'group-container'}>
              <h4 className="group-title" onClick={this.toggleStyle}>Style</h4>
              <i className={this.state.showStyle ? 'dashing-icon dashing-icon--arrow-down' : 'dashing-icon dashing-icon--arrow-right'}></i>

              <div className="menu-group">
                <Link to="/style/color" activeClassName="active">Color</Link>
                <Link to="/style/typography" activeClassName="active">Typography</Link>
              </div>
            </div>

            <div className={this.state.showComponents ? 'group-container expanded' : 'group-container'}>

              <h4 className="group-title" onClick={this.toggleComponents}>Components</h4>
              <i className={this.state.showComponents ? 'dashing-icon dashing-icon--arrow-down' : 'dashing-icon dashing-icon--arrow-right'}></i>

              <div className="menu-group">
                <Link to="/components/actions/code" activeClassName="active" title="actions">Actions</Link>
                <Link to="/components/banner/code" activeClassName="active">Banner</Link>
                <Link to="/components/cards/code" activeClassName="active">Cards</Link>
                <Link to="/components/checkboxes/code" activeClassName="active">Checkboxes</Link>
                <Link to="/components/clippy/code" activeClassName="active">Clippy</Link>
                <Link to="/components/footer/code" activeClassName="active">Footer</Link>
                <Link to="/components/forms/code" activeClassName="active">Forms</Link>
              </div>

            </div>

          </ul>
        </div>
      </div>
    )
  }
}
export default Sidebar;
