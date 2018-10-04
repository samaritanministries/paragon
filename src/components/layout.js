import React from 'react'
import {Helmet} from "react-helmet";

import Sidebar from './sidebar'
import '../sass/example-page/example-page.scss'

export default ({ children }) => (
  <div >
    <Helmet>
      <script src="/dashby/prism.js"></script>
    </Helmet>
    <Sidebar />
    <div className="app-content">
      {children}
      <footer>
        <div className="copyright">
          © 2018 Samaritan Ministries International
        </div>
        <a href="https://github.com/samaritanministries/dashing" target="_blank" rel="noopener noreferrer">Download on GitHub</a>
      </footer>
    </div>
  </div>
)
