import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Toggle";
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
          <h2 className="example-header no-margin--top">Ordered Lists <button className="button button--transparent button--copy-link" data-id="copyurl" id="ordered-lists" /></h2>
          <div className="row example-container">
            <div className="column column--full" style={{ overflow: "auto" }}>
              <ol className="ordered-list--custom">
                <li>This is the first item</li>
                <li>This is the second item</li>
                <li>This is the third item</li>
                <li>This is the fourth item</li>
              </ol>
            </div>
          </div>
          <CodeToggle>
{`<ol class="ordered-list--custom">
  <li>This is the first item</li>
  <li>This is the second item</li>
  <li>This is the third item</li>
  <li>This is the fourth item</li>
</ol>`}
          </CodeToggle>

          <h2 class="example-header">Custom Colored Lists <button class="button button--transparent button--copy-link" data-id="copyurl" id="ordered-lists" /></h2>
          <div class="row example-container">
            <div class="column column--full" style={{ overflow: "auto" }}>
              <ol class="ordered-list--custom ordered-list--sharing-blue">
                <li>This is a custom colored list item</li>
              </ol>
            </div>
          </div>
          <CodeToggle>
{`<ol class="ordered-list--custom ordered-list--sharing-blue">
  <li>This is a custom colored list item</li>
</ol>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Example: Custom Colored Lists
.ordered-list--sharing-blue {
  @include ordered-list($sharing-blue, $white);
}`}
          </CodeToggleSCSS>

        </div>
      </div>
    </AppContent>
  </Layout>
)
