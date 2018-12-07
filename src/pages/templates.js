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

          <a href="/templates/default" target="_blank" rel="noopener noreferrer">Default</a><br/>

        </div>
      </div>
    </AppContent>
  </Layout>
)
