import React from 'react'
import { Link } from 'gatsby'

import NotFoundLayout from '../components/notfoundlayout'
import AppContent from '../components/appcontent'

export default () => (
  <NotFoundLayout>
    <AppContent>
      <section className="splash-image">
        <div className="splash-image--content">
          <div className="row" style={{ marginBottom: "1rem"}}>
            <div className="column column--full">
              <h1 className="splash-image--title">404 Not Found!</h1>
              <h3 className="splash-image--subtitle">Hey, that's awesome. This page either doesn't exist, or the page is loading...</h3>
              <Link className="button button--primary" to="/">Return to Home</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="row">

      </div>
    </AppContent>
  </NotFoundLayout>
)
