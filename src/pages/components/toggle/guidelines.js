import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

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
          <p className="intro">Toggle Switches are used for quick “on/off” options. They take up less space then radio button/checkbox groups, and give the user immediate feedback.</p>
          <h2 className="has-number has-number--one no-margin--top">Instant Feedback</h2>
            <p>A toggles switches state should be updated instantly. The user should not have to apply the settings with another action. If this is needed, use <a href="/components/checkboxes/code">checkboxes</a> or <a href="/components/radio-buttons/code" >radio buttons</a>.</p>
            <div className="image-container double-padding">
              <fieldset className="column column--full">
                <label className="inline" htmlFor="switch1">Off</label>
                <div className="switch">
                  <input name="switch" type="checkbox" className="switch--checkbox" id="switch1" />
                  <label className="switch--label" htmlFor="switch1">
                    <span className="switch--inner"></span>
                    <span className="switch--handle"></span>
                  </label>
                </div>
              </fieldset>
              <fieldset className="column column--full">
                <label className="inline" htmlFor="switch2">On</label>
                <div className="switch">
                  <input name="switch" type="checkbox" className="switch--checkbox" id="switch2" defaultChecked={true}/>
                  <label className="switch--label" htmlFor="switch2">
                    <span className="switch--inner"></span>
                    <span className="switch--handle"></span>
                  </label>
                </div>
              </fieldset>
            </div>

            <h2 className="has-number has-number--two">Label Text</h2>
            <p>When using a label make sure it clearly describes the option the user is interacting with. The label text should be one or two positive words that the user can clearly understand what will happen if the toggle is turned on or off.</p>
              <div className="image-container double-padding" style={{ marginBottom: "2rem" }}>
                <div className="flex-container">
                  <div className="icon-container">
                    <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>
                  </div>
                  <fieldset className="column column--full no-padding">
                    <label className="inline" htmlFor="switch3">Remove a Member</label>
                    <div className="switch">
                      <input name="switch" type="checkbox" className="switch--checkbox" id="switch3" />
                      <label className="switch--label" htmlFor="switch3">
                        <span className="switch--inner"></span>
                        <span className="switch--handle"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>
                <br/>
                <div className="flex-container">
                  <div className="icon-container">
                    <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
                  </div>
                  <fieldset className="column column--full no-padding">
                    <label className="inline" htmlFor="switch4">Active</label>
                    <div className="switch">
                      <input name="switch" type="checkbox" className="switch--checkbox" id="switch4" defaultChecked={true} />
                      <label className="switch--label" htmlFor="switch4">
                        <span className="switch--inner"></span>
                        <span className="switch--handle"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>
            </div>

            <blockquote className="caution">
              <strong>Caution: Removing the Label</strong>
              <p>Toggle switches can be used without labels if it is clearly described elsewhere.</p>
            </blockquote>

        </div>
      </div>
    </AppContent>
  </Layout>
)
