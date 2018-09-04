import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Cards";
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
          <p className="intro">Cards are used to visually group certain topics of information. This makes it easier for users to quickly find and compare information of interest. Avoid using to much content within a card to overload the user.</p>

          <h2 className="has-number has-number--one no-margin--top">Buttons within Cards</h2>
            <p>Call to actions within cards should be placed in the card footer and left aligned. If there is only one action in the footer, this should be center aligned. This pattern supports the <Link to="https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/">F-pattern layout</Link>.</p>
            <div className="image-container double-padding">
              <div className="card card--example-footer">
                <div className="card--footer" style={{ paddingTop: "1rem" }}>
                  <button className="button button--green button--smooth">Submit</button>
                  <button className="button button--secondary button--transparent">Cancel</button>
                </div>
              </div>
            </div>

          <blockquote className="tips" style={{ marginTop: "2rem" }}>
            <strong>Tip: Number of Actions</strong>
            <p>Be careful to not add to many actions to the card footer. It is recommended to have one primary action and no more than two secondary actions. Follow the <Link to="/product/components/actions/guidelines">button hierarchy</Link> when adding more then one action.</p>
          </blockquote>

          <h2 className="has-number has-number--two">Card Titles</h2>
            <p>These give the user a better idea of what the content of the card is. Card titles should be short and to the point. Use one to three words that quickly describe what the user will see.</p>
              <div className="image-container double-padding" style={{ marginBottom: "2rem" }}>
                <div className="flex-container">
                  <div className="icon-container">
                    <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
                  </div>
                  <div className="card card--example-titles">
                    <div className="card--header has-border">
                      <h3>Membership Options</h3>
                    </div>
                    <div className="card--content">
                    </div>
                  </div>
                </div>
                <br/>
                <div className="flex-container">
                  <div className="icon-container">
                    <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>
                  </div>
                  <div className="card card--example-titles">
                    <div className="card--header has-border">
                      <h3>Information about your Membership</h3>
                    </div>
                    <div className="card--content">
                    </div>
                  </div>
                </div>
            </div>

        </div>
      </div>
    </AppContent>
  </Layout>
)
