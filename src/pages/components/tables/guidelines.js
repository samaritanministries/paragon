import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Tables";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">

        </div>
      </div>
    </AppContent>
  </Layout>
)