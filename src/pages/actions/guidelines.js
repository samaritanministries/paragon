import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SubNav from '../../components/subnavigation'
import AppContent from '../../components/appcontent'

const ActionsGuidelines = () => (
  <Layout>
    <header class="subnav">
      <h1>Actions</h1>
      <SubNav />
    </header>
    <AppContent>
      <p>Some Actions Guidelines</p>
    </AppContent>
  </Layout>
)

export default ActionsGuidelines
