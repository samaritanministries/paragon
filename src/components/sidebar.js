import React from 'react'

import { Link } from 'gatsby'
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
                <Link exact to="/" activeClassName="active">Principles</Link>
                <Link exact to="/get-started" activeClassName="active">Get Started</Link>
                <Link exact to="/resources" activeClassName="active">Resources</Link>
              </div>

            </AccordionItem>

            <AccordionItem title="Style" expanded={true}>
            <i className="dashing-icon"></i>

            <div className="menu-group">
              <Link strict to="/style/color" activeClassName="active">Color</Link>
              <Link strict to="/style/typography" activeClassName="active">Typography</Link>
            </div>

            </AccordionItem>

            <AccordionItem title="Components" expanded={true}>
            <i className="dashing-icon"></i>

            <div className="menu-group">
              <Link strict to="/components/actions/code" activeClassName="active" title="Actions">Actions</Link>
              <Link strict to="/components/banner/code" activeClassName="active">Banner</Link>
              <Link strict to="/components/cards/code" activeClassName="active">Cards</Link>
              <Link strict to="/components/checkboxes/code" activeClassName="active">Checkboxes</Link>
              <Link strict to="/components/clippy/code" activeClassName="active">Clippy</Link>
              <Link strict to="/components/footer/code" activeClassName="active">Footer</Link>
              <Link strict to="/components/forms/code" activeClassName="active">Forms</Link>
            </div>

            </AccordionItem>

          </Accordion>
        </div>
      </div>
    )
  }
}
export default Sidebar;
