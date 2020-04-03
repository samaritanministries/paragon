import React from 'react'

import Sidebar from './sidebar'
import '../sass/example-page/example-page.scss'

export default ({ children }) => (
  <div>
    <Sidebar />
    <div className="app-content">
      {children}
      <footer className="example">
        <div className="copyright">© {(new Date().getFullYear())} Samaritan Ministries International</div>
        <a href="https://github.com/samaritanministries/paragon" target="_blank" rel="noopener noreferrer">Download on GitHub</a>
      </footer>
    </div>
  </div>
)
