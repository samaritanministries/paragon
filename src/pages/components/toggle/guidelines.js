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
          <p class="intro">Toggle Switches are used for quick “on/off” options. They take up less space then radio button/checkbox groups, and give the user immediate feedback.</p>
          <h2 class="has-number has-number--one no-margin--top">Instant Feedback</h2>
            <p>A toggles switches state should be updated instantly. The user should not have to apply the settings with another action. If this is needed, use <a href="/product/components/checkboxes">checkboxes</a> or <a href="/product/components/radio-buttons" >radio buttons</a>.</p>
            <div class="image-container double-padding">
              <fieldset class="column column--full">
                <label class="inline" for="switch1">Off</label>
                <div class="switch">
                  <input name="switch" type="checkbox" class="switch--checkbox" id="switch1" />
                  <label class="switch--label" for="switch1">
                    <span class="switch--inner"></span>
                    <span class="switch--handle"></span>
                  </label>
                </div>
              </fieldset>
              <fieldset class="column column--full">
                <label class="inline" for="switch2">On</label>
                <div class="switch">
                  <input name="switch" type="checkbox" class="switch--checkbox" id="switch2" defaultChecked={true}/>
                  <label class="switch--label" for="switch2">
                    <span class="switch--inner"></span>
                    <span class="switch--handle"></span>
                  </label>
                </div>
              </fieldset>
            </div>

            <h2 class="has-number has-number--two">Label Text</h2>
            <p>When using a label make sure it clearly describes the option the user is interacting with. The label text should be one or two positive words that the user can clearly understand what will happen if the toggle is turned on or off.</p>
              <div class="image-container double-padding" style={{ marginBottom: "2rem" }}>
                <div class="flex-container">
                  <div class="icon-container">
                    <i class="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>
                  </div>
                  <fieldset class="column column--full no-padding">
                    <label class="inline" for="switch3">Remove a Member</label>
                    <div class="switch">
                      <input name="switch" type="checkbox" class="switch--checkbox" id="switch3" />
                      <label class="switch--label" for="switch3">
                        <span class="switch--inner"></span>
                        <span class="switch--handle"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>
                <br/>
                <div class="flex-container">
                  <div class="icon-container">
                    <i class="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
                  </div>
                  <fieldset class="column column--full no-padding">
                    <label class="inline" for="switch4">Active</label>
                    <div class="switch">
                      <input name="switch" type="checkbox" class="switch--checkbox" id="switch4" defaultChecked={true} />
                      <label class="switch--label" for="switch4">
                        <span class="switch--inner"></span>
                        <span class="switch--handle"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>
            </div>

            <blockquote class="caution">
              <strong>Caution: Removing the Label</strong>
              <p>Toggle switches can be used without labels if it is clearly described elsewhere.</p>
            </blockquote>

        </div>
      </div>
    </AppContent>
  </Layout>
)
