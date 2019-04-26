import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import StillWorking from '../../../components/stillworking'

const currentPageName = "Spacing";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower} sectionName="style"/>
    </header>
    <AppContent>
      <div className="grid grid-padding">
        <StillWorking />
      </div>
    </AppContent>
  </Layout>
)
