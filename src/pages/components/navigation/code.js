import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import DefaultAvatar from "../../../img/Avatar.jpg";
import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import SubNavigation from './subnav'
import MobileMenu from './mobilemenu'

const currentPageName = "Navigation";
const currentPageNameLower = currentPageName.toLowerCase();

class NavigationCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    const { location } = this.props;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
      <AppContent>
          <div className="grid grid-padding">

            <h2 id="defaultNavigation">Default Navigation
              <Link to={location.pathname + "/#defaultNavigation"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container relative">

              <header className="header mb-space-m">
                <MobileMenu disableClick={true}/>
            		<nav className="header-nav">
            			<ul>
            				<li><Link to={"/components/navigation/code"} className="active">Page 1</Link></li>
            				<li><Link to={"/components/navigation/code"}>Page 2</Link></li>
            				<li><Link to={"/components/navigation/code"}>Page 3</Link></li>
            			</ul>
            		</nav>
            	</header>

              <CodeToggle>
{`<header className="header">
  <nav class="header-nav">
    <ul>
      <li><Link to={"/"} class="active">Page 1</Link></li>
      <li><Link to={"/"}>Page 2</Link></li>
      <li><Link to={"/"}>Page 3</Link></li>
    </ul>
  </nav>
</header>`}
              </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="defaultNavigationwProfile">Default Navigation with Profile
                <Link to={location.pathname + "/#defaultNavigation"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container relative">

                <header className="header mb-space-m">
                  <MobileMenu disableClick={true}/>
              		<nav className="header-nav">
              			<ul>
              				<li><Link to={"/components/navigation/code"} className="active">Page 1</Link></li>
              				<li><Link to={"/components/navigation/code"}>Page 2</Link></li>
              				<li><Link to={"/components/navigation/code"}>Page 3</Link></li>
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

                <CodeToggle>
  {`<header class="header">
    <nav class="header-nav">
      <ul>
        <li><a href="#" class="active">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </nav>
    <div class="profile" style="margin-left: auto;">
      <div class="avatar-container center">
        <img class="avatar" src="profile.png" />
      </div>

      <i class="dashing-icon dashing-icon--arrow-down"></i>
    </div>
  </header>`}
                </CodeToggle>
                </div>

            <h2 className="mt-space-xl" id="subnavigation">Subnavigation
              <Link to={location.pathname + "/#subnavigation"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container relative">

              <header className="header">
                <MobileMenu disableClick={true}/>
            		<nav className="header-nav">
            			<ul>
            				<li><Link to={"/components/navigation/code"} className="active">Page 1</Link></li>
            				<li><Link to={"/components/navigation/code"}>Page 2</Link></li>
            				<li><Link to={"/components/navigation/code"}>Page 3</Link></li>
            			</ul>
            		</nav>
            	</header>
              <nav className="sub-nav mb-space-m">
                <ul>
                  <li><Link to={"/components/navigation/code"} className="active">Option 1</Link></li>
                  <li><Link to={"/components/navigation/code"}>Option 2</Link></li>
                  <li><Link to={"/components/navigation/code"}>Option 3</Link></li>
                  <li><Link to={"/components/navigation/code"}>Option 4</Link></li>
                </ul>
              </nav>

              <CodeToggle>
{`<header className="header">
  <nav class="header-nav">
    <ul>
      <li><Link to={"/"} class="active">Page 1</Link></li>
      <li><Link to={"/"}>Page 2</Link></li>
      <li><Link to={"/"}>Page 3</Link></li>
    </ul>
  </nav>
</header>
<nav class="sub-nav">
  <ul>
    <li><Link to={"/"} class="active">Option 1</Link></li>
    <li><Link to={"/"}>Option 2</Link></li>
    <li><Link to={"/"}>Option 3</Link></li>
    <li><Link to={"/"}>Option 4</Link></li>
  </ul>
</nav>`}
              </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="subnavigation">Subnavigation with Title
                <Link to={location.pathname + "/#subnavigation-with-title"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container relative">

                <header className="header">
                  <MobileMenu disableClick={true}/>
              		<nav className="header-nav">
              			<ul>
              				<li><Link to={"/components/navigation/code"} className="active">Page 1</Link></li>
              				<li><Link to={"/components/navigation/code"}>Page 2</Link></li>
              				<li><Link to={"/components/navigation/code"}>Page 3</Link></li>
              			</ul>
              		</nav>
              	</header>
                <SubNavigation title="Settings" className="mb-space-m">
        					<li><Link to={"/components/navigation/code"} className="active">Option 1</Link></li>
        					<li><Link to={"/components/navigation/code"}>Option 2</Link></li>
        					<li><Link to={"/components/navigation/code"}>Option 3</Link></li>
        				</SubNavigation>

                <CodeToggle>
  {`<header class="header">
    <nav class="header-nav">
      <ul>
        <li><Link to={"/"} class="active">Page 1</Link></li>
        <li><Link to={"/"}>Page 2</Link></li>
        <li><Link to={"/"}>Page 3</Link></li>
      </ul>
    </nav>
  </header>
  <nav class="sub-nav has-title">
    <div class="sub-nav--title">Settings</div>
    <ul>
      <li><Link to={"/"} class="active">Option 1</Link></li>
      <li><Link to={"/"}>Option 2</Link></li>
      <li><Link to={"/"}>Option 3</Link></li>
      <li><Link to={"/"}>Option 4</Link></li>
    </ul>
  </nav>`}
                </CodeToggle>
                </div>

                <h2 className="mt-space-xl" id="subnavigation">Subnavigation with Back Button
                  <Link to={location.pathname + "/#subnavigation-with-back-button"} className="button button--transparent button--copy-link"></Link>
                </h2>
                <div className="example-container relative">

                  <header className="header">
                		<nav className="header-nav">
                			<ul>
                				<li><Link to={"/components/navigation/code"} className="active">Page 1</Link></li>
                				<li><Link to={"/components/navigation/code"}>Page 2</Link></li>
                				<li><Link to={"/components/navigation/code"}>Page 3</Link></li>
                			</ul>
                		</nav>
                	</header>
                  <nav className="sub-nav sub-nav--back mb-space-m">
          					<Link to={"/components/navigation/code"} className="button button--transparent">
                      <i className="dashing-icon dashing-icon--arrow-left" />
                      Back
                    </Link>
          				</nav>

                  <CodeToggle>
    {`<header class="header">
      <nav class="header-nav">
        <ul>
          <li><Link to={"/"} class="active">Page 1</Link></li>
          <li><Link to={"/"}>Page 2</Link></li>
          <li><Link to={"/"}>Page 3</Link></li>
        </ul>
      </nav>
    </header>
    <nav class="sub-nav sub-nav--back">
      <a class="button button--transparent">
        <i class="dashing-icon dashing-icon--arrow-left"></i>
        Back
      </a>
    </nav>`}
                  </CodeToggle>
                  </div>

            </div>
        </AppContent>
      </Layout>
    )
  }
}

export default NavigationCode;
