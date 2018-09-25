import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Navigation";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">
            <h2 className="example-header no-margin--top">Default Navigation <button className="button button--transparent button--copy-link" data-id="copyurl" id="Default_Navigation" /></h2>
            <div className="row example-container">
              <div className="column column--full">
                <nav className="app-menu" style={{ position: "relative" }}>
                  <div className="app-context">
                    <div className="app-title">App Title</div>
                  </div>
                </nav>
              </div>
            </div>
            <CodeToggle>
{`<nav class="app-menu">
  <div class="app-context">
    <div class="app-title">App Title</div>
  </div>
</nav>`}
            </CodeToggle>
            <CodeToggleSCSS>
{`//Include this variable in your theme file to change the color of your header
$menu-color: $gray-100 !default;
`}
            </CodeToggleSCSS>

            <h2 className="example-header">Navigation with Back Link <button className="button button--transparent button--copy-link" data-id="copyurl" id="Navigation_With_Back_Link" /></h2>
            <div className="row example-container">
              <div className="column column--full">
                <nav className="app-menu expanded" style={{ position: "relative" }}>
                  <div className="app-context">
                    <div className="app-title">
                      <a href="/components/navigation/code" className="button button--navigation"> </a>
                      <span>App Title</span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <CodeToggle>
{`<nav class="app-menu expanded">
  <div class="app-context">
    <div class="app-title">
      <a href="example.html" class="button button--navigation"></a>
      <span>App Title</span>
    </div>
  </div>
</nav>`}
            </CodeToggle>

            <h2 className="example-header">Navigation with Breadcrumb <button className="button button--transparent button--copy-link" data-id="copyurl" id="Navigation_With_Breadcrumb" /></h2>
            <div className="row example-container">
              <div className="column column--full">
                <nav className="app-menu expanded" style={{ position: "relative" }}>
                  <div className="app-context">
                    <div className="app-title">
                      <a href="/components/navigation/code" className="app-title--has-breadcrumb">App Title</a>
                      <i className="dashing-icon dashing-icon--arrow-right"></i>
                      <span>With Breadcrumb</span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <CodeToggle>
{`<nav class="app-menu expanded">
  <div class="app-context">
    <div class="app-title">
      <a href="example.html" class="app-title--has-breadcrumb">App Title</a>
      <i class="dashing-icon dashing-icon--arrow-right"></i>
      <span>With Breadcrumb</span>
    </div>
  </div>
</nav>`}
            </CodeToggle>
            <CodeToggleSCSS>
{`//Include this variable in your theme file to change the color of your header
$menu-color: $gray-100 !default;
`}
            </CodeToggleSCSS>

            <h2 className="example-header">Navigation with Tabs <button className="button button--transparent button--copy-link" data-id="copyurl" id="Navigation_With_Tabs" /></h2>
            <div className="row example-container">
              <div className="column column--full">
                <nav className="app-menu expanded" style={{ position: "relative" }}>
                  <div className="app-context">
                    <div className="app-title">
                      <span>App Title</span>
                    </div>
                  </div>
                  <ul className="app-navigation">
                    <li><a href="/components/navigation/code" className="active">Link 1</a></li>
                    <li><a href="/components/navigation/code">Link 2</a></li>
                    <li><a href="/components/navigation/code" target="blank">
                      Link 3
                      <i className="dashing-icon dashing-icon--new-tab flow-opposite"></i>
                    </a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <CodeToggle>
{`<nav class="app-menu expanded">
  <div class="app-context">
    <div class="app-title">
      <span>App Title</span>
    </div>
  </div>
  <ul class="app-navigation">
    <li><a href="#" class="active">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#" target="blank">
      Link 3
      <i class="dashing-icon dashing-icon--new-tab flow-opposite"></i>
    </a></li>
  </ul>
</nav>`}
            </CodeToggle>

            <h2 className="example-header">Navigation with Main Action Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Navigation_With_Main_Action_Button" /></h2>
            <div className="row example-container">
              <div className="column column--full" style={{ height: "7rem", overflow: "hidden" }}>
                <nav className="app-menu expanded" style={{ position: "relative" }}>
                  <div className="app-context">
                    <div className="app-title">
                      <span>App Title</span>
                    </div>
                  </div>
                  <button className="button button--primary button--icon button--icon--main" style={{ right: "1rem" }}>
                    <i className="dashing-icon dashing-icon--add"></i>
                  </button>
                </nav>
              </div>
            </div>
            <CodeToggle>
{`<nav class="app-menu expanded">
  <div class="app-context">
    <div class="app-title">
      <span>App Title</span>
    </div>
  </div>
  <button class="button button--primary button--icon button--icon--main" style="right: 1rem;">
    <i class="dashing-icon dashing-icon--add"></i>
  </button>
</nav>`}
            </CodeToggle>

            <h2 className="example-header">Navigation with Search <button className="button button--transparent button--copy-link" data-id="copyurl" id="Navigation_with_Search" /></h2>
            <div className="row example-container">
              <div className="column column--full">
                <nav className="app-menu has-search expanded" style={{ position: "relative" }}>
                  <div className="app-context">
                    <div className="app-title">
                      <span>App Title</span>
                    </div>
                    <fieldset className="search-input">
                      <div className="input--add-on">
                        <input type="text" className="add-on--field" id="dashing-input-action" placeholder="Search..." />
                        <input type="submit" className="button button--green add-on--button" value="Submit" />
                      </div>
                    </fieldset>
                  </div>
                  <ul className="app-navigation">
                    <li><a href="/components/navigation/code" className="active">Link 1</a></li>
                    <li><a href="/components/navigation/code">Link 2</a></li>
                    <li><a href="/components/navigation/code" target="blank">
                      Link 3
                      <i className="dashing-icon dashing-icon--new-tab flow-opposite"></i>
                    </a></li>
                  </ul>
                </nav>
              </div>

              <div className="column column--full">
                <nav className="app-menu has-search" style={{ position: "relative" }}>
                  <div className="app-context">
                    <div className="app-title">
                      <span>App Title</span>
                    </div>
                    <fieldset className="search-input">
                      <div className="input--add-on">
                        <input type="text" className="add-on--field" id="dashing-input-action" placeholder="Search..." />
                        <input type="submit" className="button button--green add-on--button" value="Submit" />
                      </div>
                    </fieldset>
                  </div>
                </nav>
              </div>

            </div>
            <CodeToggle>
{`<!-- Navigation with Links and Search -->
<nav class="app-menu has-search expanded" style="position: relative;">
  <div class="app-context">
    <div class="app-title">
      <span>App Title</span>
    </div>
    <fieldset class="search-input">
      <div class="input--add-on">
        <input type="text" class="add-on--field" id="dashing-input-action" placeholder="Search..." />
        <input type="submit" class="button button--green add-on--button" value="Submit">
      </div>
    </fieldset>
  </div>
  <ul class="app-navigation">
    <li><a href="#" class="active">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#" target="blank">
      Link 3
      <i class="dashing-icon dashing-icon--new-tab flow-opposite"></i>
    </a></li>
  </ul>
</nav>

<!-- Navigation and Search -->
<nav class="app-menu has-search" style="position: relative;">
  <div class="app-context">
    <div class="app-title">
      <span>App Title</span>
    </div>
    <fieldset class="search-input">
      <div class="input--add-on">
        <input type="text" class="add-on--field" id="dashing-input-action" placeholder="Search..." />
        <input type="submit" class="button button--green add-on--button" value="Submit">
      </div>
    </fieldset>
  </div>
</nav>`}
            </CodeToggle>

        </div>
      </div>
    </AppContent>
  </Layout>
)
