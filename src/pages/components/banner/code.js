import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Banner";
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
        <h2 className="example-header no-margin--top">Page Banner <button className="button button--transparent button--copy-link" id="Page_Banner"/></h2>
              <div className="row example-container">
                <div className="column column--full">
                  <div className="page-banner" style={{ position: "relative" }}>
                    <h1>Page Banner</h1>
                  </div>
                </div>
              </div>
              <CodeToggle>
{`<div class="page-banner">
  <h1>Page Banner</h1>
</div>`}
              </CodeToggle>

            <h2 class="example-header">Page Banner with subhead <button class="button button--transparent button--copy-link" id="Page_Banner_With_Subhead"/></h2>
          <div class="row example-container">
            <div class="column column--full">
              <div class="page-banner" style={{ position: "relative" }}>
                <h2>Add a Bill to this Need</h2>
                <h4>Need #481516 – Broken Arm</h4>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<div class="page-banner">
  <h2>Add a Bill to this Need</h2>
  <h4>Need #481516 – Broken Arm</h4>
</div>`}
          </CodeToggle>
        </div>
      </div>
    </AppContent>
  </Layout>
)
