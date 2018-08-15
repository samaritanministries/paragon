import React from 'react'

import Sidebar from './sidebar'
import '../sass/dashing.scss'
import '../sass/example-page.scss'

export default ({ children }) => (
  <div style={{ height: "100vh" }}>
    <Sidebar />
    <div className="app-content">
      {children}
    </div>
  </div>
)
