import React from 'react'

import Layout from '../components/layout'
import AppContent from '../components/appcontent'

export default () => (
  <Layout>
    <header className="subnav">
      <h1>Templates</h1>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">

          <a href="/templates/dashboard" target="_blank" rel="noopener noreferrer">Dashboard</a><br/>
          <a href="/templates/single-page" target="_blank" rel="noopener noreferrer">Single Page</a><br/>
          <a href="/templates/fullscreen" target="_blank" rel="noopener noreferrer">Fullscreen</a><br/>
          <a href="/templates/mobile" target="_blank" rel="noopener noreferrer">Mobile</a>

        </div>
      </div>
    </AppContent>
  </Layout>
)
