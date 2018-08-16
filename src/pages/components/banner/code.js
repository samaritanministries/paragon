import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

export default () => (
  <Layout>
    <header className="subnav">
      <h1>Banner</h1>
      <SubNav />
    </header>
    <AppContent>
      <p>Some Banner Code</p>
    </AppContent>
  </Layout>
)
