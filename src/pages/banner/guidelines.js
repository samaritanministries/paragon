import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SubNav from '../../components/subnavigation'
import AppContent from '../../components/appcontent'

const BannerGuidelines = () => (
  <Layout>
    <header class="subnav">
      <h1>Banner</h1>
      <SubNav />
    </header>
    <AppContent>
      <p>Some Banner Guidelines</p>
    </AppContent>
  </Layout>
)

export default BannerGuidelines
