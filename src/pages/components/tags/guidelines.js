import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Tags";
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
          <h2 className="has-number has-number--one no-margin--top">Small but Mighty</h2>
          <p>Tags provide a visual label at a quick glance through predefined text, statuses, and rules.  </p>
          <div className="image-container">
            <div className="image" id="tags--options"></div>
          </div>

          <blockquote className="tips" style={{ marginTop: "2rem" }}>
            <strong>Tip: Keep it simple</strong>
            <p>When placing text within a tag, keep it between one to two words. Anything longer can become distracting and difficult to read at a quick glance.</p>
          </blockquote>

        </div>
      </div>
    </AppContent>
  </Layout>
)
