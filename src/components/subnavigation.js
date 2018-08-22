import React from 'react'
import { Link } from 'gatsby'

export default ({ location }) => (
  <div className="subnav-links">
    <Link to="./code" activeClassName="active">Code</Link>
    <Link to="./guidelines" activeClassName="active">Guidelines</Link>
  </div>
)
