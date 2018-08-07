import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SubNav from '../../components/subnavigation'
import AppContent from '../../components/appcontent'

export default () => (
  <Layout>
    <header class="subnav">
      <h1>Actions</h1>
      <SubNav />
    </header>
    <AppContent>
      <div class="card">
        <div class="card--header has-border">
          <h3>Card Header</h3>
        </div>
        <div class="card--content">
          Card Content
        </div>
      </div>
    </AppContent>
  </Layout>
)
