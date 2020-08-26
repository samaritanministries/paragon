import cn from "classnames";
import React from 'react'
import PropTypes from 'prop-types'

export default class SubNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hideMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    const SubNavigation = this.SubNavigation.bind(this);

    return (
      <SubNavigation />
    );
  }

  SubNavigation() {
    const SubNavTitle = this.SubNavTitle.bind(this);
    const { children, className, title } = this.props;

    return (
      <nav
        className={cn("sub-nav", {
          [className]: !!className,
          "has-title": title != null
        })}
      >
        {title != null && <SubNavTitle/>}
        <ul
          className={cn({
          [className]: !!className,
          "subnav-dropdown": title != null,
          "hide-menu": this.state.hideMenu
        })}>
          {children}
        </ul>
      </nav>
    );
  }

  SubNavTitle() {
    const { title } = this.props;
    const toggleMenu = this.toggleMenu.bind(this);

    return (
      <div className="sub-nav--title" onClick={this.toggleMenu}>
        {title}
        <i className="dashing-icon dashing-icon--arrow-down dashing-icon--purple sub-nav--icon" />
      </div>
    );
  }

  toggleMenu() {
    this.setState(prevState => ({
      hideMenu: !prevState.hideMenu
    }));
   }
}

SubNavigation.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

SubNavigation.defaultProps = {
  className: undefined,
  message: undefined
};
