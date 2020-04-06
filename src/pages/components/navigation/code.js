import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

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

            <div className="header-container" style={{ marginBottom: "1rem" }}>
              <header className="header">
            		<nav className="header-nav">
            			<ul>
            				<li><Link to={"/components/navigation/code"} className="active">Page 1</Link></li>
            				<li><Link to={"/components/navigation/code"}>Page 2</Link></li>
            				<li><Link to={"/components/navigation/code"}>Page 3</Link></li>
            			</ul>
            		</nav>
            	</header>
            </div>

              <CodeToggle>
{`<header class="header-container">
  <div class="header">
    <nav class="header-nav">
      <ul>
        <li><a class="active">Page 1</a></li>
        <li><a>Page 2</a></li>
        <li><a>Page 3</a></li>
      </ul>
    </nav>
  </div>
</header>`}
              </CodeToggle>
              </div>

            <h2 className="mt-space-xl" id="subnavigation">Subnavigation
              <Link to={location.pathname + "/#subnavigation"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container relative">

              <header className="header-container">
                <div className="header">
              		<nav className="header-nav">
              			<ul>
              				<li><Link to={"/components/navigation/code"} className="active">Page 1</Link></li>
              				<li><Link to={"/components/navigation/code"}>Page 2</Link></li>
              				<li><Link to={"/components/navigation/code"}>Page 3</Link></li>
              			</ul>
              		</nav>
              	</div>
              </header>

              <div className="sub-nav-container" style={{ marginBottom: "1rem" }}>
                <nav className="sub-nav">
                  <ul>
                    <li><Link to={"/components/navigation/code"} className="active">Option 1</Link></li>
                    <li><Link to={"/components/navigation/code"}>Option 2</Link></li>
                    <li><Link to={"/components/navigation/code"}>Option 3</Link></li>
                    <li><Link to={"/components/navigation/code"}>Option 4</Link></li>
                  </ul>
                </nav>
              </div>
              <CodeToggle>
{`<header class="header-container">
  <div class="header">
    <nav class="header-nav">
      <ul>
        <li><a class="active">Page 1</a></li>
        <li><a>Page 2</a></li>
        <li><a>Page 3</a></li>
      </ul>
    </nav>
  </div>
</header>
<div class="sub-nav-container">
  <nav class="sub-nav">
    <ul>
      <li><a class="active">Option 1</a></li>
      <li><a>Option 2</a></li>
      <li><a>Option 3</a></li>
      <li><a>Option 4</a></li>
    </ul>
  </nav>
</div>`}
              </CodeToggle>
              </div>

            </div>
        </AppContent>
      </Layout>
    )
  }
}

export default NavigationCode;
