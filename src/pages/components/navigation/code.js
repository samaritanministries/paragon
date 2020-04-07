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

              <header className="header-container" style={{ marginBottom: "1rem" }}>

            		<nav className="primary-nav-container">
            			<section className="primary-nav">
            				<ul>
            					<li><Link to={"/"} className="active">Page 1</Link></li>
            					<li><Link to={"/"}>Page 2</Link></li>
            					<li><Link to={"/"}>Page 3</Link></li>
            				</ul>
            			</section>
            		</nav>

              </header>

              <CodeToggle>
{`<header class="header-container">

  <nav class="primary-nav-container">
    <section class="primary-nav">
      <ul>
        <li><Link to={"/"} class="active">Page 1</Link></li>
        <li><Link to={"/"}>Page 2</Link></li>
        <li><Link to={"/"}>Page 3</Link></li>
      </ul>
    </section>
  </nav>

</header>`}
              </CodeToggle>
              </div>

            <h2 className="mt-space-xl" id="subnavigation">Subnavigation
              <Link to={location.pathname + "/#subnavigation"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container relative">

              <header className="header-container" style={{ marginBottom: "1rem" }}>

            		<nav className="primary-nav-container">
            			<section className="primary-nav">
            				<ul>
            					<li><Link to={"/"} className="active">Page 1</Link></li>
            					<li><Link to={"/"}>Page 2</Link></li>
            					<li><Link to={"/"}>Page 3</Link></li>
            				</ul>
            			</section>
            		</nav>

                <nav className="sub-nav-container">
            			<section className="sub-nav">
            				<ul>
            					<li><Link to={"/"} className="active">Option 1</Link></li>
            					<li><Link to={"/"}>Option 2</Link></li>
            					<li><Link to={"/"}>Option 3</Link></li>
            				</ul>
            			</section>
            		</nav>

              </header>

              <CodeToggle>
{`<header class="header-container">

  <nav class="primary-nav-container">
    <section class="primary-nav">
      <ul>
        <li><Link to={"/"} class="active">Page 1</Link></li>
        <li><Link to={"/"}>Page 2</Link></li>
        <li><Link to={"/"}>Page 3</Link></li>
      </ul>
    </section>
  </nav>

  <nav class="sub-nav-container">
    <section class="sub-nav">
      <ul>
        <li><Link to={"/"} class="active">Option 1</Link></li>
        <li><Link to={"/"}>Option 2</Link></li>
        <li><Link to={"/"}>Option 3</Link></li>
      </ul>
    </section>
  </nav>

</header>`}
              </CodeToggle>
              </div>

            </div>
        </AppContent>
      </Layout>
    )
  }
}

export default NavigationCode;
