import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Radio Buttons";
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
          <p className="intro">Radio buttons are used to allow for exactly one choice in a short list of two or more options. Selecting one option will deselect any previously selected option.</p>
          <h2 className="has-number has-number--one no-margin--top">Radio Button Style</h2>
            <p>Custom radio button styles that allow for a larger click area and color customization. It is advised that custom radio buttons be utilized whenever possible.</p>
            <div className="image-container double-padding">

              <fieldset className="column column--full">
                <div className="example--radio" style={{ position: "relative", top: "-0.3rem" }}>
                  <label>Default Radio Buttons</label>
                  <div>
                    <input type="radio" name="default-radio" id="default-radio1" defaultChecked={true}/>
                    <label htmlFor="default-radio1" className="inline">Option 1</label>
                  </div>
                  <div>
                    <input type="radio" name="default-radio" id="default-radio2"/>
                    <label htmlFor="default-radio2" className="inline">Option 2</label>
                  </div>
                </div>


                <div className="example--radio">
                  <label>Radio Buttons</label>
                  <div className="radio--custom">
                    <input type="radio" name="radio" id="radio1--custom" defaultChecked={true}/>
                    <label htmlFor="radio1--custom" className="inline">Option 1</label>
                  </div>
                  <div className="radio--custom">
                    <input type="radio" name="radio" id="radio2--custom"/>
                    <label htmlFor="radio2--custom" className="inline">Option 2</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <blockquote className="tips" style={{ marginTop: "2rem" }}>
              <strong>Tip: Fitts's Law</strong>
              <p>Allow users to to click on both the checkbox and the label to allow for a larger click target. This supports <a href="https://www.interaction-design.org/literature/book/the-glossary-of-human-computer-interaction/fitts-s-law" target="_blank" rel="noopener noreferrer">Fitts’s Law</a>, which states “the time to acquire a target is a function of the distance to and size of the target.”</p>
            </blockquote>

            <h2 className="has-number has-number--two">Visibility & Quick Selection</h2>
            <p>Presenting a small list of options as radio buttons allows for easy scanning and selection as it displays every available option directly in front of the user, and allows a selection to be made in a single click.</p>
            <div className="image-container double-padding" style={{ overflow: "auto" }}>
              <fieldset className="column column--half">
                <div className="example--radio">
                  <label>Who is this Need for?</label>
                  <div className="radio--custom">
                    <input type="radio" name="example2" id="example-ryan" defaultChecked={true}/>
                    <label htmlFor="example-ryan" className="inline">Ryan</label>
                  </div>
                  <div className="radio--custom">
                    <input type="radio" name="example2" id="example-jill"/>
                    <label htmlFor="example-jill" className="inline">Jill</label>
                  </div>
                  <div className="radio--custom">
                    <input type="radio" name="example2" id="example-jackson"/>
                    <label htmlFor="example-jackson" className="inline">Jackson</label>
                  </div>
                  <div className="radio--custom">
                    <input type="radio" name="example2" id="example-emily"/>
                    <label htmlFor="example-emily" className="inline">Emily</label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="column column--half select--has-icon">
                <label>Who is this Need for?</label>
                <select>
                  <option>Ryan</option>
                  <option>Jill</option>
                  <option>Jackson</option>
                  <option>Emily</option>
                </select>
              </fieldset>
            </div>
            <blockquote className="tips" style={{ marginTop: "2rem" }}>
              <strong>Tip: Radio Button vs. Dropdown Menus</strong>
              <p style={{ marginBottom: "0" }}>There are times where a dropdown menu may be more appropriate to use than a radio button. Some examples of this may be:</p>
              <ul>
                <li>Designing for data entry, where your user may primarily be navigating via keyboard</li>
                <li>Trying to save visual space</li>
                <li>Working with more than 7 options</li>
              </ul>
            </blockquote>


        </div>
      </div>
    </AppContent>
  </Layout>
)
