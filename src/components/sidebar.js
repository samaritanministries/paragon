import React from 'react'
import { NavLink } from 'react-router-dom'

import { Accordion, AccordionItem } from 'react-sanfona'
import logo from "../img/dash-donkey.svg";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showSidebar: false};
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar
    }));
  }

  render() {

    const isActiveTest = (match, location) => {
      // if (!match) {
      //   return false
      // }
      console.log()
      //return location.pathname.includes(this.props.children)
    }

    return (

      <div>

        <div className={this.state.showSidebar ? 'mobile-sidebar expanded' : 'mobile-sidebar'}>
          <button className="button--gray button--sidebar-icon" onClick={this.handleClick}>
            <i className={this.state.showSidebar ? 'dashing-icon dashing-icon--close' : 'dashing-icon'}></i>
          </button>
        </div>

        <div className={this.state.showSidebar ? 'example-sidebar show' : 'example-sidebar'}>
          <Accordion allowMultiple={true}>
            <div style={{ textAlign: "center" }}>
              <img src={logo} alt="Dash the Donkey" style={{ width: "8rem" }}/>
            </div>

            <AccordionItem title="Dashing" expanded={true}>
            <i className="dashing-icon"></i>

              <div className="menu-group">
                <NavLink exact to="/" activeClassName="active">Principles</NavLink>
                <NavLink exact to="/get-started" activeClassName="active">Get Started</NavLink>
                <NavLink exact to="/resources" activeClassName="active">Resources</NavLink>
              </div>

            </AccordionItem>

            <AccordionItem title="Style" expanded={true}>
            <i className="dashing-icon"></i>

            <div className="menu-group">
              <NavLink strict to="/style/color" activeClassName="active">Color</NavLink>
              <NavLink strict to="/style/typography" activeClassName="active">Typography</NavLink>
            </div>

            </AccordionItem>

            <AccordionItem title="Components" expanded={true}>
            <i className="dashing-icon"></i>

            <div className="menu-group">
              <NavLink strict to="/components/actions/code" isActive={isActiveTest} activeClassName="active" title="actions">Actions</NavLink>
              <NavLink strict to="/components/banner/code" isActive={isActiveTest} activeClassName="active">Banner</NavLink>
              <NavLink strict to="/components/cards/code" isActive={isActiveTest} activeClassName="active">Cards</NavLink>
              <NavLink strict to="/components/checkboxes/code" isActive={isActiveTest} activeClassName="active">Checkboxes</NavLink>
              <NavLink strict to="/components/clippy/code" isActive={isActiveTest} activeClassName="active">Clippy</NavLink>
              <NavLink strict to="/components/footer/code" isActive={isActiveTest} activeClassName="active">Footer</NavLink>
              <NavLink strict to="/components/forms/code" isActive={isActiveTest} activeClassName="active">Forms</NavLink>
            </div>

            </AccordionItem>

          </Accordion>
        </div>
      </div>
    )
  }
}
export default Sidebar;
