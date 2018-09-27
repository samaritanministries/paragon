import React from 'react'

import Layout from '../components/layout'
import AppContent from '../components/appcontent'

export default () => (
  <Layout>
    <AppContent>
      <section className="splash-image">
        <div className="splash-image--content">
          <div className="row" style={{ marginBottom: "1rem"}}>
            <div className="column column--full">
              <h1 className="splash-image--title">Dashing</h1>
              <h3 className="splash-image--subtitle">A web application framework to simply get it done.</h3>
              <button className="button button--primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="column column--full">
          <p>Dashing is an open source CSS framework that provides a complete toolset for quickly building web applications. Based on proven design research, Dashing is confident in delivering clean and consistent UI guidelines driven by User Expierence.</p>

          <div className="space-between--principles">
            <div className="principles-icon"></div>
            <div>
              <h1>Consistent</h1>
              <p>Whether it’s a button, card, or chart; Dashing’s elements are meant for each other. We carry consistent colors, edges, and design principles to all of our elements.</p>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  </Layout>
)
