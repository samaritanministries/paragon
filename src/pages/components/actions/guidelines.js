import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

export default () => (
  <Layout>
    <header className="subnav">
      <h1>Actions</h1>
      <SubNav />
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">
        <h2>Guidelines</h2>
        </div>
      </div>
    </AppContent>
  </Layout>
)
