import React from 'react'

import Sidebar from './sidebar'
import { Link } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'
import '../sass/dashing.scss'
import '../sass/example-page.scss'

export default ({ children }) => (
  <div class="grid" style={{ height: "100vh" }}>
    <Sidebar />
    <div class="grid--three-fourths">
      {children}
    </div>
  </div>
)
