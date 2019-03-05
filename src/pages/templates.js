import React from 'react'

import Layout from '../components/layout'
import AppContent from '../components/appcontent'
import defaultTemplate from "../img/Default-Template.png";

export default () => (
  <Layout>
    <header className="subnav">
      <h1>Templates</h1>
    </header>
    <AppContent>
      <div className="grid grid-padding">

        <div className="grid--third">
          <a href="/templates/default" target="_blank" rel="noopener noreferrer">
            <div className="card is-selectable" style={{ overflow: "hidden" }}>
              <img src={defaultTemplate} alt="Default Template" className="card--image" />
              <div className="card--content">Default Dashboard</div>
            </div>
          </a>
        </div>

      </div>
    </AppContent>
  </Layout>
)
