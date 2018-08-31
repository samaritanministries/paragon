import React from 'react'
import { Helmet } from 'react-helmet';

import Sidebar from './sidebar'
import '../sass/example-page/example-page.scss'

export default ({ children }) => (
  <div style={{ height: "100vh" }}>
    <Sidebar />
    <div className="app-content">
      {children}
    </div>
  </div>
)
