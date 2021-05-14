import { Link } from 'gatsby'
import DefaultAvatar from "../../../img/Avatar.jpg";
import React from 'react'
import MobileMenu from './mobilemenu'
import SubNavigation from './subnav'
import PropTypes from 'prop-types'

export default class GlobalNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const MainHeader = this.MainHeader.bind(this);
    const { hasSubNav } = this.props;

    return (
      <>
        <MainHeader />
        {hasSubNav && (
          <SubNavigation>
            <li><Link to={"/"} className="active">Option 1</Link></li>
            <li><Link to={"/"}>Option 2</Link></li>
            <li><Link to={"/"}>Option 3</Link></li>
          </SubNavigation>
        )}
      </>
    );
  }

  MainHeader() {

    return (
      <header className="header">
    		<MobileMenu />
    		<div className="logo"><p className="text-color--purple no-margin">LOGO</p></div>

    		<nav className="header-nav">
    			<ul>
    				<li><Link to={"/"} className="active">Page 1</Link></li>
    				<li><Link to={"/"}>Page 2</Link></li>
    				<li><Link to={"/"}>Page 3</Link></li>
    			</ul>
    		</nav>

        <div
        className="profile"
        tabIndex="0"
        style={{ marginLeft: "auto" }}
        >
          <div className="avatar-container center">
            <img className="avatar" src={DefaultAvatar} />
          </div>

          <i className="dashing-icon dashing-icon--arrow-down" />
        </div>

    	</header>
    );
  }

  toggleMenuOpen() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
}

GlobalNavigation.propTypes = {
  hasSubNav: PropTypes.bool
};

GlobalNavigation.defaultProps = {
  hasSubNav: false
};
