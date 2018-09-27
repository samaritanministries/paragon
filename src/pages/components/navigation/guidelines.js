import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Navigation";
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
          <p className="intro">As users interact within your App, it is important to provide them with a navigation experience that is consistent
          with the rest of the Dash platform. By using our standard navigation elements, you will ensure users do not get lost
          or confused while using your App.
          </p>

          <h2 className="has-number has-number--one no-margin--top">Basic Header</h2>
          <p>This is a generic header. Your App name should be displayed prominently on the upper lefthand corner. This will act as a roadmap to your user so they know where they are.</p>
          <div className="image-container double-spacing">
            <nav className="app-menu" style={{ position: "relative", backgroundColor: "#828b94" }}>
              <div className="app-context">
                <div className="app-title" style={{ color: "#FFF" }}>App Title</div>
              </div>
            </nav>
          </div>

          <h2 className="has-number has-number--two">Meeting Usability Standards</h2>
          <p>The Dashing Framework will automagically adjust the text color based on your assigned background color, so you never have to worry about making manual updates.</p>
          <div className="image-container double-spacing">
            <nav className="app-menu" style={{ position: "relative", backgroundColor: "#754c82", width: "calc(50% - 4px)", display: "inline-block" }}>
              <div className="app-context">
                <div className="app-title" style={{ color: "#FFF" }}>App Title</div>
              </div>
            </nav>
            <nav className="app-menu" style={{ position: "relative", backgroundColor: "#dbc0dc", width: "50%", display: "inline-block" }}>
              <div className="app-context">
                <div className="app-title">App Title</div>
              </div>
            </nav>
          </div>

          <h2 className="has-number has-number--three">Navigation Tabs</h2>
          <p>Dashboard Apps primarily use this layout for navigation within an app. It is important to note that while this layout does allow for more horizontal space, you should restrict the number of tabs.</p>
          <blockquote className="caution">
            <strong>Caution: Tab Length</strong>
            <p>The length of a tab should never stretch beyond two words. Similar to buttons, it is important to keep thees links as small and concise as possible, to allow for quick scanning and readability.</p>
          </blockquote>
          <div className="image-container double-spacing">
            <div className="flex-container">
              <div className="icon-container">
                <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              </div>
              <nav className="app-menu" style={{ position: "relative", backgroundColor: "#35b16c" }}>
                <div className="app-context">
                  <div className="app-title" style={{ color: "#FFF" }}>App Title</div>
                </div>
                <ul className="app-navigation example-page--app-navigation">
                  <li><a href="/components/navigation/guidelines" className="active" ref={(el) => {
                      if (el) {
                        el.style.setProperty('color', '#FFF', 'important');
                      }
                    }} >Overview</a></li>
                  <li><a href="/components/navigation/guidelines" >Preferences</a></li>
                </ul>
              </nav>
            </div>
            <br/>
            <div className="flex-container">
              <div className="icon-container">
                <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>
              </div>
              <nav className="app-menu" style={{ position: "relative", backgroundColor: "#35b16c" }}>
                <div className="app-context">
                  <div className="app-title" style={{ color: "#FFF" }}>App Title</div>
                </div>
                <ul className="app-navigation example-page--app-navigation">
                  <li><a href="/components/navigation/guidelines" className="active" ref={(el) => {
                      if (el) {
                        el.style.setProperty('color', '#FFF', 'important');
                      }
                    }} >Membership Overview</a></li>
                  <li><a href="/components/navigation/guidelines" >Settings & Profile management</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <h2 className="has-number has-number--four">Navigating Within Tabs</h2>
          <p>It is important to give your user quick access to return back from where they came. While the native browser “back” button is a consistent place to turn to on websites, Dashboard apps that don’t support this feature will fully exit the app, rather than navigating to your previous step.</p>
          <p>For this reason, it is important to provide your user with quick access to step backwards while navigating. Accessing the back button in the top left of your header will offer a familiar user experience while navigating.</p>
          <div className="image-container double-spacing">
            <nav className="app-menu" style={{ position: "relative", backgroundColor: "#708cc7" }}>
              <div className="app-context">
                <div className="app-title" style={{ color: "#FFF" }}>
                  <a href="/components/navigation/guidelines" className="button button--navigation example-button--navigation" ref={(el) => {
                      if (el) {
                        el.style.setProperty('color', '#FFF', 'important');
                      }
                    }} style={{ backgroundColor: "#5474b9" }}> </a>
                  <span>Broken Arm #481516</span>
                </div>
              </div>
              <ul className="app-navigation example-page--app-navigation">
                <li><a href="/components/navigation/guidelines" className="active" ref={(el) => {
                    if (el) {
                      el.style.setProperty('color', '#FFF', 'important');
                    }
                  }} >Overview</a></li>
                <li><a href="/components/navigation/guidelines" ref={(el) => {
                    if (el) {
                      el.style.setProperty('color', '#FFF', 'important');
                    }
                  }} >Bills</a></li>
                <li><a href="/components/navigation/guidelines" ref={(el) => {
                    if (el) {
                      el.style.setProperty('color', '#FFF', 'important');
                    }
                  }} >Documents</a></li>
                <li><a href="/components/navigation/guidelines" ref={(el) => {
                    if (el) {
                      el.style.setProperty('color', '#FFF', 'important');
                    }
                  }} >Problems</a></li>
              </ul>
            </nav>
          </div>

          <h2 className="has-number has-number--five">Navigating Outside of Tabs</h2>
          <p>There are times where you may need to show additional information within a tab (i.e. manage a setting, edit a profile, or review a message). Rather than displaying a pop-up modal and cramming in a lot of content, it is better to utilize the entirety of the page to display this information.</p>
          <div className="image-container">
            <div className="image" id="navigation--banner"></div>
          </div>
          <blockquote className="tips" style={{ marginTop: "2rem" }}>
            <strong>Tip: Back Button</strong>
            <p>It is important that this navigation banner be displayed on top of your App header. This prevents the user from being exposed to competing navigation, which could cause confusion and frustration.</p>
          </blockquote>

        </div>
      </div>
    </AppContent>
  </Layout>
)
