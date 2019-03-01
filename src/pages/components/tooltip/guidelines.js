import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

import tooltipHint from "../../../img/tooltip--large.svg";

const currentPageName = "Tooltip";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>

      <div className="grid grid-padding">
        <h2 className="has-number has-number--one no-margin--top">Hint, don't explain</h2>
        <p>Tooltips should be used to quickly explain the function of a button, icon or action.</p>
        <div className="image-container p-space-xl">
          <img src={tooltipHint} alt="Default Template" className="card--image" />
        </div>

        <blockquote className="caution" style={{ marginTop: "2rem" }}>
          <strong>Caution: Avoid lengthy explanation</strong>
          <p>Tooltips should be used to deliver quick messages that provide additional context. Reading large blocks of white text on a dark background can cause strain on the eyes and should be avoided. It is recommended to only show tooltips that are one or two lines long.</p>
        </blockquote>

      </div>

    </AppContent>
  </Layout>
)
