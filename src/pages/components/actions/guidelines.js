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
          <p>Buttons should be written in short, concise words that describe the action taken. Users shouldn’t have to guess what will happen when they click. Rather, use one or two words that quickly describe the action.</p>
          <div className="image-container p-space-xl">
            <fieldset>
              <div className="flex-container pb-space-m">
                <div className="icon-container float-left">
                  <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
                </div>
                <button>View Image</button>
                <button className="button button--secondary ml-space-l">Visit Guidelines</button>
                <button className="button button--transparent ml-space-l">Learn More</button>
              </div>
              <div className="flex-container">
                <div className="icon-container float-left">
                  <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>
                </div>
                <button>Go</button>
                <button className="button button--secondary ml-space-l">Click Here</button>
                <button className="button button--transparent ml-space-l">Learn About Available Options</button>
              </div>
            </fieldset>
          </div>

          <h2 className="has-number has-number--two">Button Hierarchy</h2>
          <p>Not all buttons have equal importance. Knowing which kind of button to use is important in order to grab your user’s attention at the right time. The following buttons have been sorted from greatest hierarchy to least.</p>
          <div className="image-container p-space-xl">
            <fieldset>
              <div className="flex-container">
                <button>Button</button>
                <button className="button button--secondary ml-space-l">Button</button>
                <button className="button button--border ml-space-l">Button</button>
                <button className="button button--transparent ml-space-l">Button</button>
              </div>
            </fieldset>
          </div>

          <h2 className="has-number has-number--three">Purposeful Color</h2>
          <p>The Dashing <Link to="style/color/guidelines">color library</Link> has been purposefully crafted for interaction. All interface colors have been tested to meet web accessibility standards, and should be used intentionally to draw attention and signify different types of action.</p>
          <div className="image-container p-space-xl">
            <fieldset>
              <div className="flex-container">
                <button>Action</button>
                <button className="button button--green ml-space-l">Submit</button>
                <button className="button button--orange ml-space-l">Warning</button>
                <button className="button button--red ml-space-l">Error</button>
                <button className="button button--gray ml-space-l">Secondary</button>
              </div>
            </fieldset>
          </div>

        </div>
      </div>
    </AppContent>
  </Layout>
)
