import React from 'react'
import {Helmet} from "react-helmet";

import Sidebar from './sidebar'
import '../sass/example-page/example-page.scss'

export default ({ children }) => (
  <div>
    <Helmet>
      <script src="/static/prism.js" type="application/javascript"></script>
    </Helmet>
    <Sidebar />
    <div className="app-content">
      {children}
      <footer>
        <div className="copyright">© 2019 Samaritan Ministries International</div>
        <a href="https://github.com/samaritanministries/paragon" target="_blank" rel="noopener noreferrer">Download on GitHub</a>
      </footer>
    </div>
  </div>
)
