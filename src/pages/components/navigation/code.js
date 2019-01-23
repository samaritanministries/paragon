import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Navigation";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
  <AppContent>
      <div className="grid grid-padding">

        <h2>Default Navigation</h2>
        <div className="example-container relative">

          <header className="header mb-space-m">
        		<Link to={"/templates/mobile"} className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>

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
<Link to={"/templates/mobile"} class="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>
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

        <h2 className="mt-space-xl">Subnavigation</h2>
        <div className="example-container relative">

          <header className="header">
        		<Link to={"/templates/mobile"} className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>

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
<Link to={"/templates/mobile"} class="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>
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

        </div>
    </AppContent>
  </Layout>
)
