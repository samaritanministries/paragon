import React from 'react'
import { Link } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'

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
            <div className="logo">Logo</div>

            <AccordionItem title="Principles" className="group-header" expanded={true}>
            <i className="dashing-icon"></i>

              <div className="menu-group">
                <Link exact to="/" activeClassName="active">Home</Link>
              </div>

            </AccordionItem>

            <AccordionItem title="Components" className="group-header" expanded={true}>
            <i className="dashing-icon"></i>

            <div className="menu-group">
              <Link strict to="/actions/code" activeClassName="active">Actions</Link>
              <Link strict to="/banner/code" activeClassName="active">Banner</Link>
              <Link strict to="/cards/code" activeClassName="active">Cards</Link>
              <Link strict to="/checkboxes/code" activeClassName="active">Checkboxes</Link>
              <Link strict to="/clippy/code" activeClassName="active">Clippy</Link>
              <Link strict to="/footer/code" activeClassName="active">Footer</Link>
              <Link strict to="/forms/code" activeClassName="active">Forms</Link>
            </div>

            </AccordionItem>

            <AccordionItem title="Resources" className="group-header" expanded={true}>
            <i className="dashing-icon"></i>

            <div className="menu-group">
              <Link strict to="/resources/prototype-kit" activeClassName="active">Prototype Kit</Link>
            </div>

            </AccordionItem>

          </Accordion>
        </div>
      </div>
    )
  }
}
export default Sidebar;
