import React from 'react'

import Layout from '../components/layout'
import AppContent from '../components/appcontent'

export default () => (
  <Layout>
    <header className="subnav">
      <h1>Resources</h1>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">

          <div className="card card--resource">
            <div className="resource-image-container resources--github">
              <div className="resource-image"></div>
            </div>
            <div className="card--resource-text">
              <h3>Paragon Framework</h3>
              <a className="resource-badge" href="https://badge.fury.io/gh/samaritanministries%2Fparagon" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/gh/samaritanministries%2Fparagon.svg" alt="GitHub version" height="18" /></a>
              <p>Style Framework for Samaritan Web Products</p>
            </div>
            <div className="card--resource-buttons">
              <a className="button button--blue button--border button--smooth" href="https://github.com/samaritanministries/paragon/" target="_blank" rel="noopener noreferrer">View in github<i className="dashing-icon dashing-icon--new-tab flow-opposite"></i></a>
            </div>
          </div>

          <div className="card card--resource">
            <div className="resource-image-container resources--prototype">
              <div className="resource-image"></div>
            </div>
            <div className="card--resource-text">
              <h3>Dashing Prototype Kit</h3>
              <a className="resource-badge" href="https://badge.fury.io/gh/samaritanministries%2Fdashing-prototype-kit" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/gh/samaritanministries%2Fdashing-prototype-kit.svg" alt="GitHub version" height="18" /></a>
              <p>Adobe XD prototype kit</p>
            </div>
            <div className="card--resource-buttons align-right">
              <a className="button button--blue button--border button--smooth" href="https://github.com/samaritanministries/dashing-prototype-kit" target="_blank" rel="noopener noreferrer">View in github<i className="dashing-icon dashing-icon--new-tab flow-opposite"></i></a>
              <br/>
              <a className="button button--blue button--border button--smooth" href="https://github.com/samaritanministries/dashing-prototype-kit/raw/master/Prototype-Kit.xd" target="_blank" rel="noopener noreferrer" style={{marginTop: "0.5rem"}}>Download Kit<i className="dashing-icon dashing-icon--arrow-long-down flow-opposite"></i></a>
            </div>
          </div>

        </div>
      </div>
    </AppContent>
  </Layout>
)
