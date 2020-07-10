import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import StillWorking from '../../../components/stillworking'

const currentPageName = "Toasts";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <p className="intro">Toasts are used to show the user a response to an action they just completed. They appear temporaily toward the bottom of the screen.</p>
    </AppContent>
  </Layout>
)
