import React from 'react'

import Sidebar from './sidebar'
import '../sass/dashing.scss'
import '../sass/example-page.scss'

export default ({ children }) => (
  <div className="grid" style={{ height: "100vh" }}>
    <Sidebar />
    <div className="grid--three-fourths">
      {children}
    </div>
  </div>
)
