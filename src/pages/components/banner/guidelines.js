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
                <div className="card-banner">
                  <p>This is a card banner</p>
                </div>
                <div className="card-banner has-success">
                  <i className="dashing-icon dashing-icon--checkmark-filled"></i>
                  <p>Your file is ready to upload</p>
                </div>
                <div className="card-banner has-warning">
                  <i className="dashing-icon dashing-icon--info-filled"></i>
                  <p>You may only submit bill information and upload images for one statement at a time. If you have multiple statements to submit, please enter them separately.</p>
                </div>
                <div className="card-banner has-error">
                  <i className="dashing-icon dashing-icon--alert-filled"></i>
                  <p>You must complete all fields below before continuing</p>
                </div>
              </div>
            </div>

            <blockquote className="tips" style={{ marginTop: "2rem" }}>
              <strong>Tip: Icons in Banners</strong>
              <p>To add more attention to card banners, use <Link to="components/icons/code">icons</Link> before the banner text. Banners are setup to automatically add the appropriate spacing.</p>
            </blockquote>

            <h2 className="has-number has-number--two">Placement</h2>
            <p>When using a card banner, it should be placed directly under the card header to draw the user's attention right away.</p>
            <div className="image-container double-padding" style={{ marginBottom: "2rem" }}>
              <div className="card card--example-titles">
                <div className="card-header">
                  <h3>Membership Options</h3>
                </div>
                <div className="card-content">
                  <div className="card-banner">
                    <p>This is a card banner</p>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </AppContent>
  </Layout>
)
