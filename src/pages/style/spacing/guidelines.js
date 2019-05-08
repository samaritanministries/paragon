import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Spacing"
const currentPageNameLower = currentPageName.toLowerCase()

export default () => (
  <Layout>
        <header className="subnav">
          <h1>
            {currentPageName}
          </h1>
          <SubNav pageName={currentPageNameLower} sectionName="style"/>
        </header>
        <AppContent>
  			<div className="grid grid-padding">

          <h2>Built-in structure</h2>
          <p>The spacing utility removes the need for pixel pushing through inline styles, and adds some structure to common elements that require margin and padding adjustments.</p>

          <div className="example-container">

            <div className="card">
              <div className="card-content">
                <h1 className="h1-spacing">Header</h1>
                <p className="p-spacing">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <fieldset className="input-spacing">
                  <label>Label</label>
                  <input type="text" />
                </fieldset>
                <button type="button" className="">Submit</button>
              </div>
            </div>

            <CodeToggle>
{`<div class="card">
  <div class="card-content">
    <h1>Header</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <fieldset>
      <label>Label</label>
      <input type="text" />
    </fieldset>
    <button type="button">Submit</button>
  </div>
</div>`}
            </CodeToggle>
          </div>

          </div>
        </AppContent>
      </Layout>
    )
