import React from 'react'
import { Link } from 'gatsby'
import Toast from './toast'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import StillWorking from '../../../components/stillworking'

const currentPageName = "Toasts";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <div className="grid grid-padding">
        <p className="intro">Toasts are used to show the user a response to an action they just completed. They appear temporarily toward the bottom of the screen.</p>
        <h2 className="has-number has-number--one no-margin--top">Toast Content</h2>
        <p>The amount of text should be limited to one short, concise sentence. A toast only shows for 4 seconds, so it should be quick and easy to read.</p>
        <div className="image-container p-space-xl">
          <fieldset>
            <div className="flex-container pb-space-m">
              <div className="icon-container float-left">
                <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              </div>
              <Toast isSuccess={true} message="Address successfully saved" className="toast-message--example mt-space-none"/>
            </div>
            <div className="flex-container">
              <div className="icon-container float-left">
                <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>
              </div>
              <Toast isError={true} message="The address that you tried to save failed. If you would like to try again, please navigate to your profile page." className="toast-message--example mt-space-none"/>
            </div>
          </fieldset>
        </div>

        <h2 className="has-number has-number--two">Importance</h2>
        <p>Toasts should be used to provide instant feedback to a user after an action. They should not interrupt the user and don't require the user to close them.</p>
        <p>If you would like to notify the user more permanently, you may use a <Link to="/components/banner/code/#defaultCardBanner">Card Banner</Link>.</p>
      </div>
    </AppContent>
  </Layout>
)
