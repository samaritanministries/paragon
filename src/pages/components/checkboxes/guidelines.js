import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Checkboxes";
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
          <p className="intro">Checkboxes are used as an "on/off" function to select any number of options from a list. Each checkbox is independent from the others in the list, so checking one item should never uncheck another.</p>

          <h2 className="has-number has-number--one no-margin--top">Checkbox Style</h2>
          <p>Dashing includes custom checkbox styles that allow for a larger click area and color customization. It is advised that custom checkboxes be utilized whenever possible.</p>
          <div className="image-container double-padding">
            <fieldset className="column column--full">
              <div className="example--checkbox">
                <input type="checkbox" id="dashing-checkbox--custom-inline1" defaultChecked={true}/>
                <label htmlFor="dashing-checkbox--custom-inline1">Default Checkbox</label>
              </div>
              <div className="checkbox--custom inline">
                <input type="checkbox" id="dashing-checkbox--custom-inline2" defaultChecked={true}/>
                <label htmlFor="dashing-checkbox--custom-inline2">Dashing Checkbox</label>
              </div>
            </fieldset>
          </div>

          <blockquote className="tips" style={{ marginTop: "2rem" }}>
            <strong>Tip: Fitts's Law</strong>
            <p>Allow users to to click on both the checkbox and the label to allow for a larger click target. This supports <a href="https://www.interaction-design.org/literature/book/the-glossary-of-human-computer-interaction/fitts-s-law" target="_blank" rel="noopener noreferrer">Fitts’s Law</a>, which states “the time to acquire a target is a function of the distance to and size of the target.”</p>
          </blockquote>

          <h2 className="has-number has-number--two">Use positive and active language</h2>
            <p>When labeling your checkboxes, use positive language. A user should know exactly what will happen if they check a box, and what will happen if they leave the box unchecked.</p>
            <div className="image-container double-padding">
              <fieldset className="column column--full">
                <div className="flex-container">
                  <div className="icon-container float-left">
                    <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>
                  </div>
                  <div className="checkbox--custom">
                    <input type="checkbox" id="dashing-checkbox--positivelanguage1" defaultChecked={true}/>
                    <label htmlFor="dashing-checkbox--positivelanguage1">No note was received</label>
                  </div>
                </div>
                <div className="flex-container">
                  <div className="icon-container float-left">
                    <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
                  </div>
                  <div className="checkbox--custom">
                    <input type="checkbox" id="dashing-checkbox--positivelanguage2" defaultChecked={true}/>
                    <label htmlFor="dashing-checkbox--positivelanguage2">I received a note</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <h2 className="has-number has-number--three">Submit to make changes</h2>
            <p>Checkboxes should be used to select options and change settings, but should only apply those changes after a submit action is completed (“Save Settings”, “Next Step”, etc.).</p>
            <div className="image-container double-padding">
              <fieldset className="column column--full">
                <div className="checkbox--custom">
                  <input type="checkbox" id="dashing-checkbox--save-changes1" defaultChecked={true}/>
                  <label htmlFor="dashing-checkbox--save-changes1">Opt-in to Paperless Notifications</label>
                </div>
                <button className="button--smooth" style={{ marginTop: "1rem" }}>Save Settings</button>
              </fieldset>
            </div>

            <h2 className="has-number has-number--four">Selectable Checkbox Cards</h2>
            <p>Use checkbox cards to provide emphasis on the selection. These cards can include multiple lines of text. icons, and illustrations.</p>
            <div className="image-container double-padding" style={{ marginBottom: "2rem" }}>
              <div className="column column--full">
                <h3>People in your membership</h3>
              </div>
              <div className="row">
                <div className="column column--third">
                  <div className="checkbox-card" style={{ display: "block" }}>
                    <input type="checkbox" name="checkbox-inline" id="checkbox-inline1" defaultChecked={true}/>
                    <label htmlFor="checkbox-inline1" className="card" style={{ display: "block" }}>
                      <span style={{ display: "inline-table" }}>
                        <span style={{ fontSize: "1rem", display: "block" }}>Ryan Fitz</span>
                        <span style={{ fontSize: "0.8rem", display: "block" }}>Primary</span>
                      </span>
                    </label>
                  </div>
                </div>
                  <div className="column column--third">
                    <div className="checkbox-card" style={{ display: "block" }}>
                      <input type="checkbox" name="checkbox-inline" id="checkbox-inline2" />
                      <label htmlFor="checkbox-inline2" className="card" style={{ display: "block" }}>
                        <span style={{ display: "inline-table" }}>
                          <span style={{ fontSize: "1rem", display: "block" }}>Jill Fitz</span>
                          <span style={{ fontSize: "0.8rem", display: "block" }}>Spouse</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="column column--third">
                  <div className="checkbox-card" style={{ display: "block" }}>
                    <input type="checkbox" name="checkbox-inline" id="checkbox-inline3" />
                    <label htmlFor="checkbox-inline3" className="card" style={{ display: "block" }}>
                      <span style={{ display: "inline-table" }}>
                        <span style={{ fontSize: "1rem", display: "block" }}>Jackson Fitz</span>
                        <span style={{ fontSize: "0.8rem", display: "block" }}>Son</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </AppContent>
  </Layout>
)
