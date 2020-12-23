import cn from "classnames";
import React from 'react'
import PropTypes from 'prop-types'

export default class MobileMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const MobileMenu = this.MobileMenu.bind(this);

    return (
      <MobileMenu />
    );
  }

  MobileMenu() {
    const SubNavLinks = this.SubNavLinks.bind(this);
    const { disableClick } = this.props;
    this.toggleMenuOpen = this.toggleMenuOpen.bind(this);

    return (
      <div className="mobile-menu_container">
        <button
          type="button"
          style={{ position: "absolute" }}
          onClick={this.toggleMenuOpen}
          className={cn({
            "mobile-menu_toggle": true,
            "is-open": this.state.isOpen,
            "disable-click": disableClick
        })}
        >
          <i
            data-id="menu-icon"
            className={`dashing-icon no-margin ${this.state.isOpen ? "dashing-icon--close" : "dashing-icon--menu"}`}
          />
        </button>
        <SubNavLinks />
      </div>
    );
  }

  SubNavLinks() {

    return (
      <section className={`mobile-menu_overlay ${this.state.isOpen ? "" : "is-collapsed"}`}>
          <aside className="mobile-sidebar">

            <div className="mobile-sidebar_header" />

            <nav className="mobile-sidebar_nav">
              <ul>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </nav>

          </aside>
      </section>
    );
  }

  toggleMenuOpen() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
}

MobileMenu.propTypes = {
  disableClick: PropTypes.bool
};

MobileMenu.defaultProps = {
  disableClick: false
};
