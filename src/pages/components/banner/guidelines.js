import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

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
          <p className="intro">Banners can be used to show important information to a user. Card banners should have text that is directly related to an action that has been completed or is about to be performed.</p>

          <h2 className="has-number has-number--one no-margin--top">Banner Types</h2>
            <p>Common types of card banners are success, warning, error, and generic. Like <Link to="/components/actions/guidelines">Actions</Link>, banners should use purposeful color when using them.</p>
            <div className="image-container double-padding">
              <div className="banner-container">
                <div className="card-info no-margin--top">
                  <div className="card-content has-icon">
                    <i className="dashing-icon dashing-icon--info-filled" />
                    <p className="no-margin">This is an info card.</p>
                  </div>
                </div>

                <div className="card-info has-success no-margin--top">
                  <div className="card-content has-icon">
                    <i className="dashing-icon dashing-icon--checkmark-filled" />
                    <p className="no-margin">This is a success card.</p>
                  </div>
                </div>

                <div className="card-info has-warning no-margin--top">
                  <div className="card-content has-icon">
                    <i className="dashing-icon dashing-icon--alert-filled" />
                    <p className="no-margin">This is a warning card.</p>
                  </div>
                </div>

                <div className="card-info has-error no-margin">
                  <div className="card-content has-icon">
                    <i className="dashing-icon dashing-icon--alert-filled" />
                    <p className="no-margin">This is a error card.</p>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="tips" style={{ marginTop: "2rem" }}>
              <strong>Tip: Icons in Banners</strong>
              <p>To add more attention to card banners, use <Link to="/components/icons/code">icons</Link> before the banner text. Banners are setup to automatically add the appropriate spacing.</p>
            </blockquote>

            <h2 className="has-number has-number--two">Placement</h2>
            <p>When using a card banner, it can be placed directly under the card header to draw the user's attention right away or close to the action that was just completed.</p>
            <div className="image-container double-padding" style={{ marginBottom: "2rem" }}>
              <div className="card card--example-titles">
                <div className="card-header has-border">
                  <h3>Membership Options</h3>
                </div>
                <div className="card-content">
                  <div className="card-info has-error no-margin">
                    <div className="card-content has-icon">
                      <i className="dashing-icon dashing-icon--alert-filled" />
                      <p className="no-margin">There was an error saving your Membership information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </AppContent>
  </Layout>
)
