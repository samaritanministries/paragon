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
      <div class="row">
        <div class="column column--full">
        <h3>Guidelines</h3>
        </div>
      </div>
    </AppContent>
  </Layout>
)
