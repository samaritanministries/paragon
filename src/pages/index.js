import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import AppContent from '../components/appcontent'

export default () => (
  <Layout>
    <section className="splash-image">
      <div className="splash-image--content">
        <div className="row" style={{ marginBottom: "1rem"}}>
          <div className="column column--full">
            <h1 className="splash-image--title">Paragon</h1>
            <h3 className="splash-image--subtitle">A web application framework to simply get it done.</h3>
            <Link className="button button--primary" to="/get-started">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
    <AppContent>
      <div className="row">
        <div className="column column--full">
          <div className="dashing-description">
            <h1>Paragon is...</h1>
            <p>Paragon is an open source CSS framework that provides a complete toolset for quickly building web applications. Based on proven design research, Paragon is confident in delivering clean and consistent UI guidelines driven by User Experience.</p>
          </div>
          <div className="space-between--principles">
            <div>
              <div className="principles-icon consistent"></div>
            </div>
            <div>
              <h1>Consistent</h1>
              <p className="principles-paragraph">Whether it’s a button, card, or chart; Paragon’s elements are meant for each other. We carry consistent colors, edges, and design principles to all of our elements.</p>
            </div>
          </div>

          <div className="space-between--principles">
            <div>
              <div className="principles-icon clean"></div>
            </div>
            <div>
              <h1>Clean</h1>
              <p className="principles-paragraph">A minimal UI that is careful not to overwhelm the user. Paragon is clean in that it is easily understood, providing users with clear calls to action via color and placement.</p>
            </div>
          </div>

          <div className="space-between--principles">
            <div>
              <div className="principles-icon confident"></div>
            </div>
            <div>
              <h1>Confident</h1>
              <p className="principles-paragraph">We have researched best practices, conducted UX studies, and compiled our style guide to provide pieces and building blocks that are ready for our users.</p>
            </div>
          </div>
          <br/>
          <h2>A Quick Dash to the Finish</h2>
          <p>Paragon provides web applications with a framework to simply get it done. It's easy to find components, plug them in, and feel confident that every element built with paragon is ready to go. Following our style guide, you can be assured of a product that meets users needs. Paragon gets the job done quickly.</p>
        </div>
      </div>
    </AppContent>
  </Layout>
)
