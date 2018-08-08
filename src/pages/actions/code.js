import React from 'react'

import Layout from '../../components/layout'
import SubNav from '../../components/subnavigation'
import AppContent from '../../components/appcontent'

export default () => (
  <Layout>
    <header className="subnav">
      <h1>Actions</h1>
      <SubNav />
    </header>
    <AppContent>
      <div className="card">
        <div className="card--header has-border">
          <h3>Card Header</h3>
        </div>
        <div className="card--content">
          Card Content
        </div>
      </div>
    </AppContent>
  </Layout>
)
