import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Actions";
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
          <h2 className="has-number has-number--one no-margin--top">Action Verbs</h2>
          <p>Buttons should be written in short, concise words that describe the action taken. Your user shouldn’t have to guess what happens when they click. Rather, use one or two words that quickly describe the action taken.</p>
          <div className="image-container">
            <div className="image" id="actions--action-verb"></div>
          </div>

          <h2 className="has-number has-number--two">Button Hierarchy</h2>
          <p>Not all buttons have equal importance. Knowing which kind of button to use is important in order to grab your user’s attention at the right time. The following buttons have been sorted from greatest hierarchy to least.</p>
          <div className="image-container">
            <div className="image" id="actions--hierarchy"></div>
          </div>

          <h2 className="has-number has-number--three">Purposeful Color</h2>
          <p>The Dashing <Link to="style/color/guidelines">color library</Link> has been purposefully crafted for interaction. All interface colors have been tested to meet web accessibility standards, and should be used intentionally to draw attention and signify different types of action.</p>
          <div className="image-container">
            <div className="image" id="actions--color"></div>
          </div>

        </div>
      </div>
    </AppContent>
  </Layout>
)
